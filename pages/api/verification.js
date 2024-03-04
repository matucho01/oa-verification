import middleware from '../../middleware/middleware'
import nextConnect from 'next-connect'
import fs from 'fs'
import { validateSchema, verifySignature } from "@govtechsg/open-attestation";
import { isValid, verificationBuilder, openAttestationVerifiers } from '@govtechsg/oa-verify';

function validateJSON(body) {
  try {
    var data = JSON.parse(body);
    // if came to here, then valid
    return data;
  } catch (e) {
    // failed to parse
    return null;
  }
}

const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res) => {
  if (req.files.cert[0].path == undefined) {
    // File does not exist.
    res.redirect('/nofile')

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

    // Message translation
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
          if (status === '√  success') {
            message = 'The document has not been tampered';
          } else if (status === '×  error') {
            message = 'The document has been tampered';
          }
          break;

        case 'OpenAttestationEthereumDocumentStoreStatus':
          if (status === '√  success') {
            message = 'The document has been issued';
          } else if (status === '×  error') {
            message = 'The document has not been issued';
          }
          break;

        case 'OpenAttestationDnsTxtIdentityProof':
          if (status === '√  success') {
            message = 'The issuer identity has been verified';
          } else if (status === '×  error') {
            message = 'The issuer identity has not been verified';
          }
          break;

        default:
          message = 'Unknown verification';
          break;
      }

      return `${status}   ${message}`;
    });

    console.log(translatedResults);

    const outputFilePath = 'verificationResults.txt';

    // Write results to a file
    fs.writeFileSync(outputFilePath, translatedResults.join('\n'), 'utf-8');
    console.log(`Results written to: ${outputFilePath}`);

    if (verifySignature(oajson) && validateSchema(oajson) && isValid(fragments)) {
      res.redirect('/success')
    } else {
      res.redirect('/failed')
    }
  }

})

export const config = {
  api: {
    bodyParser: false
  }
}

export default handler
