/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/src/DefaultSettings.js":
/*!*************************************!*\
  !*** ./dist/src/DefaultSettings.js ***!
  \*************************************/
/*! exports provided: DefaultSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DefaultSettings\", function() { return DefaultSettings; });\nvar DefaultSettings = {\r\n    SIZE_WIDTH: 800,\r\n    SIZE_HEIGHT: 1000,\r\n    SMALL_W: 40,\r\n    SMALL_H: 40\r\n};\r\n// export default DefaultSettings;\r\n\n\n//# sourceURL=webpack:///./dist/src/DefaultSettings.js?");

/***/ }),

/***/ "./dist/src/ImageLocal.js":
/*!********************************!*\
  !*** ./dist/src/ImageLocal.js ***!
  \********************************/
/*! exports provided: ImageLocal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageLocal\", function() { return ImageLocal; });\n/* harmony import */ var _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultSettings.js */ \"./dist/src/DefaultSettings.js\");\n\r\nvar ImageLocal = /** @class */ (function () {\r\n    // protected document: HTMLDocument;\r\n    function ImageLocal(p, ready) {\r\n        this.x1 = null;\r\n        this.x2 = null;\r\n        this.x3 = null;\r\n        this.x4 = null;\r\n        this.img = new Image();\r\n        this.screen = p;\r\n        // this.document = d;\r\n        this.readyToDraw = ready;\r\n        this.isScaled = false;\r\n        this.drawSmallImg = this.drawSmallImg.bind(this);\r\n        this.handleFileSelect = this.handleFileSelect.bind(this);\r\n        this.onload = this.onload.bind(this);\r\n        this.drawArea = this.drawArea.bind(this);\r\n    }\r\n    ImageLocal.prototype.handleFileSelect = function (evt) {\r\n        var files;\r\n        if (evt.type === \"drop\") {\r\n            evt.stopPropagation();\r\n            evt.preventDefault();\r\n            files = evt.dataTransfer.files;\r\n        }\r\n        if (evt.type === \"change\")\r\n            files = evt.target.files; // FileList object\r\n        // files is a FileList of File objects. List some properties.\r\n        var output = [];\r\n        //console.log(evt)\r\n        var f = files[0];\r\n        output.push('<li><strong>', f.name, '</strong> (', f.type || 'n/a', ') - ', f.size, ' bytes, last modified: ', f.lastModifiedDate.toLocaleDateString(), '</li>');\r\n        this.img.src = f.name;\r\n        this.readyToDraw = true;\r\n        document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';\r\n        this.onload();\r\n    };\r\n    ImageLocal.prototype.drawSmallImg = function (evt) {\r\n        var xPos = evt.offsetX - 2;\r\n        var yPos = evt.offsetY - 2;\r\n        //console.log(xPos, yPos);\r\n        var pixel = this.screen.getImageData(xPos, yPos, 1, 1);\r\n        if (this.readyToDraw) {\r\n            if (this.isScaled) {\r\n                xPos *= (this.img.width / _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SIZE_WIDTH);\r\n                yPos *= (this.img.height / _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SIZE_HEIGHT);\r\n            }\r\n            this.screen.clearRect(0, 0, _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SIZE_WIDTH, _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SIZE_HEIGHT);\r\n            this.screen.strokeStyle = \"cornflowerblue\";\r\n            this.screen.imageSmoothingEnabled = false;\r\n            this.isScaled ?\r\n                this.screen.drawImage(this.img, 0, 0, _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SIZE_WIDTH, _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SIZE_HEIGHT)\r\n                : this.screen.drawImage(this.img, 0, 0, this.img.width, this.img.height);\r\n            this.screen.strokeRect(evt.offsetX + 5, evt.offsetY + 5, _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SMALL_W, _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SMALL_H);\r\n            this.screen.drawImage(this.img, Math.floor(xPos - 3), Math.floor(yPos - 3), 5, 5, evt.offsetX + 5, evt.offsetY + 5, _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SMALL_W, _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SMALL_H);\r\n            var color = document.getElementById('color');\r\n            var data = pixel.data;\r\n            var rgba = 'rgba(' + data[0] + ', ' + data[1] +\r\n                ', ' + data[2] + ', ' + (data[3] / 255) + ')';\r\n            color.style.background = rgba;\r\n            //color.textContent = rgba;\r\n            document.getElementById('rgb').innerHTML = '<strong>' + rgba + '</strong> ';\r\n        }\r\n    };\r\n    ImageLocal.prototype.getImage = function () {\r\n        return this.img;\r\n    };\r\n    ImageLocal.prototype.getScreen = function () {\r\n        return this.screen;\r\n    };\r\n    ImageLocal.prototype.setScaled = function (v) {\r\n        this.isScaled = v;\r\n    };\r\n    ImageLocal.prototype.onload = function () {\r\n        this.getScreen().clearRect(0, 0, _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SIZE_WIDTH, _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SIZE_HEIGHT);\r\n        /** SI nuestro canvas es mas pequeño que la imagen se dibuja a su escala normal,\r\n         * si es mas grande se dibuja reescalado al ancho de ventana por default  */\r\n        if (this.getImage().width > _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SIZE_WIDTH\r\n            || this.getImage().height > _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SIZE_HEIGHT) {\r\n            this.getScreen().drawImage(this.getImage(), 0, 0, _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SIZE_WIDTH, _DefaultSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"DefaultSettings\"].SIZE_HEIGHT);\r\n            this.setScaled(true);\r\n        }\r\n        else {\r\n            this.getScreen().drawImage(this.getImage(), 0, 0, this.getImage().width, this.getImage().height);\r\n            this.setScaled(false);\r\n        }\r\n    };\r\n    ImageLocal.prototype.drawArea = function (evt) {\r\n        var canvas;\r\n        var aux;\r\n        canvas = this.screen;\r\n        console.log('Funcion draw area');\r\n        if (this.x1 == null) {\r\n            this.x1 = evt.offsetX;\r\n            this.y1 = evt.offsetY;\r\n            console.log(this.x1, this.y1);\r\n            this.screen.strokeStyle = 'blue';\r\n            this.screen.lineWidth = 1;\r\n            this.screen.beginPath();\r\n            this.screen.moveTo(this.x1, this.y1);\r\n        }\r\n        else {\r\n            if (this.x2 == null) {\r\n                this.x2 = evt.offsetX;\r\n                this.y2 = evt.offsetY;\r\n                console.log(this.x2, this.y2);\r\n                this.screen.lineTo(this.x2, this.y2);\r\n                this.screen.stroke();\r\n            }\r\n            else {\r\n                if (this.x3 == null) {\r\n                    this.x3 = evt.offsetX;\r\n                    this.y3 = evt.offsetY;\r\n                    console.log(this.x3, this.y3);\r\n                    this.screen.lineTo(this.x3, this.y3);\r\n                    this.screen.stroke();\r\n                }\r\n                else {\r\n                    if (this.x4 == null) {\r\n                        this.x4 = evt.offsetX;\r\n                        this.y4 = evt.offsetY;\r\n                        console.log(this.x4, this.y4);\r\n                        this.bili = [[this.x1 + 2, this.x2 - 2, this.x3 - 2, this.x4 + 2],\r\n                            [this.y1 + 2, this.y2 + 2, this.y3 - 2, this.y4 - 2]];\r\n                        console.log(this.bili);\r\n                        this.screen.lineTo(this.x4, this.y4);\r\n                        this.screen.stroke();\r\n                        this.screen.lineTo(this.x1, this.y1);\r\n                        this.screen.stroke();\r\n                        this.x1 = this.x2 = this.x3 = this.x4 = null;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    };\r\n    return ImageLocal;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./dist/src/ImageLocal.js?");

/***/ }),

/***/ "./dist/src/ImageType.js":
/*!*******************************!*\
  !*** ./dist/src/ImageType.js ***!
  \*******************************/
/*! exports provided: ImageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageType\", function() { return ImageType; });\nvar ImageType = /** @class */ (function () {\r\n    /**  Constructor general\r\n     * @img es un objeto tipo HTMLImageElement del cual se extrae el tamaño de la imagen\r\n     * @sc es el elemento Canvas de donde se ha dibujado la img\r\n    */\r\n    function ImageType(sc, img, w, h, data) {\r\n        if (img) {\r\n            this._width = img.width;\r\n            this._height = img.height;\r\n        }\r\n        else {\r\n            this._width = w;\r\n            this._height = h;\r\n        }\r\n        this.screenCanvas = sc;\r\n        this.imageData = sc.getImageData(0, 0, this._width, this._height);\r\n        this.initArray();\r\n        if (!data)\r\n            this.dataToImageArray2D();\r\n        else\r\n            this.dataTextToImageArray2D();\r\n        /*this.dataToImageArray2D = this.dataToImageArray2D.bind(this);\r\n        this.imageArray2DtoData = this.imageArray2DtoData.bind(this);*/\r\n    }\r\n    /** Metodo que devuelve las coordenas del array unidimensional de datos de la imagen */\r\n    ImageType.prototype.getColorIndicesForCoord = function (x, y) {\r\n        var red = y * (this._width * 4) + x * 4;\r\n        return [red, red + 1, red + 2, red + 3];\r\n    };\r\n    /** Convierte la data de la imagen a un arreglo tridimensional de manera que que queda asi:\r\n     * img[canalDeColor][anchoImg][altoImg]\r\n     */\r\n    ImageType.prototype.dataToImageArray2D = function () {\r\n        var position;\r\n        for (var i = 0; i < this._height; i++) {\r\n            for (var j = 0; j < this._width; j++) {\r\n                position = this.getColorIndicesForCoord(j, i);\r\n                this.arrImage[0][i][j] = this.imageData.data[position[0]];\r\n                this.arrImage[1][i][j] = this.imageData.data[position[1]];\r\n                this.arrImage[2][i][j] = this.imageData.data[position[2]];\r\n            }\r\n        }\r\n        //return this.arrImage;\r\n    };\r\n    ImageType.prototype.dataTextToImageArray2D = function () {\r\n        var position;\r\n        for (var i = 0; i < this._height; i++) {\r\n            for (var j = 0; j < this._width; j++) {\r\n                position = this.getColorIndicesForCoord(j, i);\r\n                this.arrImage[0][i][j] = this.imageData.data[position[3]];\r\n                //this.arrImage[1][i][j] = this.imageData.data[position[1]];\r\n                //this.arrImage[2][i][j] = this.imageData.data[position[2]];\r\n            }\r\n        }\r\n        //return this.arrImage;\r\n    };\r\n    /** Covierte un arreglo 3d de la imagen a un objeto data, si el argumento existe se dibuja\r\n     * @sc elemento Canas donde se desa dibujar la data\r\n     */\r\n    ImageType.prototype.imageArray2DtoData = function (sc, arrImage) {\r\n        var position;\r\n        for (var i = 0; i < this._height; i++) {\r\n            for (var j = 0; j < this._width; j++) {\r\n                position = this.getColorIndicesForCoord(j, i);\r\n                this.imageData.data[position[0]] = arrImage[0][i][j];\r\n                this.imageData.data[position[1]] = arrImage[1][i][j];\r\n                this.imageData.data[position[2]] = arrImage[2][i][j];\r\n            }\r\n        }\r\n        sc.putImageData(this.imageData, 0, 0);\r\n    };\r\n    /**\r\n     * Funcion que reescala los valores dew la imagen a el rango de una imagen de 0 - 255,\r\n     * la imagen puede estar en cualrquier rango de nunmeros reales.\r\n     * @param arrImage arrar of data\r\n     * @param alto image heigh\r\n     * @param ancho image width\r\n     */\r\n    ImageType.prototype.imageArray2DtoDataWithResizing = function (sc, arrImage) {\r\n        //variable donde guardamos la salida\r\n        //var sal: number[][][] = this.initArray(ancho, alto);\r\n        var max, min, factor;\r\n        max = arrImage[0][0][0];\r\n        min = arrImage[0][0][0];\r\n        var position;\r\n        for (var i = 0; i < this._height; i++) {\r\n            for (var j = 0; j < this._width; j++) {\r\n                max = Math.max(max, arrImage[0][i][j]);\r\n                min = Math.min(min, arrImage[0][i][j]);\r\n            }\r\n        }\r\n        factor = 255.0 / (max - min);\r\n        console.log(factor, max, min);\r\n        for (var i = 0; i < this._height; i++) {\r\n            for (var j = 0; j < this._width; j++) {\r\n                position = this.getColorIndicesForCoord(j, i);\r\n                this.imageData.data[position[0]] = Math.floor(factor * (arrImage[0][i][j] - min));\r\n                this.imageData.data[position[1]] = Math.floor(factor * (arrImage[1][i][j] - min));\r\n                this.imageData.data[position[2]] = Math.floor(factor * (arrImage[2][i][j] - min));\r\n            }\r\n        }\r\n        sc.putImageData(this.imageData, 0, 0);\r\n    };\r\n    ImageType.prototype.initArray = function () {\r\n        this.arrImage = new Array(3);\r\n        this.arrImage[0] = new Array(this._height);\r\n        this.arrImage[1] = new Array(this._height);\r\n        this.arrImage[2] = new Array(this._height);\r\n        for (var i = 0; i < this._height; i++) {\r\n            this.arrImage[0][i] = new Array(this._width);\r\n            this.arrImage[1][i] = new Array(this._width);\r\n            this.arrImage[2][i] = new Array(this._width);\r\n        }\r\n    };\r\n    ImageType.prototype.getArrayImg = function () {\r\n        return this.arrImage;\r\n    };\r\n    ImageType.prototype.getWidth = function () {\r\n        return this._width;\r\n    };\r\n    ImageType.prototype.getHeight = function () {\r\n        return this._height;\r\n    };\r\n    return ImageType;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./dist/src/ImageType.js?");

/***/ }),

/***/ "./dist/src/MathImg.js":
/*!*****************************!*\
  !*** ./dist/src/MathImg.js ***!
  \*****************************/
/*! exports provided: MathImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MathImg\", function() { return MathImg; });\n/* harmony import */ var _felipeaamacedo_matrix_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @felipeaamacedo/matrix-ts */ \"./node_modules/@felipeaamacedo/matrix-ts/lib/index.js\");\n/* harmony import */ var _felipeaamacedo_matrix_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_felipeaamacedo_matrix_ts__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nvar MathImg = /** @class */ (function () {\r\n    function MathImg() {\r\n    }\r\n    MathImg.initArray = function (width, height) {\r\n        var arrImage = new Array(3);\r\n        arrImage[0] = new Array(height);\r\n        arrImage[1] = new Array(height);\r\n        arrImage[2] = new Array(height);\r\n        for (var i = 0; i < height; i++) {\r\n            arrImage[0][i] = new Array(width);\r\n            arrImage[1][i] = new Array(width);\r\n            arrImage[2][i] = new Array(width);\r\n        }\r\n        return arrImage;\r\n    };\r\n    MathImg.conX = function (i, j, cs) {\r\n        //let res = cs.data[0][0] * j + cs.data[1][0] * i + cs.data[3][0] * i * j + cs.data[3][0];\r\n        // console.log(i,j);\r\n        // console.log(cs.data[0][0], cs.data[1][0], cs.data[2][0],cs.data[3][0] );\r\n        //console.log(cs.data[0][1]* i );\r\n        return Math.floor(cs.data[0][0] * j + cs.data[1][0] * i + cs.data[2][0] * i * j + cs.data[3][0]);\r\n    };\r\n    /*public static conY(i:number,j : number, cs: Matrix){\r\n    return Math.floor(cs.data[1][0] * j + cs.data[1][1] * i + cs.data[1][2]*i*j + cs.data[1][3]);\r\n  }*/\r\n    //aqui va ir el codigo de la trasnformacion bilineal  \r\n    MathImg.bilineal = function (img, puntos_a) {\r\n        //variable que guarda el arreglo 3d de la imagen de color\r\n        var arrImage = img.getArrayImg();\r\n        //variable donde guardamos la salida\r\n        var sal = this.initArray(img.getWidth(), img.getHeight());\r\n        var x1a = 0, y1a = 0, x2a = img.getWidth() - 1, y2a = 0, x3a = img.getWidth() - 1, y3a = img.getHeight() - 1, x4a = 0, y4a = img.getHeight() - 1;\r\n        var x1r = puntos_a[0][0], y1r = puntos_a[1][0], x2r = puntos_a[0][1], y2r = puntos_a[1][0], x3r = puntos_a[0][2], y3r = puntos_a[1][2], x4r = puntos_a[0][3], y4r = puntos_a[1][3];\r\n        var matA = new _felipeaamacedo_matrix_ts__WEBPACK_IMPORTED_MODULE_0__[\"Matrix\"](4, 4);\r\n        matA.data = [\r\n            [x1a, y1a, x1a * y1a, 1],\r\n            [x2a, y2a, x2a * y2a, 1],\r\n            [x3a, y3a, x3a * y3a, 1],\r\n            [x4a, y4a, x4a * y4a, 1]\r\n        ];\r\n        var vecX = new _felipeaamacedo_matrix_ts__WEBPACK_IMPORTED_MODULE_0__[\"Matrix\"](4, 1);\r\n        vecX.data = [\r\n            [x1r],\r\n            [x2r],\r\n            [x3r],\r\n            [x4r]\r\n        ];\r\n        var vecY = new _felipeaamacedo_matrix_ts__WEBPACK_IMPORTED_MODULE_0__[\"Matrix\"](4, 1);\r\n        vecY.data = [\r\n            [y1r],\r\n            [y2r],\r\n            [y3r],\r\n            [y4r]\r\n        ];\r\n        var C1 = Object(_felipeaamacedo_matrix_ts__WEBPACK_IMPORTED_MODULE_0__[\"multiply\"])(Object(_felipeaamacedo_matrix_ts__WEBPACK_IMPORTED_MODULE_0__[\"inv\"])(matA), vecX);\r\n        var C2 = Object(_felipeaamacedo_matrix_ts__WEBPACK_IMPORTED_MODULE_0__[\"multiply\"])(Object(_felipeaamacedo_matrix_ts__WEBPACK_IMPORTED_MODULE_0__[\"inv\"])(matA), vecY);\r\n        var posi, posj;\r\n        //float coef[][] = matrizDeC(xd0, yd0, xd1, yd1, xd2, yd2, xSI,ySI, xSD, ySD, xII, yII );\r\n        for (var i = 0; i < img.getHeight(); i++) {\r\n            for (var j = 0; j < img.getWidth(); j++) {\r\n                posj = this.conX(i, j, C1);\r\n                posi = this.conX(i, j, C2);\r\n                if ((posj >= 0 && posj <= img.getWidth() - 1) && (posi >= 0 && posi <= img.getHeight() - 1)) {\r\n                    sal[0][i][j] = arrImage[0][posi][posj];\r\n                    sal[1][i][j] = arrImage[1][posi][posj];\r\n                    sal[2][i][j] = arrImage[2][posi][posj];\r\n                }\r\n            }\r\n        }\r\n        //console.log(sal)\r\n        return sal;\r\n    };\r\n    return MathImg;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./dist/src/MathImg.js?");

/***/ }),

/***/ "./dist/src/index.js":
/*!***************************!*\
  !*** ./dist/src/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ImageLocal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageLocal.js */ \"./dist/src/ImageLocal.js\");\n/* harmony import */ var _ImageType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageType.js */ \"./dist/src/ImageType.js\");\n/* harmony import */ var _MathImg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MathImg.js */ \"./dist/src/MathImg.js\");\n\r\n\r\n\r\nvar lienzo1;\r\nvar lienzo2;\r\nvar pantalla1;\r\nvar pantalla2;\r\nvar contador = 0;\r\n/* Este evento controla la forma de abrir un archivo mediante el evento de arrastrar y soltar */\r\nfunction handleDragOver(evt) {\r\n    evt.stopPropagation();\r\n    evt.preventDefault(); //que no se abra en otra ventana sola la imagen\r\n    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.\r\n}\r\n/** Variables que controla el canvas de la imagen, el primero\r\n * posteriormemte se volveran arreglos cuando ya controlemos las seis ventanas de nuestro frame\r\n*/\r\nlienzo1 = document.getElementById('img1');\r\npantalla1 = lienzo1.getContext(\"2d\");\r\nlienzo2 = document.getElementById('img2');\r\npantalla2 = lienzo2.getContext(\"2d\");\r\nvar dropZone = lienzo1; //document.getElementById('img1');\r\nvar imgLocal = new _ImageLocal_js__WEBPACK_IMPORTED_MODULE_0__[\"ImageLocal\"](pantalla1);\r\nimgLocal.getImage().onload = imgLocal.onload;\r\n//lienzo1.addEventListener('mousemove', handleMouse);\r\nlienzo1.addEventListener(\"mousemove\", imgLocal.drawSmallImg);\r\ndocument.getElementById('files').addEventListener('change', imgLocal.handleFileSelect, false);\r\ndropZone.addEventListener('dragover', handleDragOver, false);\r\ndropZone.addEventListener('drop', imgLocal.handleFileSelect, false);\r\nfunction bilinealImg(evt) {\r\n    alert('Da click en las 4 esquinas del área a transformar formando un trapecio en el siguiente orden: esquina superior izquierda, esquina superior derecha, esquina inferior derecha, esquina inferior izquierda');\r\n    lienzo1.addEventListener('click', imgLocal.drawArea);\r\n    lienzo1.addEventListener('click', clickearCanvas);\r\n    lienzo1.removeEventListener(\"mousemove\", imgLocal.drawSmallImg);\r\n}\r\nfunction clickearCanvas(evt) {\r\n    contador += 1;\r\n    if (contador == 4) {\r\n        var imagenSal = new _ImageType_js__WEBPACK_IMPORTED_MODULE_1__[\"ImageType\"](pantalla1, imgLocal.getImage());\r\n        console.log(imgLocal.bili);\r\n        imagenSal.imageArray2DtoData(pantalla2, _MathImg_js__WEBPACK_IMPORTED_MODULE_2__[\"MathImg\"].bilineal(imagenSal, imgLocal.bili));\r\n        contador = 0;\r\n        lienzo1.removeEventListener('click', imgLocal.drawArea);\r\n        lienzo1.removeEventListener('click', clickearCanvas);\r\n        lienzo1.addEventListener(\"mousemove\", imgLocal.drawSmallImg);\r\n    }\r\n}\r\n//geometrica\r\ndocument.getElementById(\"op-bilineal\").addEventListener('click', bilinealImg, false);\r\n\n\n//# sourceURL=webpack:///./dist/src/index.js?");

/***/ }),

/***/ "./node_modules/@felipeaamacedo/matrix-ts/lib/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@felipeaamacedo/matrix-ts/lib/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./matrix-ts */ \"./node_modules/@felipeaamacedo/matrix-ts/lib/matrix-ts.js\"), exports);\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@felipeaamacedo/matrix-ts/lib/index.js?");

/***/ }),

/***/ "./node_modules/@felipeaamacedo/matrix-ts/lib/matrix-ts.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@felipeaamacedo/matrix-ts/lib/matrix-ts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.multiplyRowByConstant = exports.swapRow = exports.augmentedMatrix = exports.copyMatrix = exports.inv = exports.GaussEli = exports.MatIdentity = exports.ArraySubtr = exports.MatSubtr = exports.MatSum = exports.multiply = exports.Matrix = void 0;\nclass Matrix {\n    constructor(_row, _col) {\n        this._row = _row;\n        this._col = _col;\n        this._data = new Array();\n        //CREATING THE MATRIX\n        for (let i = 0; i < this._row; i++) {\n            this._data.push(Array(this._col));\n        }\n    }\n    get row() {\n        return this._row;\n    }\n    get col() {\n        return this._col;\n    }\n    get data() {\n        return this._data;\n    }\n    set data(A) {\n        for (let j = 0; j < this.row; j++) {\n            if ((A.length !== this.row) && (A[j].length !== this.col)) {\n                throw new Error('Number of rows or colums are different from the specified in the matrix, please check it');\n            }\n            else {\n                this._data = A;\n            }\n        }\n    }\n    /**\n    * Gives the size of a matrix in form of number[]\n    */\n    size() {\n        return [this.row, this.col];\n    }\n    /**\n    * Calculates the determinant of the matrix.\n    */\n    determinant() {\n        if (this.row !== this._col) {\n            throw new Error('The matrix is not a square');\n        }\n        else {\n            if (this.row == 2) {\n                return this.data[0][0] * this.data[1][1] - this.data[0][1] * this.data[1][0];\n            }\n            else {\n                let iCof = 1;\n                let sum = 0;\n                for (let j = 0; j < this._col; j++) {\n                    sum = sum + this.data[iCof - 1][j] * Math.pow((-1), (iCof + j + 1)) * this.sub_matrix(iCof, j + 1).determinant();\n                }\n                return sum;\n            }\n        }\n    }\n    /**\n    * Calculates the sub_matrix used in the determinant calculation\n    */\n    sub_matrix(del_row, del_col) {\n        del_col = del_col - 1;\n        del_row = del_row - 1;\n        let subMatrix = new Matrix(this.row - 1, this._col - 1);\n        let flagRow = false;\n        let flagCol = false;\n        for (let j = 0; j < this._col; j++) {\n            flagRow = false;\n            if ((j == del_col) && (del_col < this._col)) {\n                j++;\n                flagCol = true;\n            }\n            for (let i = 0; i < this.row; i++) {\n                if ((i == del_row) && (del_row < this.row)) {\n                    i++;\n                    flagRow = true;\n                }\n                if ((flagCol == true) && (flagRow == false)) {\n                    subMatrix.data[i][j - 1] = this.data[i][j];\n                }\n                else if ((flagCol == false) && (flagRow == true)) {\n                    subMatrix.data[i - 1][j] = this.data[i][j];\n                }\n                else if ((flagCol == true) && (flagRow == true)) {\n                    subMatrix.data[i - 1][j - 1] = this.data[i][j];\n                }\n                else {\n                    subMatrix.data[i][j] = this.data[i][j];\n                }\n            }\n        }\n        return subMatrix;\n    }\n}\nexports.Matrix = Matrix;\n/**\n* Multiply two given matrices, MatA[i][j] and MatB[j][p]\n* @param MatA Input MatA.\n* @param MatB Input MatB.\n*/\nfunction multiply(MatA, MatB) {\n    let MatA_Row = MatA.row;\n    let MatA_Col = MatA.col;\n    let MatB_Row = MatB.row;\n    let MatB_Col = MatB.col;\n    if (MatA_Col !== MatB_Row) {\n        throw new Error('Number of cols in Mat1 is different from Mat2 rows');\n    }\n    let MatC = new Matrix(MatA_Row, MatB_Col);\n    for (let i = 0; i < MatA_Row; i++) {\n        for (let j = 0; j < MatB_Col; j++) {\n            let sum = 0;\n            for (let k = 0; k < MatB_Row; k++) {\n                sum = sum + MatA.data[i][k] * MatB.data[k][j];\n            }\n            MatC.data[i][j] = sum;\n        }\n    }\n    return MatC;\n}\nexports.multiply = multiply;\n/**\n* Calculates the transpose of a five matrix.\n* @param M Input matrix M to be transposed.\n* /\nexport function transpose(M:Matrix):Matrix{\n    let Mtransp:Matrix= new Matrix(M.row, M.col)\n    for(let i=0; i<M.row;i++){\n        for(let j=0;j<M.col;j++){\n            Mtransp.data[j][i] = M.data[i][j]\n        }\n    }\n\n    return Mtransp\n}\n\n/**\n* Sum two matrices with the same order.\n* @param MatA Input the first Matrix\n* @param MatB Input the second matrix\n*/\nfunction MatSum(MatA, MatB) {\n    let MatSum = new Matrix(MatA.row, MatA.col);\n    for (let j = 0; j < MatA.col; j++) {\n        for (let i = 0; i < MatA.row; i++) {\n            MatSum.data[i][j] = MatA.data[i][j] + MatB.data[i][j];\n        }\n    }\n    return MatSum;\n}\nexports.MatSum = MatSum;\n/**\n* Subtracts two matrices with the same order.\n* @param MatA Input the first Matrix\n* @param MatB Input the second matrix\n*/\nfunction MatSubtr(MatA, MatB) {\n    let MatSubtr = new Matrix(MatA.row, MatA.col);\n    for (let j = 0; j < MatA.col; j++) {\n        for (let i = 0; i < MatA.row; i++) {\n            MatSubtr.data[i][j] = MatA.data[i][j] - MatB.data[i][j];\n        }\n    }\n    return MatSubtr;\n}\nexports.MatSubtr = MatSubtr;\n/**\n* Subtracts two arrays with the same length.\n* @param ArrayA Input the first Array.\n* @param ArrayB Input the second Array.\n*/\nfunction ArraySubtr(ArrayA, ArrayB) {\n    let ArraySubtr = new Array(ArrayA.length);\n    for (let j = 0; j < ArraySubtr.length; j++) {\n        ArraySubtr[j] = ArrayA[j] - ArrayB[j];\n    }\n    return ArraySubtr;\n}\nexports.ArraySubtr = ArraySubtr;\n/**\n* Creates a matrix identity with a given order.\n* @param order Input order of the matrix.\n*/\nfunction MatIdentity(order) {\n    let MatIdentity = new Matrix(order, order);\n    for (let j = 0; j < order; j++) {\n        for (let i = 0; i < order; i++) {\n            if (i == j) {\n                MatIdentity.data[i][j] = 1;\n            }\n            else {\n                MatIdentity.data[i][j] = 0;\n            }\n        }\n    }\n    return MatIdentity;\n}\nexports.MatIdentity = MatIdentity;\n/**\n* Calculates linear system using Gaussian elimination.\n* @param A Input the matrix of coefficients.\n* @param b Input the vector with results\n*/\nfunction GaussEli(A, b) {\n    let x = new Array(A.row);\n    let M = new Matrix(A.row, A.col);\n    for (let j = 0; j < A.col; j++) {\n        for (let i = j + 1; i < A.col + 1; i++) {\n            M.data[i][j] = A.data[i][j] / A.data[j][j];\n            for (let k = j + 1; k < A.col + 1; k++) {\n                A.data[i][k] = A.data[i][k] - M.data[i][j] * A.data[j][k];\n            }\n            b[i] = b[i] - M.data[i][j] * b[j];\n        }\n    }\n    return x;\n}\nexports.GaussEli = GaussEli;\n/**\n *\tThis function uses Gauss-Jordan elimination to invert matrices.\n *\t@param M Matrix to be inverted\n */\nfunction inv(M) {\n    let M_inv = new Matrix(M.row, M.col);\n    let M_aug = augmentedMatrix(M);\n    let repeatFlag = false;\n    for (let i = 0; i < M_aug.row; i++) {\n        if (repeatFlag == true) {\n            i = i - 1;\n            repeatFlag = false;\n        }\n        if (M_aug.data[i][i] == 0) {\n            if (i + 1 < M_aug.row) {\n                M_aug = swapRow(M_aug, i, i + 1);\n                repeatFlag = true;\n            }\n            else {\n                throw new Error('This matrix is not inverteble');\n            }\n        }\n        else {\n            M_aug.data[i] = multiplyRowByConstant(M_aug.data[i], (1 / M_aug.data[i][i]));\n        }\n        for (let k = 0; k < M_aug.row; k++) {\n            if (k !== i) {\n                M_aug.data[k] = ArraySubtr(M_aug.data[k], multiplyRowByConstant(M_aug.data[i], M_aug.data[k][i]));\n            }\n        }\n    }\n    for (let j = M.col; j < M_aug.col; j++) {\n        for (let i = 0; i < M_aug.row; i++) {\n            M_inv.data[i][j - M.col] = M_aug.data[i][j];\n        }\n    }\n    return M_inv;\n}\nexports.inv = inv;\n/**\n* Copy the values of a matrix to another\n* @param Mto input the matrix that you want the values be copied to\n* @param Mfrom input the matrix that you want the vvalues to be copied from\n*/\nfunction copyMatrix(Mto, Mfrom) {\n    for (let j = 0; j < Mfrom.col; j++) {\n        for (let i = 0; i < Mfrom.row; i++) {\n            Mto.data[i][j] = Mfrom.data[i][j];\n        }\n    }\n    return Mto;\n}\nexports.copyMatrix = copyMatrix;\n/**\n* Creates the augmented matrix to use in matrix inversion.\n* @param M Insert the matrix to be used in the augmented matrix.\n*/\nfunction augmentedMatrix(M) {\n    let augmentedMatrix = new Matrix(M.row, M.col + M.col);\n    let identity = MatIdentity(M.row);\n    for (let j = 0; j < M.col; j++) {\n        for (let i = 0; i < augmentedMatrix.row; i++) {\n            augmentedMatrix.data[i][j] = M.data[i][j];\n        }\n    }\n    for (let j = M.col; j < augmentedMatrix.col; j++) {\n        for (let i = 0; i < augmentedMatrix.row; i++) {\n            augmentedMatrix.data[i][j] = identity.data[i][j - M.col];\n        }\n    }\n    return augmentedMatrix;\n}\nexports.augmentedMatrix = augmentedMatrix;\n/**\n* This function swaps two chosen rows in a given matrix\n* @param M choose the Matrix that rows will be swaped.\n* @param row1 define row1 to be swaped\n* @param row2 define second row to be swaped with the first\n*/\nfunction swapRow(M, row1, row2) {\n    //ERROR CHECKER if either input rows are negative or higher value than input Matrix.\n    if (((row1 < 0) || (row2 < 0))) {\n        throw new Error('Number of rows specified out of limits');\n    }\n    if ((row1 >= M.row) || (row2 >= M.row)) {\n        throw new Error('Number of rows specified out of limits');\n    }\n    //End of ERROR CHECKER\n    let swapMatrix = new Matrix(M.row, M.col);\n    copyMatrix(swapMatrix, M);\n    let saveRow = new Array(M.col);\n    for (let j = 0; j < M.col; j++) {\n        saveRow[j] = swapMatrix.data[row1][j];\n    }\n    for (let j = 0; j < M.col; j++) {\n        swapMatrix.data[row1][j] = swapMatrix.data[row2][j];\n    }\n    for (let j = 0; j < M.col; j++) {\n        swapMatrix.data[row2][j] = saveRow[j];\n    }\n    return swapMatrix;\n}\nexports.swapRow = swapRow;\n/**\n* This function multiplay a given array by a constant number\n* @param Row define the row that will be multiplied by a constant\n* @param constat define the constant that will multiply the row. For a division, just insert 1/constant.\n*/\nfunction multiplyRowByConstant(Row, constant) {\n    let multipliedArray = new Array(Row.length);\n    for (let j = 0; j < Row.length; j++) {\n        multipliedArray[j] = constant * Row[j];\n    }\n    return multipliedArray;\n}\nexports.multiplyRowByConstant = multiplyRowByConstant;\n//# sourceMappingURL=matrix-ts.js.map\n\n//# sourceURL=webpack:///./node_modules/@felipeaamacedo/matrix-ts/lib/matrix-ts.js?");

/***/ })

/******/ });