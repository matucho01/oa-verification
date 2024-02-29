import { useState, useEffect } from 'react';
import middleware from '../../middleware/middleware';
import nextConnect from 'next-connect';
import fs from 'fs';
import { validateSchema, verifySignature } from "@govtechsg/open-attestation";
import { verify, isValid, verificationBuilder, openAttestationVerifiers } from '@govtechsg/oa-verify';

const MyComponent = ({ verificationResults }) => {
  // Verifica si hay resultados y determina el mensaje
  const message = verificationResults.length > 0 ? 'Verification failed' : 'Verification succeeded';

  return (
    <div>
      <h1>{message}</h1>
      {/* Muestra la lista de resultados si hay */}
      {verificationResults.length > 0 && (
        <div>
          <h2>Verification Results:</h2>
          <ul>
            {verificationResults.map((result, index) => (
              <li key={index}>
                {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  if (req.files.cert[0].path == undefined) {
    // File does not exist.
    res.redirect('/nofile');
  } else {
    // File exists.
    let rawfiledata = fs.readFileSync(req.files.cert[0].path);
    let oajson = JSON.parse(rawfiledata);

    const verify = verificationBuilder(openAttestationVerifiers, {
      network: "sepolia",
    });

    const results = [];

    const promisesCallback = (verificationMethods) => {
      for (const verificationMethod of verificationMethods) {
        verificationMethod.then((fragment) => {
          if (fragment.status !== 'SKIPPED') {
            results.push({
              name: fragment.name,
              status: fragment.status
            });
          }
        });
      }
    };

    const fragments = await verify(oajson, promisesCallback);

    console.log(isValid(fragments));

    // Traducción de los mensajes
    const translatedResults = results.map((result) => {
      let status;
      if (result.status === 'VALID') {
        status = '√  success';
      } else {
        status = '×  error';
      }

      let message;
      switch (result.name) {
        case 'OpenAttestationHash':
          message = 'The document has not been tampered';
          break;
        case 'OpenAttestationDnsTxtIdentityProof':
          message = 'The document has been issued';
          break;
        case 'OpenAttestationEthereumDocumentStoreStatus':
          message = 'The issuer identity has not been verified';
          break;
        // Agrega más casos según sea necesario para otras verificaciones
        default:
          message = 'Unknown verification';
          break;
      }

      return `${status}   ${message}`;
    });

    console.log(translatedResults);

    // Establece el estado con los resultados traducidos
    const [verificationResults, setVerificationResults] = useState(translatedResults);

    // Renderiza el componente con los resultados
    res.json({ verificationResults });
  }
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default MyComponent;
