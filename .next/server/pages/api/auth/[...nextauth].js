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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/discord":
/*!**********************************************!*\
  !*** external "next-auth/providers/discord" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/discord");

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/discord */ \"next-auth/providers/discord\");\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _env_server_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../env/server.mjs */ \"(api)/./src/env/server.mjs\");\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../server/db/client */ \"(api)/./src/server/db/client.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_server_mjs__WEBPACK_IMPORTED_MODULE_3__, _server_db_client__WEBPACK_IMPORTED_MODULE_4__]);\n([_env_server_mjs__WEBPACK_IMPORTED_MODULE_3__, _server_db_client__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// Prisma adapter for NextAuth, optional and can be removed\n\n\n\nconst authOptions = {\n    // Include user.id on session\n    callbacks: {\n        session ({ session , user  }) {\n            if (session.user) {\n                session.user.id = user.id;\n            }\n            return session;\n        }\n    },\n    // Configure one or more authentication providers\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_server_db_client__WEBPACK_IMPORTED_MODULE_4__.prisma),\n    providers: [\n        next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: _env_server_mjs__WEBPACK_IMPORTED_MODULE_3__.env.DISCORD_CLIENT_ID,\n            clientSecret: _env_server_mjs__WEBPACK_IMPORTED_MODULE_3__.env.DISCORD_CLIENT_SECRET\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ0Q7QUFDMUQsMkRBQTJEO0FBQ0Q7QUFFWjtBQUNLO0FBRTVDLE1BQU1LLGNBQStCO0lBQzFDLDZCQUE2QjtJQUM3QkMsV0FBVztRQUNUQyxTQUFRLEVBQUVBLFFBQU8sRUFBRUMsS0FBSSxFQUFFLEVBQUU7WUFDekIsSUFBSUQsUUFBUUMsSUFBSSxFQUFFO2dCQUNoQkQsUUFBUUMsSUFBSSxDQUFDQyxFQUFFLEdBQUdELEtBQUtDLEVBQUU7WUFDM0IsQ0FBQztZQUNELE9BQU9GO1FBQ1Q7SUFDRjtJQUNBLGlEQUFpRDtJQUNqREcsU0FBU1Isd0VBQWFBLENBQUNFLHFEQUFNQTtJQUM3Qk8sV0FBVztRQUNUVixrRUFBZUEsQ0FBQztZQUNkVyxVQUFVVCxrRUFBcUI7WUFDL0JXLGNBQWNYLHNFQUF5QjtRQUN6QztLQUVEO0FBQ0gsRUFBRTtBQUVGLGlFQUFlSCxnREFBUUEsQ0FBQ0ssWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXQzLWFwcC8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IHR5cGUgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IERpc2NvcmRQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9kaXNjb3JkXCI7XG4vLyBQcmlzbWEgYWRhcHRlciBmb3IgTmV4dEF1dGgsIG9wdGlvbmFsIGFuZCBjYW4gYmUgcmVtb3ZlZFxuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5cbmltcG9ydCB7IGVudiB9IGZyb20gXCIuLi8uLi8uLi9lbnYvc2VydmVyLm1qc1wiO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9kYi9jbGllbnRcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIC8vIEluY2x1ZGUgdXNlci5pZCBvbiBzZXNzaW9uXG4gIGNhbGxiYWNrczoge1xuICAgIHNlc3Npb24oeyBzZXNzaW9uLCB1c2VyIH0pIHtcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdXNlci5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBwcm92aWRlcnM6IFtcbiAgICBEaXNjb3JkUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IGVudi5ESVNDT1JEX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogZW52LkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiRGlzY29yZFByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsImVudiIsInByaXNtYSIsImF1dGhPcHRpb25zIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInVzZXIiLCJpZCIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkRJU0NPUkRfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiRElTQ09SRF9DTElFTlRfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/server/db/client.ts":
/*!*********************************!*\
  !*** ./src/server/db/client.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env_server_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../env/server.mjs */ \"(api)/./src/env/server.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_server_mjs__WEBPACK_IMPORTED_MODULE_1__]);\n_env_server_mjs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: _env_server_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV === \"development\" ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : [\n        \"error\"\n    ]\n});\nif (_env_server_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV !== \"production\") {\n    global.prisma = prisma;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2RiL2NsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBRUg7QUFPcEMsTUFBTUUsU0FDWEMsT0FBT0QsTUFBTSxJQUNiLElBQUlGLHdEQUFZQSxDQUFDO0lBQ2ZJLEtBQ0VILHlEQUFZLEtBQUssZ0JBQWdCO1FBQUM7UUFBUztRQUFTO0tBQU8sR0FBRztRQUFDO0tBQVE7QUFDM0UsR0FBRztBQUVMLElBQUlBLHlEQUFZLEtBQUssY0FBYztJQUNqQ0UsT0FBT0QsTUFBTSxHQUFHQTtBQUNsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdDMtYXBwLy4vc3JjL3NlcnZlci9kYi9jbGllbnQudHM/MjcyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuaW1wb3J0IHsgZW52IH0gZnJvbSBcIi4uLy4uL2Vudi9zZXJ2ZXIubWpzXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhclxuICB2YXIgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPVxuICBnbG9iYWwucHJpc21hIHx8XG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuICAgIGxvZzpcbiAgICAgIGVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiID8gW1wicXVlcnlcIiwgXCJlcnJvclwiLCBcIndhcm5cIl0gOiBbXCJlcnJvclwiXSxcbiAgfSk7XG5cbmlmIChlbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XG59XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZW52IiwicHJpc21hIiwiZ2xvYmFsIiwibG9nIiwiTk9ERV9FTlYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/server/db/client.ts\n");

/***/ }),

/***/ "(api)/./src/env/client.mjs":
/*!****************************!*\
  !*** ./src/env/client.mjs ***!
  \****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"env\": () => (/* binding */ env),\n/* harmony export */   \"formatErrors\": () => (/* binding */ formatErrors)\n/* harmony export */ });\n/* harmony import */ var _schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema.mjs */ \"(api)/./src/env/schema.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__]);\n_schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-check\n\nconst _clientEnv = _schema_mjs__WEBPACK_IMPORTED_MODULE_0__.clientSchema.safeParse(_schema_mjs__WEBPACK_IMPORTED_MODULE_0__.clientEnv);\nconst formatErrors = (/** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */ errors)=>Object.entries(errors).map(([name, value])=>{\n        if (value && \"_errors\" in value) return `${name}: ${value._errors.join(\", \")}\\n`;\n    }).filter(Boolean);\nif (!_clientEnv.success) {\n    console.error(\"❌ Invalid environment variables:\\n\", ...formatErrors(_clientEnv.error.format()));\n    throw new Error(\"Invalid environment variables\");\n}\nfor (let key of Object.keys(_clientEnv.data)){\n    if (!key.startsWith(\"NEXT_PUBLIC_\")) {\n        console.warn(`❌ Invalid public environment variable name: ${key}. It must begin with 'NEXT_PUBLIC_'`);\n        throw new Error(\"Invalid public environment variable name\");\n    }\n}\nconst env = _clientEnv.data;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52L2NsaWVudC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsWUFBWTtBQUMyQztBQUV2RCxNQUFNRSxhQUFhRCwrREFBc0IsQ0FBQ0Qsa0RBQVNBO0FBRTVDLE1BQU1JLGVBQWUsQ0FDMUIsdUVBQXVFLEdBQ3ZFQyxTQUVBQyxPQUFPQyxPQUFPLENBQUNGLFFBQ1pHLEdBQUcsQ0FBQyxDQUFDLENBQUNDLE1BQU1DLE1BQU0sR0FBSztRQUN0QixJQUFJQSxTQUFTLGFBQWFBLE9BQ3hCLE9BQU8sQ0FBQyxFQUFFRCxLQUFLLEVBQUUsRUFBRUMsTUFBTUMsT0FBTyxDQUFDQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkQsR0FDQ0MsTUFBTSxDQUFDQyxTQUFTO0FBRXJCLElBQUksQ0FBQ1osV0FBV2EsT0FBTyxFQUFFO0lBQ3ZCQyxRQUFRQyxLQUFLLENBQ1gseUNBQ0diLGFBQWFGLFdBQVdlLEtBQUssQ0FBQ0MsTUFBTTtJQUV6QyxNQUFNLElBQUlDLE1BQU0saUNBQWlDO0FBQ25ELENBQUM7QUFFRCxLQUFLLElBQUlDLE9BQU9kLE9BQU9lLElBQUksQ0FBQ25CLFdBQVdvQixJQUFJLEVBQUc7SUFDNUMsSUFBSSxDQUFDRixJQUFJRyxVQUFVLENBQUMsaUJBQWlCO1FBQ25DUCxRQUFRUSxJQUFJLENBQ1YsQ0FBQyw0Q0FBNEMsRUFBRUosSUFBSSxtQ0FBbUMsQ0FBQztRQUd6RixNQUFNLElBQUlELE1BQU0sNENBQTRDO0lBQzlELENBQUM7QUFDSDtBQUVPLE1BQU1NLE1BQU12QixXQUFXb0IsSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdDMtYXBwLy4vc3JjL2Vudi9jbGllbnQubWpzPzY1YTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWNoZWNrXG5pbXBvcnQgeyBjbGllbnRFbnYsIGNsaWVudFNjaGVtYSB9IGZyb20gXCIuL3NjaGVtYS5tanNcIjtcblxuY29uc3QgX2NsaWVudEVudiA9IGNsaWVudFNjaGVtYS5zYWZlUGFyc2UoY2xpZW50RW52KTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEVycm9ycyA9IChcbiAgLyoqIEB0eXBlIHtpbXBvcnQoJ3pvZCcpLlpvZEZvcm1hdHRlZEVycm9yPE1hcDxzdHJpbmcsc3RyaW5nPixzdHJpbmc+fSAqL1xuICBlcnJvcnMsXG4pID0+XG4gIE9iamVjdC5lbnRyaWVzKGVycm9ycylcbiAgICAubWFwKChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodmFsdWUgJiYgXCJfZXJyb3JzXCIgaW4gdmFsdWUpXG4gICAgICAgIHJldHVybiBgJHtuYW1lfTogJHt2YWx1ZS5fZXJyb3JzLmpvaW4oXCIsIFwiKX1cXG5gO1xuICAgIH0pXG4gICAgLmZpbHRlcihCb29sZWFuKTtcblxuaWYgKCFfY2xpZW50RW52LnN1Y2Nlc3MpIHtcbiAgY29uc29sZS5lcnJvcihcbiAgICBcIuKdjCBJbnZhbGlkIGVudmlyb25tZW50IHZhcmlhYmxlczpcXG5cIixcbiAgICAuLi5mb3JtYXRFcnJvcnMoX2NsaWVudEVudi5lcnJvci5mb3JtYXQoKSksXG4gICk7XG4gIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGVzXCIpO1xufVxuXG5mb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoX2NsaWVudEVudi5kYXRhKSkge1xuICBpZiAoIWtleS5zdGFydHNXaXRoKFwiTkVYVF9QVUJMSUNfXCIpKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYOKdjCBJbnZhbGlkIHB1YmxpYyBlbnZpcm9ubWVudCB2YXJpYWJsZSBuYW1lOiAke2tleX0uIEl0IG11c3QgYmVnaW4gd2l0aCAnTkVYVF9QVUJMSUNfJ2AsXG4gICAgKTtcblxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcHVibGljIGVudmlyb25tZW50IHZhcmlhYmxlIG5hbWVcIik7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVudiA9IF9jbGllbnRFbnYuZGF0YTtcbiJdLCJuYW1lcyI6WyJjbGllbnRFbnYiLCJjbGllbnRTY2hlbWEiLCJfY2xpZW50RW52Iiwic2FmZVBhcnNlIiwiZm9ybWF0RXJyb3JzIiwiZXJyb3JzIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsIm5hbWUiLCJ2YWx1ZSIsIl9lcnJvcnMiLCJqb2luIiwiZmlsdGVyIiwiQm9vbGVhbiIsInN1Y2Nlc3MiLCJjb25zb2xlIiwiZXJyb3IiLCJmb3JtYXQiLCJFcnJvciIsImtleSIsImtleXMiLCJkYXRhIiwic3RhcnRzV2l0aCIsIndhcm4iLCJlbnYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/env/client.mjs\n");

/***/ }),

/***/ "(api)/./src/env/schema.mjs":
/*!****************************!*\
  !*** ./src/env/schema.mjs ***!
  \****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clientEnv\": () => (/* binding */ clientEnv),\n/* harmony export */   \"clientSchema\": () => (/* binding */ clientSchema),\n/* harmony export */   \"serverSchema\": () => (/* binding */ serverSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);\nzod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-check\n\n/**\n * Specify your server-side environment variables schema here.\n * This way you can ensure the app isn't built with invalid env vars.\n */ const serverSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url(),\n    NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_0__.z[\"enum\"]([\n        \"development\",\n        \"test\",\n        \"production\"\n    ]),\n    NEXTAUTH_SECRET:  false ? 0 : zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1).optional(),\n    NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_0__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL\n    // Since NextAuth.js automatically uses the VERCEL_URL if present.\n    (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL\n    process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_0__.z.string() : zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url()),\n    DISCORD_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    DISCORD_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()\n});\n/**\n * Specify your client-side environment variables schema here.\n * This way you can ensure the app isn't built with invalid env vars.\n * To expose them to the client, prefix them with `NEXT_PUBLIC_`.\n */ const clientSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n});\n/**\n * You can't destruct `process.env` as a regular object, so you have to do\n * it manually here. This is because Next.js evaluates this at build time,\n * and only used environment variables are included in the build.\n * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}\n */ const clientEnv = {\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52L3NjaGVtYS5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFlBQVk7QUFDWTtBQUV4Qjs7O0NBR0MsR0FDTSxNQUFNQyxlQUFlRCx5Q0FBUSxDQUFDO0lBQ25DRyxjQUFjSCx5Q0FBUSxHQUFHSyxHQUFHO0lBQzVCQyxVQUFVTiwwQ0FBTSxDQUFDO1FBQUM7UUFBZTtRQUFRO0tBQWE7SUFDdERRLGlCQUNFQyxNQUFxQyxHQUNqQ1QsQ0FBaUIsR0FDakJBLHlDQUFRLEdBQUdVLEdBQUcsQ0FBQyxHQUFHQyxRQUFRLEVBQUU7SUFDbENDLGNBQWNaLDZDQUFZLENBQ3hCLHVFQUF1RTtJQUN2RSxrRUFBa0U7SUFDbEUsQ0FBQ2MsTUFBUUwsUUFBUU0sR0FBRyxDQUFDQyxVQUFVLElBQUlGLEtBQ25DLHNFQUFzRTtJQUN0RUwsUUFBUU0sR0FBRyxDQUFDRSxNQUFNLEdBQUdqQix5Q0FBUSxLQUFLQSx5Q0FBUSxHQUFHSyxHQUFHLEVBQUU7SUFFcERhLG1CQUFtQmxCLHlDQUFRO0lBQzNCbUIsdUJBQXVCbkIseUNBQVE7QUFDakMsR0FBRztBQUVIOzs7O0NBSUMsR0FDTSxNQUFNb0IsZUFBZXBCLHlDQUFRLENBQUM7QUFFckMsR0FBRztBQUVIOzs7OztDQUtDLEdBQ00sTUFBTXFCLFlBQVk7QUFFekIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXQzLWFwcC8uL3NyYy9lbnYvc2NoZW1hLm1qcz80MjIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1jaGVja1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcblxuLyoqXG4gKiBTcGVjaWZ5IHlvdXIgc2VydmVyLXNpZGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIHNjaGVtYSBoZXJlLlxuICogVGhpcyB3YXkgeW91IGNhbiBlbnN1cmUgdGhlIGFwcCBpc24ndCBidWlsdCB3aXRoIGludmFsaWQgZW52IHZhcnMuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXJ2ZXJTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIERBVEFCQVNFX1VSTDogei5zdHJpbmcoKS51cmwoKSxcbiAgTk9ERV9FTlY6IHouZW51bShbXCJkZXZlbG9wbWVudFwiLCBcInRlc3RcIiwgXCJwcm9kdWN0aW9uXCJdKSxcbiAgTkVYVEFVVEhfU0VDUkVUOlxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgICAgPyB6LnN0cmluZygpLm1pbigxKVxuICAgICAgOiB6LnN0cmluZygpLm1pbigxKS5vcHRpb25hbCgpLFxuICBORVhUQVVUSF9VUkw6IHoucHJlcHJvY2VzcyhcbiAgICAvLyBUaGlzIG1ha2VzIFZlcmNlbCBkZXBsb3ltZW50cyBub3QgZmFpbCBpZiB5b3UgZG9uJ3Qgc2V0IE5FWFRBVVRIX1VSTFxuICAgIC8vIFNpbmNlIE5leHRBdXRoLmpzIGF1dG9tYXRpY2FsbHkgdXNlcyB0aGUgVkVSQ0VMX1VSTCBpZiBwcmVzZW50LlxuICAgIChzdHIpID0+IHByb2Nlc3MuZW52LlZFUkNFTF9VUkwgPz8gc3RyLFxuICAgIC8vIFZFUkNFTF9VUkwgZG9lc24ndCBpbmNsdWRlIGBodHRwc2Agc28gaXQgY2FudCBiZSB2YWxpZGF0ZWQgYXMgYSBVUkxcbiAgICBwcm9jZXNzLmVudi5WRVJDRUwgPyB6LnN0cmluZygpIDogei5zdHJpbmcoKS51cmwoKSxcbiAgKSxcbiAgRElTQ09SRF9DTElFTlRfSUQ6IHouc3RyaW5nKCksXG4gIERJU0NPUkRfQ0xJRU5UX1NFQ1JFVDogei5zdHJpbmcoKSxcbn0pO1xuXG4vKipcbiAqIFNwZWNpZnkgeW91ciBjbGllbnQtc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2NoZW1hIGhlcmUuXG4gKiBUaGlzIHdheSB5b3UgY2FuIGVuc3VyZSB0aGUgYXBwIGlzbid0IGJ1aWx0IHdpdGggaW52YWxpZCBlbnYgdmFycy5cbiAqIFRvIGV4cG9zZSB0aGVtIHRvIHRoZSBjbGllbnQsIHByZWZpeCB0aGVtIHdpdGggYE5FWFRfUFVCTElDX2AuXG4gKi9cbmV4cG9ydCBjb25zdCBjbGllbnRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIC8vIE5FWFRfUFVCTElDX0NMSUVOVFZBUjogei5zdHJpbmcoKSxcbn0pO1xuXG4vKipcbiAqIFlvdSBjYW4ndCBkZXN0cnVjdCBgcHJvY2Vzcy5lbnZgIGFzIGEgcmVndWxhciBvYmplY3QsIHNvIHlvdSBoYXZlIHRvIGRvXG4gKiBpdCBtYW51YWxseSBoZXJlLiBUaGlzIGlzIGJlY2F1c2UgTmV4dC5qcyBldmFsdWF0ZXMgdGhpcyBhdCBidWlsZCB0aW1lLFxuICogYW5kIG9ubHkgdXNlZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYXJlIGluY2x1ZGVkIGluIHRoZSBidWlsZC5cbiAqIEB0eXBlIHt7IFtrIGluIGtleW9mIHouaW5mZXI8dHlwZW9mIGNsaWVudFNjaGVtYT5dOiB6LmluZmVyPHR5cGVvZiBjbGllbnRTY2hlbWE+W2tdIHwgdW5kZWZpbmVkIH19XG4gKi9cbmV4cG9ydCBjb25zdCBjbGllbnRFbnYgPSB7XG4gIC8vIE5FWFRfUFVCTElDX0NMSUVOVFZBUjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UVkFSLFxufTtcbiJdLCJuYW1lcyI6WyJ6Iiwic2VydmVyU2NoZW1hIiwib2JqZWN0IiwiREFUQUJBU0VfVVJMIiwic3RyaW5nIiwidXJsIiwiTk9ERV9FTlYiLCJlbnVtIiwiTkVYVEFVVEhfU0VDUkVUIiwicHJvY2VzcyIsIm1pbiIsIm9wdGlvbmFsIiwiTkVYVEFVVEhfVVJMIiwicHJlcHJvY2VzcyIsInN0ciIsImVudiIsIlZFUkNFTF9VUkwiLCJWRVJDRUwiLCJESVNDT1JEX0NMSUVOVF9JRCIsIkRJU0NPUkRfQ0xJRU5UX1NFQ1JFVCIsImNsaWVudFNjaGVtYSIsImNsaWVudEVudiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/env/schema.mjs\n");

/***/ }),

/***/ "(api)/./src/env/server.mjs":
/*!****************************!*\
  !*** ./src/env/server.mjs ***!
  \****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"env\": () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var _schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema.mjs */ \"(api)/./src/env/schema.mjs\");\n/* harmony import */ var _client_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.mjs */ \"(api)/./src/env/client.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__, _client_mjs__WEBPACK_IMPORTED_MODULE_1__]);\n([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__, _client_mjs__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// @ts-check\n/**\n * This file is included in `/next.config.mjs` which ensures the app isn't built with invalid env vars.\n * It has to be a `.mjs`-file to be imported there.\n */ \n\nconst _serverEnv = _schema_mjs__WEBPACK_IMPORTED_MODULE_0__.serverSchema.safeParse(process.env);\nif (!_serverEnv.success) {\n    console.error(\"❌ Invalid environment variables:\\n\", ...(0,_client_mjs__WEBPACK_IMPORTED_MODULE_1__.formatErrors)(_serverEnv.error.format()));\n    throw new Error(\"Invalid environment variables\");\n}\nfor (let key of Object.keys(_serverEnv.data)){\n    if (key.startsWith(\"NEXT_PUBLIC_\")) {\n        console.warn(\"❌ You are exposing a server-side env-variable:\", key);\n        throw new Error(\"You are exposing a server-side env-variable\");\n    }\n}\nconst env = {\n    ..._serverEnv.data,\n    ..._client_mjs__WEBPACK_IMPORTED_MODULE_1__.env\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52L3NlcnZlci5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsWUFBWTtBQUNaOzs7Q0FHQyxHQUMyQztBQUNrQjtBQUU5RCxNQUFNSSxhQUFhSiwrREFBc0IsQ0FBQ00sUUFBUUwsR0FBRztBQUVyRCxJQUFJLENBQUNHLFdBQVdHLE9BQU8sRUFBRTtJQUN2QkMsUUFBUUMsS0FBSyxDQUNYLHlDQUNHTix5REFBWUEsQ0FBQ0MsV0FBV0ssS0FBSyxDQUFDQyxNQUFNO0lBRXpDLE1BQU0sSUFBSUMsTUFBTSxpQ0FBaUM7QUFDbkQsQ0FBQztBQUVELEtBQUssSUFBSUMsT0FBT0MsT0FBT0MsSUFBSSxDQUFDVixXQUFXVyxJQUFJLEVBQUc7SUFDNUMsSUFBSUgsSUFBSUksVUFBVSxDQUFDLGlCQUFpQjtRQUNsQ1IsUUFBUVMsSUFBSSxDQUFDLGtEQUFrREw7UUFFL0QsTUFBTSxJQUFJRCxNQUFNLCtDQUErQztJQUNqRSxDQUFDO0FBQ0g7QUFFTyxNQUFNVixNQUFNO0lBQUUsR0FBR0csV0FBV1csSUFBSTtJQUFFLEdBQUdiLDRDQUFTO0FBQUMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXQzLWFwcC8uL3NyYy9lbnYvc2VydmVyLm1qcz9iMDI5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1jaGVja1xuLyoqXG4gKiBUaGlzIGZpbGUgaXMgaW5jbHVkZWQgaW4gYC9uZXh0LmNvbmZpZy5tanNgIHdoaWNoIGVuc3VyZXMgdGhlIGFwcCBpc24ndCBidWlsdCB3aXRoIGludmFsaWQgZW52IHZhcnMuXG4gKiBJdCBoYXMgdG8gYmUgYSBgLm1qc2AtZmlsZSB0byBiZSBpbXBvcnRlZCB0aGVyZS5cbiAqL1xuaW1wb3J0IHsgc2VydmVyU2NoZW1hIH0gZnJvbSBcIi4vc2NoZW1hLm1qc1wiO1xuaW1wb3J0IHsgZW52IGFzIGNsaWVudEVudiwgZm9ybWF0RXJyb3JzIH0gZnJvbSBcIi4vY2xpZW50Lm1qc1wiO1xuXG5jb25zdCBfc2VydmVyRW52ID0gc2VydmVyU2NoZW1hLnNhZmVQYXJzZShwcm9jZXNzLmVudik7XG5cbmlmICghX3NlcnZlckVudi5zdWNjZXNzKSB7XG4gIGNvbnNvbGUuZXJyb3IoXG4gICAgXCLinYwgSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZXM6XFxuXCIsXG4gICAgLi4uZm9ybWF0RXJyb3JzKF9zZXJ2ZXJFbnYuZXJyb3IuZm9ybWF0KCkpLFxuICApO1xuICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGVudmlyb25tZW50IHZhcmlhYmxlc1wiKTtcbn1cblxuZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKF9zZXJ2ZXJFbnYuZGF0YSkpIHtcbiAgaWYgKGtleS5zdGFydHNXaXRoKFwiTkVYVF9QVUJMSUNfXCIpKSB7XG4gICAgY29uc29sZS53YXJuKFwi4p2MIFlvdSBhcmUgZXhwb3NpbmcgYSBzZXJ2ZXItc2lkZSBlbnYtdmFyaWFibGU6XCIsIGtleSk7XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgYXJlIGV4cG9zaW5nIGEgc2VydmVyLXNpZGUgZW52LXZhcmlhYmxlXCIpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlbnYgPSB7IC4uLl9zZXJ2ZXJFbnYuZGF0YSwgLi4uY2xpZW50RW52IH07XG4iXSwibmFtZXMiOlsic2VydmVyU2NoZW1hIiwiZW52IiwiY2xpZW50RW52IiwiZm9ybWF0RXJyb3JzIiwiX3NlcnZlckVudiIsInNhZmVQYXJzZSIsInByb2Nlc3MiLCJzdWNjZXNzIiwiY29uc29sZSIsImVycm9yIiwiZm9ybWF0IiwiRXJyb3IiLCJrZXkiLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsInN0YXJ0c1dpdGgiLCJ3YXJuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/env/server.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();