/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/*! CommonJS bailout: this is used directly at 9:26-30 */
/*! CommonJS bailout: this is used directly at 14:20-24 */
/*! CommonJS bailout: this is used directly at 21:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nvar productCRUD = __importStar(__webpack_require__(/*! ./product-crud */ \"./src/product-crud.ts\"));\ndotenv.config();\nif (!process.env.PORT) {\n    console.log('Error to get no port');\n    process.exit(1);\n}\nvar PORT = parseInt(process.env.PORT, 10);\nvar app = express_1.default();\napp.use(helmet_1.default());\napp.use(cors_1.default());\napp.use(express_1.default.json());\napp.get('/', function (req, res) {\n    return res.send('Hellow world with express');\n});\napp.get('/products', productCRUD.getProductList);\napp.post('/products', productCRUD.createProduct);\napp.post('/updateproduct', productCRUD.updateroduct);\napp.post('/deleteproduct', productCRUD.deleteproduct);\n\n\n//# sourceURL=webpack://mongowithts/./src/index.ts?");

/***/ }),

/***/ "./src/product-crud.service.ts":
/*!*************************************!*\
  !*** ./src/product-crud.service.ts ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteProducts = exports.updateProducts = exports.createProducts = exports.getAllProducts = void 0;\nvar product_1 = __webpack_require__(/*! ./product */ \"./src/product.ts\");\nexports.getAllProducts = function () { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, product_1.products];\n    });\n}); };\nexports.createProducts = function (product) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        product_1.products.push(product);\n        return [2 /*return*/];\n    });\n}); };\nexports.updateProducts = function (product) { return __awaiter(void 0, void 0, void 0, function () {\n    var index;\n    return __generator(this, function (_a) {\n        index = product_1.products.findIndex(function (d) { return d.id === product['id']; });\n        if (index > 0 || index == 0) {\n            product_1.products[index]['productName'] = product['productName'];\n            product_1.products[index]['productCode'] = product['productCode'];\n            product_1.products[index]['productRating'] = product['productRating'];\n        }\n        return [2 /*return*/];\n    });\n}); };\nexports.deleteProducts = function (id) { return __awaiter(void 0, void 0, void 0, function () {\n    var index;\n    return __generator(this, function (_a) {\n        console.log(\"in delete product index is \" + JSON.stringify(id));\n        index = product_1.products.findIndex(function (d) { return d.id === id; });\n        console.log(\"in delete product index is \" + index);\n        if (index > 0 || index == 0)\n            product_1.products.splice(index, 1);\n        return [2 /*return*/];\n    });\n}); };\n\n\n//# sourceURL=webpack://mongowithts/./src/product-crud.service.ts?");

/***/ }),

/***/ "./src/product-crud.ts":
/*!*****************************!*\
  !*** ./src/product-crud.ts ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/*! CommonJS bailout: this is used directly at 9:26-30 */
/*! CommonJS bailout: this is used directly at 14:20-24 */
/*! CommonJS bailout: this is used directly at 21:17-21 */
/*! CommonJS bailout: this is used directly at 30:19-23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteproduct = exports.updateroduct = exports.createProduct = exports.getProductList = void 0;\nvar ProductService = __importStar(__webpack_require__(/*! ./product-crud.service */ \"./src/product-crud.service.ts\"));\nexports.getProductList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var productList;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, ProductService.getAllProducts()];\n            case 1:\n                productList = _a.sent();\n                console.log(\"in get \" + JSON.stringify(productList));\n                try {\n                    res.status(200).send(productList);\n                }\n                catch (e) {\n                    res.status(404).send(e.message);\n                }\n                return [2 /*return*/];\n        }\n    });\n}); };\nexports.createProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var product;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                product = req.body;\n                return [4 /*yield*/, ProductService.createProducts(product)];\n            case 1:\n                _a.sent();\n                try {\n                    res.status(200).send({\n                        message: \"Successfully added\",\n                        IsSuccess: true,\n                        result: \"\"\n                    });\n                }\n                catch (e) {\n                    res.status(404).send(e.message);\n                }\n                return [2 /*return*/];\n        }\n    });\n}); };\nexports.updateroduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var product;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                product = req.body;\n                return [4 /*yield*/, ProductService.updateProducts(product)];\n            case 1:\n                _a.sent();\n                try {\n                    res.status(200).send({\n                        message: \"Successfully updated\",\n                        IsSuccess: true,\n                        result: \"\"\n                    });\n                }\n                catch (e) {\n                    res.status(404).send(e.message);\n                }\n                return [2 /*return*/];\n        }\n    });\n}); };\nexports.deleteproduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var productID;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                productID = req.body['id'];\n                return [4 /*yield*/, ProductService.deleteProducts(productID)];\n            case 1:\n                _a.sent();\n                try {\n                    res.status(200).send({\n                        message: \"Successfully deleted\",\n                        IsSuccess: true,\n                        result: \"\"\n                    });\n                }\n                catch (e) {\n                    res.status(404).send(e.message);\n                }\n                return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack://mongowithts/./src/product-crud.ts?");

/***/ }),

/***/ "./src/product.ts":
/*!************************!*\
  !*** ./src/product.ts ***!
  \************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export products [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.products = void 0;\nexports.products = [\n    {\n        id: 1,\n        productName: 'Netgear Cable Modem',\n        productCode: 'CM700',\n        productDescription: 'Netgear Cable Modem compatible with all cables',\n        productRating: 4.0\n    },\n    {\n        id: 2,\n        productName: 'Linksys Cable Modem',\n        productCode: 'LK700',\n        productDescription: 'Linksys Cable Modem compatible with all cables',\n        productRating: 4.1\n    },\n    {\n        id: 3,\n        productName: 'TP Link Cable Modem',\n        productCode: 'TPL700',\n        productDescription: 'TP Link Cable Modem compatible with all cables',\n        productRating: 4.2\n    },\n    {\n        id: 4,\n        productName: 'Netgear Cable Modem',\n        productCode: 'CM700',\n        productDescription: 'Netgear Cable Modem compatible with all cables',\n        productRating: 4.0\n    },\n    {\n        id: 5,\n        productName: 'Linksys Cable Modem',\n        productCode: 'LK700',\n        productDescription: 'Linksys Cable Modem compatible with all cables',\n        productRating: 4.1\n    },\n    {\n        id: 6,\n        productName: 'TP Link Cable Modem',\n        productCode: 'TPL700',\n        productDescription: 'TP Link Cable Modem compatible with all cables',\n        productRating: 4.2\n    }, {\n        id: 7,\n        productName: 'Netgear Cable Modem',\n        productCode: 'CM700',\n        productDescription: 'Netgear Cable Modem compatible with all cables',\n        productRating: 4.0\n    },\n    {\n        id: 8,\n        productName: 'Linksys Cable Modem',\n        productCode: 'LK700',\n        productDescription: 'Linksys Cable Modem compatible with all cables',\n        productRating: 4.1\n    },\n    {\n        id: 9,\n        productName: 'TP Link Cable Modem',\n        productCode: 'TPL700',\n        productDescription: 'TP Link Cable Modem compatible with all cables',\n        productRating: 4.2\n    },\n];\n\n\n//# sourceURL=webpack://mongowithts/./src/product.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"cors\");;\n\n//# sourceURL=webpack://mongowithts/external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"dotenv\");;\n\n//# sourceURL=webpack://mongowithts/external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://mongowithts/external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"helmet\");;\n\n//# sourceURL=webpack://mongowithts/external_%22helmet%22?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "95e9971bb5edd5c88e3d"
/******/ 	})();
/******/ 	
/******/ }
;