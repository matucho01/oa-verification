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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _middleware_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/middleware */ \"./middleware/middleware.js\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @govtechsg/open-attestation */ \"@govtechsg/open-attestation\");\n/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_middleware_middleware__WEBPACK_IMPORTED_MODULE_0__, next_connect__WEBPACK_IMPORTED_MODULE_1__]);\n([_middleware_middleware__WEBPACK_IMPORTED_MODULE_0__, next_connect__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\nfunction validateJSON(body) {\n    try {\n        var data = JSON.parse(body);\n        // if came to here, then valid\n        return data;\n    } catch (e) {\n        // failed to parse\n        return null;\n    }\n}\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nhandler.use(_middleware_middleware__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nhandler.post(async (req, res)=>{\n    if (req.files.cert[0].path == undefined) {\n        // File does not exist.\n        res.redirect('/nofile');\n    } else {\n        // File exists.\n        let rawfiledata = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(req.files.cert[0].path);\n        let oajson = JSON.parse(rawfiledata);\n        // console.log(oajson);\n        if ((0,_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_3__.verifySignature)(oajson)) {\n            res.redirect('/success');\n        } else {\n            res.redirect('/failed');\n        }\n    }\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdmVyaWZpY2F0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ2Q7QUFDbkI7QUFDMEM7U0FFcERJLFlBQVksQ0FBQ0MsSUFBSSxFQUFFLENBQUM7SUFDM0IsR0FBRyxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUNDLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILElBQUk7UUFDMUIsRUFBOEI7UUFDOUIsTUFBTSxDQUFDQyxJQUFJO0lBQ2IsQ0FBQyxDQUFDLEtBQUssRUFBRUcsQ0FBQyxFQUFFLENBQUM7UUFDWCxFQUFrQjtRQUNsQixNQUFNLENBQUMsSUFBSTtJQUNiLENBQUM7QUFDSCxDQUFDO0FBRUQsS0FBSyxDQUFDQyxPQUFPLEdBQUdULHdEQUFXO0FBQzNCUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsOERBQVU7QUFFdEJVLE9BQU8sQ0FBQ0UsSUFBSSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ2hDLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDLEVBQUVDLElBQUksSUFBSUMsU0FBUyxFQUFFLENBQUM7UUFDeEMsRUFBdUI7UUFDdkJKLEdBQUcsQ0FBQ0ssUUFBUSxDQUFDLENBQVM7SUFFeEIsQ0FBQyxNQUFNLENBQUM7UUFDSixFQUFlO1FBRWYsR0FBRyxDQUFDQyxXQUFXLEdBQUdsQixzREFBZSxDQUFDVyxHQUFHLENBQUNFLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUMsRUFBRUMsSUFBSTtRQUN4RCxHQUFHLENBQUNLLE1BQU0sR0FBR2YsSUFBSSxDQUFDQyxLQUFLLENBQUNZLFdBQVc7UUFDbkMsRUFBdUI7UUFDdkIsRUFBRSxFQUFFakIsNEVBQWUsQ0FBQ21CLE1BQU0sR0FBRyxDQUFDO1lBQzVCUixHQUFHLENBQUNLLFFBQVEsQ0FBQyxDQUFVO1FBQ3pCLENBQUMsTUFBTSxDQUFDO1lBQ05MLEdBQUcsQ0FBQ0ssUUFBUSxDQUFDLENBQVM7UUFDeEIsQ0FBQztJQUNILENBQUM7QUFFSCxDQUFDO0FBRUksS0FBSyxDQUFDSSxNQUFNLEdBQUcsQ0FBQztJQUNyQkMsR0FBRyxFQUFFLENBQUM7UUFDSkMsVUFBVSxFQUFFLEtBQUs7SUFDbkIsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZWYsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZlcmlmaWVyLy4vcGFnZXMvYXBpL3ZlcmlmaWNhdGlvbi5qcz9jMGJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkbGV3YXJlIGZyb20gJy4uLy4uL21pZGRsZXdhcmUvbWlkZGxld2FyZSdcclxuaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCdcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgeyB2ZXJpZnlTaWduYXR1cmUgfSBmcm9tIFwiQGdvdnRlY2hzZy9vcGVuLWF0dGVzdGF0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUpTT04oYm9keSkge1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoYm9keSk7XHJcbiAgICAvLyBpZiBjYW1lIHRvIGhlcmUsIHRoZW4gdmFsaWRcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIC8vIGZhaWxlZCB0byBwYXJzZVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmV4dENvbm5lY3QoKVxyXG5oYW5kbGVyLnVzZShtaWRkbGV3YXJlKVxyXG5cclxuaGFuZGxlci5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChyZXEuZmlsZXMuY2VydFswXS5wYXRoID09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gRmlsZSBkb2VzIG5vdCBleGlzdC5cclxuICAgIHJlcy5yZWRpcmVjdCgnL25vZmlsZScpXHJcbiAgICBcclxuICB9IGVsc2Uge1xyXG4gICAgICAvLyBGaWxlIGV4aXN0cy5cclxuXHJcbiAgICAgIGxldCByYXdmaWxlZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhyZXEuZmlsZXMuY2VydFswXS5wYXRoKTtcclxuICAgICAgbGV0IG9hanNvbiA9IEpTT04ucGFyc2UocmF3ZmlsZWRhdGEpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhvYWpzb24pO1xyXG4gICAgICBpZiAodmVyaWZ5U2lnbmF0dXJlKG9hanNvbikpIHtcclxuICAgICAgICByZXMucmVkaXJlY3QoJy9zdWNjZXNzJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXMucmVkaXJlY3QoJy9mYWlsZWQnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH0pXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaToge1xyXG4gICAgYm9keVBhcnNlcjogZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIl0sIm5hbWVzIjpbIm1pZGRsZXdhcmUiLCJuZXh0Q29ubmVjdCIsImZzIiwidmVyaWZ5U2lnbmF0dXJlIiwidmFsaWRhdGVKU09OIiwiYm9keSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJlIiwiaGFuZGxlciIsInVzZSIsInBvc3QiLCJyZXEiLCJyZXMiLCJmaWxlcyIsImNlcnQiLCJwYXRoIiwidW5kZWZpbmVkIiwicmVkaXJlY3QiLCJyYXdmaWxlZGF0YSIsInJlYWRGaWxlU3luYyIsIm9hanNvbiIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/verification.js\n");

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