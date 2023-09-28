"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./lib/data.ts":
/*!*********************!*\
  !*** ./lib/data.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/cg */ \"(app-client)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/lu */ \"(app-client)/./node_modules/react-icons/lu/index.esm.js\");\n/* harmony import */ var _public_corpcomment_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/corpcomment.png */ \"(app-client)/./public/corpcomment.png\");\n/* harmony import */ var _public_rmtdev_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/rmtdev.png */ \"(app-client)/./public/rmtdev.png\");\n\n\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Full Stack Developer Internship\",\n        location: \"Miami, FL\",\n        description: \"I graduated after 6 months of studying. I immediately found a job as a front-end developer.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_3__.LuGraduationCap),\n        date: \"2019\"\n    },\n    {\n        title: \"Front-End Developer\",\n        location: \"Orlando, FL\",\n        description: \"I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_4__.CgWorkAlt),\n        date: \"2019 - 2021\"\n    },\n    {\n        title: \"Full-Stack Developer\",\n        location: \"Houston, TX\",\n        description: \"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaReact),\n        date: \"2021 - present\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"CUL.IN\",\n        description: \"I developed a comprehensive cloud kitchen management application, encompassing both a Point of Sale (POS) system and web panels for kitchen and order management. \",\n        tags: [\n            \"React\",\n            \"Node.js\",\n            \"Express.js\",\n            \"MongoDB\",\n            \"React-Bootstrap\"\n        ],\n        imageUrl: _public_corpcomment_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    {\n        title: \"Oufer\",\n        description: \"Oufer is a marketplace application that offers consumers and merchants a streamlined solution to save time and resources while shopping.\",\n        tags: [\n            \"Angular\",\n            \"NodeJS\",\n            \"Express\"\n        ],\n        imageUrl: _public_rmtdev_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }\n];\nconst skillsData = [\n    \"React\",\n    \"Next.js\",\n    \"Node.js\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"HTML\",\n    \"CSS\",\n    \"Flutter\",\n    \"Git\",\n    \"Tailwind\",\n    \"MongoDB\",\n    \"Express\",\n    \"Python\",\n    \"Java\",\n    \"Framer Motion\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbGliL2RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDaUI7QUFDRjtBQUNRO0FBQ0s7QUFDVjtBQUdyQyxNQUFNTSxRQUFRO0lBQ25CO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNQyxrQkFBa0I7SUFDN0I7UUFDRUMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWIsMERBQW1CLENBQUNHLDJEQUFlQTtRQUN6Q1ksTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWIsMERBQW1CLENBQUNDLHFEQUFTQTtRQUNuQ2MsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWIsMERBQW1CLENBQUNFLG1EQUFPQTtRQUNqQ2EsTUFBTTtJQUNSO0NBQ0QsQ0FBVTtBQUVKLE1BQU1DLGVBQWU7SUFDMUI7UUFDRU4sT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQVc7WUFBYztZQUFXO1NBQWtCO1FBQ3RFQyxVQUFVZCwrREFBY0E7SUFDMUI7SUFDQTtRQUNFTSxPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQVc7WUFBVTtTQUFVO1FBQ3RDQyxVQUFVYiwwREFBU0E7SUFDckI7Q0FDRCxDQUFVO0FBRUosTUFBTWMsYUFBYTtJQUN4QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRCxDQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9kYXRhLnRzPzE2ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2dXb3JrQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2NnXCI7XG5pbXBvcnQgeyBGYVJlYWN0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBMdUdyYWR1YXRpb25DYXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvbHVcIjtcbmltcG9ydCBjb3JwY29tbWVudEltZyBmcm9tIFwiQC9wdWJsaWMvY29ycGNvbW1lbnQucG5nXCI7XG5pbXBvcnQgcm10ZGV2SW1nIGZyb20gXCJAL3B1YmxpYy9ybXRkZXYucG5nXCI7XG5pbXBvcnQgd29yZGFuYWx5dGljc0ltZyBmcm9tIFwiQC9wdWJsaWMvd29yZGFuYWx5dGljcy5wbmdcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gW1xuICB7XG4gICAgbmFtZTogXCJIb21lXCIsXG4gICAgaGFzaDogXCIjaG9tZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBYm91dFwiLFxuICAgIGhhc2g6IFwiI2Fib3V0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlByb2plY3RzXCIsXG4gICAgaGFzaDogXCIjcHJvamVjdHNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU2tpbGxzXCIsXG4gICAgaGFzaDogXCIjc2tpbGxzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkV4cGVyaWVuY2VcIixcbiAgICBoYXNoOiBcIiNleHBlcmllbmNlXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNvbnRhY3RcIixcbiAgICBoYXNoOiBcIiNjb250YWN0XCIsXG4gIH0sXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jZXNEYXRhID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRnVsbCBTdGFjayBEZXZlbG9wZXIgSW50ZXJuc2hpcFwiLFxuICAgIGxvY2F0aW9uOiBcIk1pYW1pLCBGTFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJIGdyYWR1YXRlZCBhZnRlciA2IG1vbnRocyBvZiBzdHVkeWluZy4gSSBpbW1lZGlhdGVseSBmb3VuZCBhIGpvYiBhcyBhIGZyb250LWVuZCBkZXZlbG9wZXIuXCIsXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChMdUdyYWR1YXRpb25DYXApLFxuICAgIGRhdGU6IFwiMjAxOVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRnJvbnQtRW5kIERldmVsb3BlclwiLFxuICAgIGxvY2F0aW9uOiBcIk9ybGFuZG8sIEZMXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkkgd29ya2VkIGFzIGEgZnJvbnQtZW5kIGRldmVsb3BlciBmb3IgMiB5ZWFycyBpbiAxIGpvYiBhbmQgMSB5ZWFyIGluIGFub3RoZXIgam9iLiBJIGFsc28gdXBza2lsbGVkIHRvIHRoZSBmdWxsIHN0YWNrLlwiLFxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2dXb3JrQWx0KSxcbiAgICBkYXRlOiBcIjIwMTkgLSAyMDIxXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJGdWxsLVN0YWNrIERldmVsb3BlclwiLFxuICAgIGxvY2F0aW9uOiBcIkhvdXN0b24sIFRYXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkknbSBub3cgYSBmdWxsLXN0YWNrIGRldmVsb3BlciB3b3JraW5nIGFzIGEgZnJlZWxhbmNlci4gTXkgc3RhY2sgaW5jbHVkZXMgUmVhY3QsIE5leHQuanMsIFR5cGVTY3JpcHQsIFRhaWx3aW5kLCBQcmlzbWEgYW5kIE1vbmdvREIuIEknbSBvcGVuIHRvIGZ1bGwtdGltZSBvcHBvcnR1bml0aWVzLlwiLFxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmFSZWFjdCksXG4gICAgZGF0ZTogXCIyMDIxIC0gcHJlc2VudFwiLFxuICB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzRGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkNVTC5JTlwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJIGRldmVsb3BlZCBhIGNvbXByZWhlbnNpdmUgY2xvdWQga2l0Y2hlbiBtYW5hZ2VtZW50IGFwcGxpY2F0aW9uLCBlbmNvbXBhc3NpbmcgYm90aCBhIFBvaW50IG9mIFNhbGUgKFBPUykgc3lzdGVtIGFuZCB3ZWIgcGFuZWxzIGZvciBraXRjaGVuIGFuZCBvcmRlciBtYW5hZ2VtZW50LiBcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIk5vZGUuanNcIiwgXCJFeHByZXNzLmpzXCIsIFwiTW9uZ29EQlwiLCBcIlJlYWN0LUJvb3RzdHJhcFwiXSxcbiAgICBpbWFnZVVybDogY29ycGNvbW1lbnRJbWcsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJPdWZlclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJPdWZlciBpcyBhIG1hcmtldHBsYWNlIGFwcGxpY2F0aW9uIHRoYXQgb2ZmZXJzIGNvbnN1bWVycyBhbmQgbWVyY2hhbnRzIGEgc3RyZWFtbGluZWQgc29sdXRpb24gdG8gc2F2ZSB0aW1lIGFuZCByZXNvdXJjZXMgd2hpbGUgc2hvcHBpbmcuXCIsXG4gICAgdGFnczogW1wiQW5ndWxhclwiLCBcIk5vZGVKU1wiLCBcIkV4cHJlc3NcIl0sXG4gICAgaW1hZ2VVcmw6IHJtdGRldkltZyxcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBza2lsbHNEYXRhID0gW1xuICBcIlJlYWN0XCIsXG4gIFwiTmV4dC5qc1wiLFxuICBcIk5vZGUuanNcIixcbiAgXCJKYXZhU2NyaXB0XCIsXG4gIFwiVHlwZVNjcmlwdFwiLFxuICBcIkhUTUxcIixcbiAgXCJDU1NcIixcbiAgXCJGbHV0dGVyXCIsXG4gIFwiR2l0XCIsXG4gIFwiVGFpbHdpbmRcIixcbiAgXCJNb25nb0RCXCIsXG4gIFwiRXhwcmVzc1wiLFxuICBcIlB5dGhvblwiLFxuICBcIkphdmFcIixcbiAgXCJGcmFtZXIgTW90aW9uXCIsXG5dIGFzIGNvbnN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2dXb3JrQWx0IiwiRmFSZWFjdCIsIkx1R3JhZHVhdGlvbkNhcCIsImNvcnBjb21tZW50SW1nIiwicm10ZGV2SW1nIiwibGlua3MiLCJuYW1lIiwiaGFzaCIsImV4cGVyaWVuY2VzRGF0YSIsInRpdGxlIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsImljb24iLCJjcmVhdGVFbGVtZW50IiwiZGF0ZSIsInByb2plY3RzRGF0YSIsInRhZ3MiLCJpbWFnZVVybCIsInNraWxsc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./lib/data.ts\n"));

/***/ })

});