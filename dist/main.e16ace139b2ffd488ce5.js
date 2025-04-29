/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************!*\
  !*** ./app.ts ***!
  \****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./style.css */ "./style.css");
const volumeControl = document.getElementById('volume');
const buttons = document.querySelectorAll('button');
let currentAudio;
let isPlaying = false;
volumeControl.addEventListener('input', () => {
    const volumeValue = parseFloat(volumeControl.value);
    currentAudio.volume = volumeValue;
});
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundName = button.dataset.sound;
        if (button.classList.contains('active')) {
            togglePlayback();
            return;
        }
        stopCurrentAudio();
        playSound(soundName);
    });
});
function playSound(soundName) {
    currentAudio = new Audio(`../public/static/sounds/${soundName}.mp3`);
    currentAudio.loop = true;
    currentAudio.play();
    isPlaying = true;
}
function stopCurrentAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    isPlaying = false;
}
function togglePlayback() {
    if (isPlaying) {
        currentAudio.pause();
        isPlaying = false;
    }
    else {
        currentAudio.play();
        isPlaying = true;
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lMTZhY2UxMzliMmZmZDQ4OGNlNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFPLENBQUMsZ0NBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBLHdEQUF3RCxVQUFVO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0eWxlLmNzcz9iMjU5Iiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xuY29uc3Qgdm9sdW1lQ29udHJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWUnKTtcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbmxldCBjdXJyZW50QXVkaW87XG5sZXQgaXNQbGF5aW5nID0gZmFsc2U7XG52b2x1bWVDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGNvbnN0IHZvbHVtZVZhbHVlID0gcGFyc2VGbG9hdCh2b2x1bWVDb250cm9sLnZhbHVlKTtcbiAgICBjdXJyZW50QXVkaW8udm9sdW1lID0gdm9sdW1lVmFsdWU7XG59KTtcbmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc291bmROYW1lID0gYnV0dG9uLmRhdGFzZXQuc291bmQ7XG4gICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgdG9nZ2xlUGxheWJhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdG9wQ3VycmVudEF1ZGlvKCk7XG4gICAgICAgIHBsYXlTb3VuZChzb3VuZE5hbWUpO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBwbGF5U291bmQoc291bmROYW1lKSB7XG4gICAgY3VycmVudEF1ZGlvID0gbmV3IEF1ZGlvKGAuLi9wdWJsaWMvc3RhdGljL3NvdW5kcy8ke3NvdW5kTmFtZX0ubXAzYCk7XG4gICAgY3VycmVudEF1ZGlvLmxvb3AgPSB0cnVlO1xuICAgIGN1cnJlbnRBdWRpby5wbGF5KCk7XG4gICAgaXNQbGF5aW5nID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHN0b3BDdXJyZW50QXVkaW8oKSB7XG4gICAgaWYgKGN1cnJlbnRBdWRpbykge1xuICAgICAgICBjdXJyZW50QXVkaW8ucGF1c2UoKTtcbiAgICAgICAgY3VycmVudEF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICB9XG4gICAgaXNQbGF5aW5nID0gZmFsc2U7XG59XG5mdW5jdGlvbiB0b2dnbGVQbGF5YmFjaygpIHtcbiAgICBpZiAoaXNQbGF5aW5nKSB7XG4gICAgICAgIGN1cnJlbnRBdWRpby5wYXVzZSgpO1xuICAgICAgICBpc1BsYXlpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGN1cnJlbnRBdWRpby5wbGF5KCk7XG4gICAgICAgIGlzUGxheWluZyA9IHRydWU7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9