"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/verification";
exports.ids = ["pages/api/verification"];
exports.modules = {

/***/ "@govtechsg/oa-verify":
/*!***************************************!*\
  !*** external "@govtechsg/oa-verify" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@govtechsg/oa-verify");

/***/ }),

/***/ "@govtechsg/open-attestation":
/*!**********************************************!*\
  !*** external "@govtechsg/open-attestation" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@govtechsg/open-attestation");

/***/ }),

/***/ "multiparty":
/*!*****************************!*\
  !*** external "multiparty" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("multiparty");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "./middleware/middleware.js":
/*!**********************************!*\
  !*** ./middleware/middleware.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multiparty */ \"multiparty\");\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\nconst middleware = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nmiddleware.use(async (req, res, next)=>{\n    const form = new (multiparty__WEBPACK_IMPORTED_MODULE_1___default().Form)();\n    await form.parse(req, function(err, fields, files) {\n        req.body = fields;\n        req.files = files;\n        next();\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (middleware);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9taWRkbGV3YXJlL21pZGRsZXdhcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQztBQUNIO0FBRW5DLEtBQUssQ0FBQ0UsVUFBVSxHQUFHRix3REFBVztBQUU5QkUsVUFBVSxDQUFDQyxHQUFHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEdBQUssQ0FBQztJQUN4QyxLQUFLLENBQUNDLElBQUksR0FBRyxHQUFHLENBQUNOLHdEQUFlO0lBRWhDLEtBQUssQ0FBQ00sSUFBSSxDQUFDRSxLQUFLLENBQUNMLEdBQUcsRUFBRSxRQUFRLENBQUVNLEdBQUcsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUNuRFIsR0FBRyxDQUFDUyxJQUFJLEdBQUdGLE1BQU07UUFDakJQLEdBQUcsQ0FBQ1EsS0FBSyxHQUFHQSxLQUFLO1FBQ2pCTixJQUFJO0lBQ04sQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZUosVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZlcmlmaWVyLy4vbWlkZGxld2FyZS9taWRkbGV3YXJlLmpzPzk0ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCdcclxuaW1wb3J0IG11bHRpcGFydHkgZnJvbSAnbXVsdGlwYXJ0eSdcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBuZXh0Q29ubmVjdCgpXHJcblxyXG5taWRkbGV3YXJlLnVzZShhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBjb25zdCBmb3JtID0gbmV3IG11bHRpcGFydHkuRm9ybSgpXHJcblxyXG4gIGF3YWl0IGZvcm0ucGFyc2UocmVxLCBmdW5jdGlvbiAoZXJyLCBmaWVsZHMsIGZpbGVzKSB7XHJcbiAgICByZXEuYm9keSA9IGZpZWxkc1xyXG4gICAgcmVxLmZpbGVzID0gZmlsZXNcclxuICAgIG5leHQoKVxyXG4gIH0pXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlIl0sIm5hbWVzIjpbIm5leHRDb25uZWN0IiwibXVsdGlwYXJ0eSIsIm1pZGRsZXdhcmUiLCJ1c2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZm9ybSIsIkZvcm0iLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./middleware/middleware.js\n");

/***/ }),

/***/ "./pages/api/verification.js":
/*!***********************************!*\
  !*** ./pages/api/verification.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _middleware_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/middleware */ \"./middleware/middleware.js\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @govtechsg/open-attestation */ \"@govtechsg/open-attestation\");\n/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _govtechsg_oa_verify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @govtechsg/oa-verify */ \"@govtechsg/oa-verify\");\n/* harmony import */ var _govtechsg_oa_verify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_govtechsg_oa_verify__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_middleware_middleware__WEBPACK_IMPORTED_MODULE_0__, next_connect__WEBPACK_IMPORTED_MODULE_1__]);\n([_middleware_middleware__WEBPACK_IMPORTED_MODULE_0__, next_connect__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\nfunction validateJSON(body) {\n    try {\n        var data = JSON.parse(body);\n        // if came to here, then valid\n        return data;\n    } catch (e) {\n        // failed to parse\n        return null;\n    }\n}\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nhandler.use(_middleware_middleware__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nhandler.post(async (req, res)=>{\n    if (req.files.cert[0].path == undefined) {\n        // File does not exist.\n        res.redirect('/nofile');\n    } else {\n        // File exists.\n        let rawfiledata = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(req.files.cert[0].path);\n        let oajson = JSON.parse(rawfiledata);\n        const verify = (0,_govtechsg_oa_verify__WEBPACK_IMPORTED_MODULE_4__.verificationBuilder)(_govtechsg_oa_verify__WEBPACK_IMPORTED_MODULE_4__.openAttestationVerifiers, {\n            network: \"sepolia\"\n        });\n        const results = [];\n        const promisesCallback = (verificationMethods)=>{\n            for (const verificationMethod of verificationMethods){\n                verificationMethod.then((fragment)=>{\n                    if (fragment.status !== 'SKIPPED') {\n                        results.push({\n                            name: fragment.name,\n                            status: fragment.status\n                        });\n                    }\n                });\n            }\n        };\n        const fragments = await verify(oajson, promisesCallback);\n        console.log((0,_govtechsg_oa_verify__WEBPACK_IMPORTED_MODULE_4__.isValid)(fragments));\n        // Message translation\n        const translatedResults = results.map((result)=>{\n            let status;\n            if (result.status === 'VALID') {\n                status = '√  success';\n            } else {\n                status = '\\xd7  error';\n            }\n            let message;\n            switch(result.name){\n                case 'OpenAttestationHash':\n                    if (status === '√  success') {\n                        message = 'The document has not been tampered';\n                    } else if (status === '\\xd7  error') {\n                        message = 'The document has been tampered';\n                    }\n                    break;\n                case 'OpenAttestationEthereumDocumentStoreStatus':\n                    if (status === '√  success') {\n                        message = 'The document has been issued';\n                    } else if (status === '\\xd7  error') {\n                        message = 'The document has not been issued';\n                    }\n                    break;\n                case 'OpenAttestationDnsTxtIdentityProof':\n                    if (status === '√  success') {\n                        message = 'The issuer identity has been verified';\n                    } else if (status === '\\xd7  error') {\n                        message = 'The issuer identity has not been verified';\n                    }\n                    break;\n                default:\n                    message = 'Unknown verification';\n                    break;\n            }\n            return `${status}   ${message}`;\n        });\n        console.log(translatedResults);\n        const outputFilePath = 'verificationResults.txt';\n        // Write results to a file\n        fs__WEBPACK_IMPORTED_MODULE_2___default().writeFileSync(outputFilePath, translatedResults.join('\\n'), 'utf-8');\n        console.log(`Results written to: ${outputFilePath}`);\n        if ((0,_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_3__.verifySignature)(oajson) && (0,_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_3__.validateSchema)(oajson) && (0,_govtechsg_oa_verify__WEBPACK_IMPORTED_MODULE_4__.isValid)(fragments)) {\n            res.redirect('/success');\n        } else {\n            res.redirect('/failed');\n        }\n    }\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDeUIsTUFBTSxHQUFHLENBQUM7SUFDckJDLEdBQUcsRUFBRSxDQUFDO1FBQ0pDLFVBQVUsRUFBRSxLQUFLO0lBQ25CLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVwQyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmVyaWZpZXIvLi9wYWdlcy9hcGkvdmVyaWZpY2F0aW9uLmpzP2MwYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9taWRkbGV3YXJlJ1xyXG5pbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0J1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCB7IHZhbGlkYXRlU2NoZW1hLCB2ZXJpZnlTaWduYXR1cmUgfSBmcm9tIFwiQGdvdnRlY2hzZy9vcGVuLWF0dGVzdGF0aW9uXCI7XHJcbmltcG9ydCB7IGlzVmFsaWQsIHZlcmlmaWNhdGlvbkJ1aWxkZXIsIG9wZW5BdHRlc3RhdGlvblZlcmlmaWVycyB9IGZyb20gJ0Bnb3Z0ZWNoc2cvb2EtdmVyaWZ5JztcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlSlNPTihib2R5KSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShib2R5KTtcclxuICAgIC8vIGlmIGNhbWUgdG8gaGVyZSwgdGhlbiB2YWxpZFxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gZmFpbGVkIHRvIHBhcnNlXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpXHJcbmhhbmRsZXIudXNlKG1pZGRsZXdhcmUpXHJcblxyXG5oYW5kbGVyLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgaWYgKHJlcS5maWxlcy5jZXJ0WzBdLnBhdGggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAvLyBGaWxlIGRvZXMgbm90IGV4aXN0LlxyXG4gICAgcmVzLnJlZGlyZWN0KCcvbm9maWxlJylcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEZpbGUgZXhpc3RzLlxyXG4gICAgbGV0IHJhd2ZpbGVkYXRhID0gZnMucmVhZEZpbGVTeW5jKHJlcS5maWxlcy5jZXJ0WzBdLnBhdGgpO1xyXG4gICAgbGV0IG9hanNvbiA9IEpTT04ucGFyc2UocmF3ZmlsZWRhdGEpO1xyXG5cclxuICAgIGNvbnN0IHZlcmlmeSA9IHZlcmlmaWNhdGlvbkJ1aWxkZXIob3BlbkF0dGVzdGF0aW9uVmVyaWZpZXJzLCB7XHJcbiAgICAgIG5ldHdvcms6IFwic2Vwb2xpYVwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHByb21pc2VzQ2FsbGJhY2sgPSAodmVyaWZpY2F0aW9uTWV0aG9kcykgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IHZlcmlmaWNhdGlvbk1ldGhvZCBvZiB2ZXJpZmljYXRpb25NZXRob2RzKSB7XHJcbiAgICAgICAgdmVyaWZpY2F0aW9uTWV0aG9kLnRoZW4oKGZyYWdtZW50KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZnJhZ21lbnQuc3RhdHVzICE9PSAnU0tJUFBFRCcpIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgICBuYW1lOiBmcmFnbWVudC5uYW1lLFxyXG4gICAgICAgICAgICAgIHN0YXR1czogZnJhZ21lbnQuc3RhdHVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZyYWdtZW50cyA9IGF3YWl0IHZlcmlmeShvYWpzb24sIHByb21pc2VzQ2FsbGJhY2spO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGlzVmFsaWQoZnJhZ21lbnRzKSk7XHJcblxyXG4gICAgLy8gTWVzc2FnZSB0cmFuc2xhdGlvblxyXG4gICAgY29uc3QgdHJhbnNsYXRlZFJlc3VsdHMgPSByZXN1bHRzLm1hcCgocmVzdWx0KSA9PiB7XHJcbiAgICAgIGxldCBzdGF0dXM7XHJcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnVkFMSUQnKSB7XHJcbiAgICAgICAgc3RhdHVzID0gJ+KImiAgc3VjY2Vzcyc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdHVzID0gJ8OXICBlcnJvcic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBtZXNzYWdlO1xyXG4gICAgICBzd2l0Y2ggKHJlc3VsdC5uYW1lKSB7XHJcbiAgICAgICAgY2FzZSAnT3BlbkF0dGVzdGF0aW9uSGFzaCc6XHJcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAn4oiaICBzdWNjZXNzJykge1xyXG4gICAgICAgICAgICBtZXNzYWdlID0gJ1RoZSBkb2N1bWVudCBoYXMgbm90IGJlZW4gdGFtcGVyZWQnO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09ICfDlyAgZXJyb3InKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAnVGhlIGRvY3VtZW50IGhhcyBiZWVuIHRhbXBlcmVkJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdPcGVuQXR0ZXN0YXRpb25FdGhlcmV1bURvY3VtZW50U3RvcmVTdGF0dXMnOlxyXG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ+KImiAgc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgbWVzc2FnZSA9ICdUaGUgZG9jdW1lbnQgaGFzIGJlZW4gaXNzdWVkJztcclxuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnw5cgIGVycm9yJykge1xyXG4gICAgICAgICAgICBtZXNzYWdlID0gJ1RoZSBkb2N1bWVudCBoYXMgbm90IGJlZW4gaXNzdWVkJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdPcGVuQXR0ZXN0YXRpb25EbnNUeHRJZGVudGl0eVByb29mJzpcclxuICAgICAgICAgIGlmIChzdGF0dXMgPT09ICfiiJogIHN1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAnVGhlIGlzc3VlciBpZGVudGl0eSBoYXMgYmVlbiB2ZXJpZmllZCc7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ8OXICBlcnJvcicpIHtcclxuICAgICAgICAgICAgbWVzc2FnZSA9ICdUaGUgaXNzdWVyIGlkZW50aXR5IGhhcyBub3QgYmVlbiB2ZXJpZmllZCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIG1lc3NhZ2UgPSAnVW5rbm93biB2ZXJpZmljYXRpb24nO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBgJHtzdGF0dXN9ICAgJHttZXNzYWdlfWA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0cmFuc2xhdGVkUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc3Qgb3V0cHV0RmlsZVBhdGggPSAndmVyaWZpY2F0aW9uUmVzdWx0cy50eHQnO1xyXG5cclxuICAgIC8vIFdyaXRlIHJlc3VsdHMgdG8gYSBmaWxlXHJcbiAgICBmcy53cml0ZUZpbGVTeW5jKG91dHB1dEZpbGVQYXRoLCB0cmFuc2xhdGVkUmVzdWx0cy5qb2luKCdcXG4nKSwgJ3V0Zi04Jyk7XHJcbiAgICBjb25zb2xlLmxvZyhgUmVzdWx0cyB3cml0dGVuIHRvOiAke291dHB1dEZpbGVQYXRofWApO1xyXG5cclxuICAgIGlmICh2ZXJpZnlTaWduYXR1cmUob2Fqc29uKSAmJiB2YWxpZGF0ZVNjaGVtYShvYWpzb24pICYmIGlzVmFsaWQoZnJhZ21lbnRzKSkge1xyXG4gICAgICByZXMucmVkaXJlY3QoJy9zdWNjZXNzJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5yZWRpcmVjdCgnL2ZhaWxlZCcpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlclxyXG4iXSwibmFtZXMiOlsibWlkZGxld2FyZSIsIm5leHRDb25uZWN0IiwiZnMiLCJ2YWxpZGF0ZVNjaGVtYSIsInZlcmlmeVNpZ25hdHVyZSIsImlzVmFsaWQiLCJ2ZXJpZmljYXRpb25CdWlsZGVyIiwib3BlbkF0dGVzdGF0aW9uVmVyaWZpZXJzIiwidmFsaWRhdGVKU09OIiwiYm9keSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJlIiwiaGFuZGxlciIsInVzZSIsInBvc3QiLCJyZXEiLCJyZXMiLCJmaWxlcyIsImNlcnQiLCJwYXRoIiwidW5kZWZpbmVkIiwicmVkaXJlY3QiLCJyYXdmaWxlZGF0YSIsInJlYWRGaWxlU3luYyIsIm9hanNvbiIsInZlcmlmeSIsIm5ldHdvcmsiLCJyZXN1bHRzIiwicHJvbWlzZXNDYWxsYmFjayIsInZlcmlmaWNhdGlvbk1ldGhvZHMiLCJ2ZXJpZmljYXRpb25NZXRob2QiLCJ0aGVuIiwiZnJhZ21lbnQiLCJzdGF0dXMiLCJwdXNoIiwibmFtZSIsImZyYWdtZW50cyIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2xhdGVkUmVzdWx0cyIsIm1hcCIsInJlc3VsdCIsIm1lc3NhZ2UiLCJvdXRwdXRGaWxlUGF0aCIsIndyaXRlRmlsZVN5bmMiLCJqb2luIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/verification.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/verification.js"));
module.exports = __webpack_exports__;

})();