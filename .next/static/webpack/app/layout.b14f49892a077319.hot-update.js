"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./lib/data.ts":
/*!*********************!*\
  !*** ./lib/data.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/cg */ \"(app-client)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/lu */ \"(app-client)/./node_modules/react-icons/lu/index.esm.js\");\n/* harmony import */ var _public_corpcomment_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/corpcomment.png */ \"(app-client)/./public/corpcomment.png\");\n/* harmony import */ var _public_rmtdev_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/rmtdev.png */ \"(app-client)/./public/rmtdev.png\");\n/* harmony import */ var _public_wordanalytics_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/wordanalytics.png */ \"(app-client)/./public/wordanalytics.png\");\n\n\n\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Graduated bootcamp\",\n        location: \"Miami, FL\",\n        description: \"I graduated after 6 months of studying. I immediately found a job as a front-end developer.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_4__.LuGraduationCap),\n        date: \"2019\"\n    },\n    {\n        title: \"Front-End Developer\",\n        location: \"Orlando, FL\",\n        description: \"I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_5__.CgWorkAlt),\n        date: \"2019 - 2021\"\n    },\n    {\n        title: \"Full-Stack Developer\",\n        location: \"Houston, TX\",\n        description: \"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaReact),\n        date: \"2021 - present\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"CUL.IN\",\n        description: \"I developed a comprehensive cloud kitchen management application, encompassing both a Point of Sale (POS) system and web panels for kitchen and order management. \",\n        tags: [\n            \"React\",\n            \"Node.js\",\n            \"Express.js\",\n            \"MongoDB\",\n            \"React-Bootstrap\"\n        ],\n        imageUrl: _public_corpcomment_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    {\n        title: \"Oufer\",\n        description: \"Developed and deployed a marketplace application that offers consumers and merchants a streamlined advanced solution to save time and resources while shopping\",\n        tags: [\n            \"React\",\n            \"TypeScript\",\n            \"Next.js\",\n            \"Tailwind\",\n            \"Redux\"\n        ],\n        imageUrl: _public_rmtdev_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    {\n        title: \"Word Analytics\",\n        description: \"A public web app for quick analytics on text. It shows word count, character count and social media post limits.\",\n        tags: [\n            \"React\",\n            \"Next.js\",\n            \"SQL\",\n            \"Tailwind\",\n            \"Framer\"\n        ],\n        imageUrl: _public_wordanalytics_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React\",\n    \"Next.js\",\n    \"Node.js\",\n    \"Git\",\n    \"Tailwind\",\n    \"Prisma\",\n    \"MongoDB\",\n    \"Express\",\n    \"Python\",\n    \"Java\",\n    \"Django\",\n    \"Framer Motion\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbGliL2RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2lCO0FBQ0Y7QUFDUTtBQUNLO0FBQ1Y7QUFDYztBQUVuRCxNQUFNTyxRQUFRO0lBQ25CO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNQyxrQkFBa0I7SUFDN0I7UUFDRUMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWQsMERBQW1CLENBQUNHLDJEQUFlQTtRQUN6Q2EsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWQsMERBQW1CLENBQUNDLHFEQUFTQTtRQUNuQ2UsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWQsMERBQW1CLENBQUNFLG1EQUFPQTtRQUNqQ2MsTUFBTTtJQUNSO0NBQ0QsQ0FBVTtBQUVKLE1BQU1DLGVBQWU7SUFDMUI7UUFDRU4sT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQVc7WUFBYztZQUFXO1NBQW9CO1FBQ3hFQyxVQUFVZiwrREFBY0E7SUFDMUI7SUFDQTtRQUNFTyxPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQVM7WUFBYztZQUFXO1lBQVk7U0FBUTtRQUM3REMsVUFBVWQsMERBQVNBO0lBQ3JCO0lBQ0E7UUFDRU0sT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQVc7WUFBTztZQUFZO1NBQVM7UUFDdkRDLFVBQVViLGlFQUFnQkE7SUFDNUI7Q0FDRCxDQUFVO0FBRUosTUFBTWMsYUFBYTtJQUN4QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNELENBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2RhdGEudHM/MTZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDZ1dvcmtBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcbmltcG9ydCB7IEZhUmVhY3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEx1R3JhZHVhdGlvbkNhcCB9IGZyb20gXCJyZWFjdC1pY29ucy9sdVwiO1xuaW1wb3J0IGNvcnBjb21tZW50SW1nIGZyb20gXCJAL3B1YmxpYy9jb3JwY29tbWVudC5wbmdcIjtcbmltcG9ydCBybXRkZXZJbWcgZnJvbSBcIkAvcHVibGljL3JtdGRldi5wbmdcIjtcbmltcG9ydCB3b3JkYW5hbHl0aWNzSW1nIGZyb20gXCJAL3B1YmxpYy93b3JkYW5hbHl0aWNzLnBuZ1wiO1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkhvbWVcIixcbiAgICBoYXNoOiBcIiNob21lXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFib3V0XCIsXG4gICAgaGFzaDogXCIjYWJvdXRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUHJvamVjdHNcIixcbiAgICBoYXNoOiBcIiNwcm9qZWN0c1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTa2lsbHNcIixcbiAgICBoYXNoOiBcIiNza2lsbHNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRXhwZXJpZW5jZVwiLFxuICAgIGhhc2g6IFwiI2V4cGVyaWVuY2VcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ29udGFjdFwiLFxuICAgIGhhc2g6IFwiI2NvbnRhY3RcIixcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBleHBlcmllbmNlc0RhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJHcmFkdWF0ZWQgYm9vdGNhbXBcIixcbiAgICBsb2NhdGlvbjogXCJNaWFtaSwgRkxcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSSBncmFkdWF0ZWQgYWZ0ZXIgNiBtb250aHMgb2Ygc3R1ZHlpbmcuIEkgaW1tZWRpYXRlbHkgZm91bmQgYSBqb2IgYXMgYSBmcm9udC1lbmQgZGV2ZWxvcGVyLlwiLFxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTHVHcmFkdWF0aW9uQ2FwKSxcbiAgICBkYXRlOiBcIjIwMTlcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkZyb250LUVuZCBEZXZlbG9wZXJcIixcbiAgICBsb2NhdGlvbjogXCJPcmxhbmRvLCBGTFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJIHdvcmtlZCBhcyBhIGZyb250LWVuZCBkZXZlbG9wZXIgZm9yIDIgeWVhcnMgaW4gMSBqb2IgYW5kIDEgeWVhciBpbiBhbm90aGVyIGpvYi4gSSBhbHNvIHVwc2tpbGxlZCB0byB0aGUgZnVsbCBzdGFjay5cIixcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KENnV29ya0FsdCksXG4gICAgZGF0ZTogXCIyMDE5IC0gMjAyMVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRnVsbC1TdGFjayBEZXZlbG9wZXJcIixcbiAgICBsb2NhdGlvbjogXCJIb3VzdG9uLCBUWFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJJ20gbm93IGEgZnVsbC1zdGFjayBkZXZlbG9wZXIgd29ya2luZyBhcyBhIGZyZWVsYW5jZXIuIE15IHN0YWNrIGluY2x1ZGVzIFJlYWN0LCBOZXh0LmpzLCBUeXBlU2NyaXB0LCBUYWlsd2luZCwgUHJpc21hIGFuZCBNb25nb0RCLiBJJ20gb3BlbiB0byBmdWxsLXRpbWUgb3Bwb3J0dW5pdGllcy5cIixcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KEZhUmVhY3QpLFxuICAgIGRhdGU6IFwiMjAyMSAtIHByZXNlbnRcIixcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0c0RhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJDVUwuSU5cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSSBkZXZlbG9wZWQgYSBjb21wcmVoZW5zaXZlIGNsb3VkIGtpdGNoZW4gbWFuYWdlbWVudCBhcHBsaWNhdGlvbiwgZW5jb21wYXNzaW5nIGJvdGggYSBQb2ludCBvZiBTYWxlIChQT1MpIHN5c3RlbSBhbmQgd2ViIHBhbmVscyBmb3Iga2l0Y2hlbiBhbmQgb3JkZXIgbWFuYWdlbWVudC4gXCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJOb2RlLmpzXCIsIFwiRXhwcmVzcy5qc1wiLCBcIk1vbmdvREJcIiwgXCJSZWFjdC1Cb290c3RyYXBcIiwgXSxcbiAgICBpbWFnZVVybDogY29ycGNvbW1lbnRJbWcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJPdWZlclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJEZXZlbG9wZWQgYW5kIGRlcGxveWVkIGEgbWFya2V0cGxhY2UgYXBwbGljYXRpb24gdGhhdCBvZmZlcnMgY29uc3VtZXJzIGFuZCBtZXJjaGFudHMgYSBzdHJlYW1saW5lZCBhZHZhbmNlZCBzb2x1dGlvbiB0byBzYXZlIHRpbWUgYW5kIHJlc291cmNlcyB3aGlsZSBzaG9wcGluZ1wiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiVHlwZVNjcmlwdFwiLCBcIk5leHQuanNcIiwgXCJUYWlsd2luZFwiLCBcIlJlZHV4XCJdLFxuICAgIGltYWdlVXJsOiBybXRkZXZJbWcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJXb3JkIEFuYWx5dGljc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHB1YmxpYyB3ZWIgYXBwIGZvciBxdWljayBhbmFseXRpY3Mgb24gdGV4dC4gSXQgc2hvd3Mgd29yZCBjb3VudCwgY2hhcmFjdGVyIGNvdW50IGFuZCBzb2NpYWwgbWVkaWEgcG9zdCBsaW1pdHMuXCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJOZXh0LmpzXCIsIFwiU1FMXCIsIFwiVGFpbHdpbmRcIiwgXCJGcmFtZXJcIl0sXG4gICAgaW1hZ2VVcmw6IHdvcmRhbmFseXRpY3NJbWcsXG4gIH0sXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3Qgc2tpbGxzRGF0YSA9IFtcbiAgXCJIVE1MXCIsXG4gIFwiQ1NTXCIsXG4gIFwiSmF2YVNjcmlwdFwiLFxuICBcIlR5cGVTY3JpcHRcIixcbiAgXCJSZWFjdFwiLFxuICBcIk5leHQuanNcIixcbiAgXCJOb2RlLmpzXCIsXG4gIFwiR2l0XCIsXG4gIFwiVGFpbHdpbmRcIixcbiAgXCJQcmlzbWFcIixcbiAgXCJNb25nb0RCXCIsXG4gIFwiRXhwcmVzc1wiLFxuICBcIlB5dGhvblwiLFxuICBcIkphdmFcIixcbiAgXCJEamFuZ29cIixcbiAgXCJGcmFtZXIgTW90aW9uXCIsXG5dIGFzIGNvbnN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2dXb3JrQWx0IiwiRmFSZWFjdCIsIkx1R3JhZHVhdGlvbkNhcCIsImNvcnBjb21tZW50SW1nIiwicm10ZGV2SW1nIiwid29yZGFuYWx5dGljc0ltZyIsImxpbmtzIiwibmFtZSIsImhhc2giLCJleHBlcmllbmNlc0RhdGEiLCJ0aXRsZSIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiY3JlYXRlRWxlbWVudCIsImRhdGUiLCJwcm9qZWN0c0RhdGEiLCJ0YWdzIiwiaW1hZ2VVcmwiLCJza2lsbHNEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./lib/data.ts\n"));

/***/ })

});