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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _middleware_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/middleware */ \"./middleware/middleware.js\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @govtechsg/open-attestation */ \"@govtechsg/open-attestation\");\n/* harmony import */ var _govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_middleware_middleware__WEBPACK_IMPORTED_MODULE_0__, next_connect__WEBPACK_IMPORTED_MODULE_1__]);\n([_middleware_middleware__WEBPACK_IMPORTED_MODULE_0__, next_connect__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\nfunction validateJSON(body) {\n    try {\n        var data = JSON.parse(body);\n        // if came to here, then valid\n        return data;\n    } catch (e) {\n        // failed to parse\n        return null;\n    }\n}\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nhandler.use(_middleware_middleware__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nhandler.post(async (req, res)=>{\n    if (req.files.cert[0].path == undefined) {\n        // File does not exist.\n        res.redirect('/nofile');\n    } else {\n        // File exists.\n        let rawfiledata = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(req.files.cert[0].path);\n        let oajson = JSON.parse(rawfiledata);\n        // console.log(oajson);\n        if ((0,_govtechsg_open_attestation__WEBPACK_IMPORTED_MODULE_3__.verifySignature)(oajson)) {\n            res.redirect('/success');\n        } else {\n            res.redirect('/failed');\n        }\n    }\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdmVyaWZpY2F0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDZDtBQUNuQjtBQUMwQztBQUN0QztTQUVkSyxZQUFZLENBQUNDLElBQUksRUFBRSxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsR0FBRyxDQUFDQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxJQUFJO1FBQzFCLEVBQThCO1FBQzlCLE1BQU0sQ0FBQ0MsSUFBSTtJQUNiLENBQUMsQ0FBQyxLQUFLLEVBQUVHLENBQUMsRUFBRSxDQUFDO1FBQ1gsRUFBa0I7UUFDbEIsTUFBTSxDQUFDLElBQUk7SUFDYixDQUFDO0FBQ0gsQ0FBQztBQUVELEtBQUssQ0FBQ0MsT0FBTyxHQUFHVix3REFBVztBQUMzQlUsT0FBTyxDQUFDQyxHQUFHLENBQUNaLDhEQUFVO0FBRXRCVyxPQUFPLENBQUNFLElBQUksUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNoQyxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxFQUFFYixJQUFJLElBQUljLFNBQVMsRUFBRSxDQUFDO1FBQ3hDLEVBQXVCO1FBQ3ZCSCxHQUFHLENBQUNJLFFBQVEsQ0FBQyxDQUFTO0lBRXhCLENBQUMsTUFBTSxDQUFDO1FBQ0osRUFBZTtRQUNmLEdBQUcsQ0FBQ0MsV0FBVyxHQUFHbEIsc0RBQWUsQ0FBQ1ksR0FBRyxDQUFDRSxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDLEVBQUViLElBQUk7UUFDeEQsR0FBRyxDQUFDa0IsTUFBTSxHQUFHZCxJQUFJLENBQUNDLEtBQUssQ0FBQ1csV0FBVztRQUNuQyxFQUF1QjtRQUN2QixFQUFFLEVBQUVqQiw0RUFBZSxDQUFDbUIsTUFBTSxHQUFHLENBQUM7WUFDNUJQLEdBQUcsQ0FBQ0ksUUFBUSxDQUFDLENBQVU7UUFDekIsQ0FBQyxNQUFNLENBQUM7WUFDTkosR0FBRyxDQUFDSSxRQUFRLENBQUMsQ0FBUztRQUN4QixDQUFDO0lBQ0gsQ0FBQztBQUVILENBQUM7QUFFSSxLQUFLLENBQUNJLE1BQU0sR0FBRyxDQUFDO0lBQ3JCQyxHQUFHLEVBQUUsQ0FBQztRQUNKQyxVQUFVLEVBQUUsS0FBSztJQUNuQixDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlZCxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmVyaWZpZXIvLi9wYWdlcy9hcGkvdmVyaWZpY2F0aW9uLmpzP2MwYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9taWRkbGV3YXJlJ1xyXG5pbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0J1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCB7IHZlcmlmeVNpZ25hdHVyZSB9IGZyb20gXCJAZ292dGVjaHNnL29wZW4tYXR0ZXN0YXRpb25cIjtcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlSlNPTihib2R5KSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShib2R5KTtcclxuICAgIC8vIGlmIGNhbWUgdG8gaGVyZSwgdGhlbiB2YWxpZFxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gZmFpbGVkIHRvIHBhcnNlXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpXHJcbmhhbmRsZXIudXNlKG1pZGRsZXdhcmUpXHJcblxyXG5oYW5kbGVyLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgaWYgKHJlcS5maWxlcy5jZXJ0WzBdLnBhdGggPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAvLyBGaWxlIGRvZXMgbm90IGV4aXN0LlxyXG4gICAgcmVzLnJlZGlyZWN0KCcvbm9maWxlJylcclxuICAgIFxyXG4gIH0gZWxzZSB7XHJcbiAgICAgIC8vIEZpbGUgZXhpc3RzLlxyXG4gICAgICBsZXQgcmF3ZmlsZWRhdGEgPSBmcy5yZWFkRmlsZVN5bmMocmVxLmZpbGVzLmNlcnRbMF0ucGF0aCk7XHJcbiAgICAgIGxldCBvYWpzb24gPSBKU09OLnBhcnNlKHJhd2ZpbGVkYXRhKTtcclxuICAgICAgLy8gY29uc29sZS5sb2cob2Fqc29uKTtcclxuICAgICAgaWYgKHZlcmlmeVNpZ25hdHVyZShvYWpzb24pKSB7XHJcbiAgICAgICAgcmVzLnJlZGlyZWN0KCcvc3VjY2VzcycpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnJlZGlyZWN0KCcvZmFpbGVkJylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBhcGk6IHtcclxuICAgIGJvZHlQYXJzZXI6IGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXHJcbiJdLCJuYW1lcyI6WyJtaWRkbGV3YXJlIiwibmV4dENvbm5lY3QiLCJmcyIsInZlcmlmeVNpZ25hdHVyZSIsInBhdGgiLCJ2YWxpZGF0ZUpTT04iLCJib2R5IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImUiLCJoYW5kbGVyIiwidXNlIiwicG9zdCIsInJlcSIsInJlcyIsImZpbGVzIiwiY2VydCIsInVuZGVmaW5lZCIsInJlZGlyZWN0IiwicmF3ZmlsZWRhdGEiLCJyZWFkRmlsZVN5bmMiLCJvYWpzb24iLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/verification.js\n");

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