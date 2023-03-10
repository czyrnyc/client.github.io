(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");



class AppComponent {
    constructor() {
        this.title = 'Ecomm-Client';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-home");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");













class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"],
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_11__["PaymentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["RegistrationComponent"],
                    _payment_payment_component__WEBPACK_IMPORTED_MODULE_11__["PaymentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-requests/http-requests.service */ "./src/app/http-requests/http-requests.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/product.component */ "./src/app/product/product.component.ts");





function CartComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartComponent_ng_container_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const prod_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.removeItem(prod_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Remove Item From Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const prod_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", prod_r2.item_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 3, prod_r2.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" qty : ", prod_r2.quantity, " ");
} }
function CartComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-product", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("paymentInfoInput", ctx_r1.payMethods);
} }
class CartComponent {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
        this.nullPaymethods = false;
    }
    ngOnInit() {
        this.getCart();
    }
    removeItem(removedItem) {
        this.httpRequest.removeFromCart(removedItem).subscribe((res) => {
        });
    }
    checkout() {
        this.httpRequest.getPayMethods().subscribe((res) => {
            if (res === "") {
                this.nullPaymethods = true;
            }
        });
    }
    getCart() {
        this.httpRequest.getCart().subscribe((res) => {
            for (let object in res) {
                let var1 = JSON.parse(object);
                let id = var1.id;
                let item_name = var1.itemname;
                let quantity = var1.quantity;
                let item_type = var1.item_type;
                let brand = var1.brand;
                let price = var1.price;
                let description = var1.description;
                let prod = { id: id, item_name: item_name, quantity: quantity, item_type: item_type, brand: brand, price: price, description: description };
                this.cartItems.push(prod);
            }
        });
    }
}
CartComponent.??fac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"])); };
CartComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 5, vars: 2, consts: [[4, "ngFor", "ngForIn"], [4, "ngIf"], [3, "click"], [3, "paymentInfoInput"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Your Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CartComponent_ng_container_3_Template, 10, 5, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CartComponent_ng_container_4_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForIn", ctx.cartItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.nullPaymethods);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: _http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-requests/http-requests.service */ "./src/app/http-requests/http-requests.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product/product.component */ "./src/app/product/product.component.ts");







function HomeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_ng_container_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const product_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.openDetails(product_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 2, product_r2.price));
} }
function HomeComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-product", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("product", ctx_r1.selectedProduct);
} }
class HomeComponent {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
        this.prodDetails = false;
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        this.httpRequest.getProducts().subscribe((res) => {
            for (let obj in res) {
                let work = JSON.parse(obj);
                let id = work.id;
                let name = work.item_name;
                let quantity = work.quantity;
                let type = work.item_type;
                let brand = work.brand;
                let price = work.price;
                let desc = work.description;
                let prod = { id: id, item_name: name, quantity: quantity, item_type: type, brand: brand, price: price, description: desc };
                this.Products.push(prod);
            }
        });
    }
    openDetails(item) {
        this.prodDetails = true;
        this.selectedProduct = item;
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"])); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 2, consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-md-3", "mb-5"], [3, "click"], [1, "card", "bg-light"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [3, "product"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, HomeComponent_ng_container_0_Template, 10, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, HomeComponent_ng_container_5_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.Products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.prodDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/http-requests/http-requests.service.ts":
/*!********************************************************!*\
  !*** ./src/app/http-requests/http-requests.service.ts ***!
  \********************************************************/
/*! exports provided: HttpRequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestsService", function() { return HttpRequestsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class HttpRequestsService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "http://teamm4413.us-east-1.elasticbeanstalk.com/";
    }
    getToken() {
        const token = localStorage.getItem('token');
        return token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', token) : null;
    }
    register(email, password, lname, fname) {
        let url = this.apiUrl + "register?email=" + email + "&password=" + password + "&fn=" + fname + "&ln=" + lname;
        return this.http.get(url);
    }
    login(email, password) {
        let url = this.apiUrl + "login?email=" + email + "&password=" + password;
        return this.http.get(url);
    }
    getCart() {
        let url = this.apiUrl + "login?cart=true";
        return this.http.get(url);
    }
    removeFromCart(id) {
        let url = this.apiUrl + "browse?id=" + id + "&add=false";
        return this.http.get(url);
    }
    // Adds 1 item/product: `id`  to cart
    addToCart(id) {
        let url = this.apiUrl + "browse?id=" + id + "&add=true&" + "quantity=1";
        return this.http.get(url);
    }
    getProducts() {
        let url = this.apiUrl + "browse";
        return this.http.get(url);
    }
    paymentInfo(cardNum, cardHold, cvv, exprDate, street, city, zip, phoneNum) {
        let url = this.apiUrl + "pay_methods?card_number=" + cardNum + "&card_holder=" + cardHold + "&cvv=" + cvv + "&street=" + street + "&city=" + city + "&zip=" + zip + "&phone=" + phoneNum + "&exp_date=" + exprDate;
        return this.http.get(url);
    }
    getPayMethods() {
        let url = this.apiUrl + "pay_methods";
        return this.http.get(url);
    }
}
HttpRequestsService.??fac = function HttpRequestsService_Factory(t) { return new (t || HttpRequestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpRequestsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: HttpRequestsService, factory: HttpRequestsService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HttpRequestsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/http-requests/http-requests.service */ "./src/app/http-requests/http-requests.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class LoginComponent {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
        this.email = '';
        this.password = '';
        this.btnDisabled = false;
    }
    ngOnInit() {
    }
    validate() {
        if (this.email) {
            if (this.password) {
                return true;
            }
            else {
                alert('Password is not entered');
            }
        }
        else {
            alert('Email is not entered.');
        }
    }
    login() {
        this.btnDisabled = true;
        this.httpRequest.login(this.email, this.password).subscribe((res) => {
            console.log(res);
            if (res.status == '200') {
                this.getCart();
            }
            else {
                alert('The account credentials are invalid!');
            }
        });
    }
    getCart() {
        this.httpRequest.getCart().subscribe((res) => {
            console.log(res);
        });
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 3, consts: [["id", "loginPage"], [1, "container", "p-5"], [1, "row", "mt-5"], [1, "col-lg-4", "offset-lg-4"], [1, "card", "bg-light"], [1, "card-body"], [1, "text-center"], [1, "form-group"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_button_click_19_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.btnDisabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-requests/http-requests.service */ "./src/app/http-requests/http-requests.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function PaymentComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Card Holder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PaymentComponent_ng_container_4_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.cardHold = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Card Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PaymentComponent_ng_container_4_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.cardNum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "CVV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PaymentComponent_ng_container_4_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.cvv = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Expiration Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PaymentComponent_ng_container_4_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.exprDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PaymentComponent_ng_container_4_Template_input_ngModelChange_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Street");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PaymentComponent_ng_container_4_Template_input_ngModelChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r9.street = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Zip Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PaymentComponent_ng_container_4_Template_input_ngModelChange_52_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r10.zip = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PaymentComponent_ng_container_4_Template_input_ngModelChange_59_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r11.phoneNum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.cardHold);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.cardNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.cvv);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.exprDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.street);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.zip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.phoneNum);
} }
function PaymentComponent_ng_template_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const pay_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("Card Number: ", pay_r13.card_number, ". Card Holder: ", pay_r13.card_holder, "");
} }
function PaymentComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PaymentComponent_ng_template_5_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r14.cardSelect = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, PaymentComponent_ng_template_5_ng_container_2_Template, 3, 2, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r2.cardSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForIn", ctx_r2.PayMethods);
} }
class PaymentComponent {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    ngOnInit() {
        this.getPayment();
    }
    getPayment() {
        this.httpRequest.paymentInfo(this.cardNum, this.cardHold, this.cvv, this.exprDate, this.street, this.city, this.zip, this.phoneNum).subscribe((res) => {
            if (res.contains("Payment method inserted sucessfully")) {
                alert("Payment method successfully added!");
                this.paymentInfoInput = false;
            }
        });
    }
}
PaymentComponent.??fac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"])); };
PaymentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], inputs: { PayMethods: "PayMethods", paymentInfoInput: "paymentInfoInput" }, outputs: { cardSelect: "cardSelect" }, decls: 7, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["selectMethod", ""], [1, "row-container"], [1, "input-container"], ["for", ""], ["type", "text", "id", "cardHold", "name", "cardHold", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "cardNum", "name", "cardNum", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "cvv", "name", "cvv", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "exprDate", "name", "exprDate", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "city", "name", "city", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "street", "name", "street", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "zip", "name", "zip", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "phoneNum", "name", "phoneNum", 3, "ngModel", "ngModelChange"], ["name", "cardSelect", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForIn"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Team M e-Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Payment Method ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PaymentComponent_ng_container_4_Template, 60, 8, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, PaymentComponent_ng_template_5_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.paymentInfoInput)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment',
                templateUrl: './payment.component.html',
                styleUrls: ['./payment.component.css']
            }]
    }], function () { return [{ type: _http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"] }]; }, { PayMethods: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paymentInfoInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-requests/http-requests.service */ "./src/app/http-requests/http-requests.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ProductComponent_ng_container_3_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Out of Stock! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ProductComponent_ng_container_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const prod_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Quantity in Stock: ", prod_r1.quantity, " ");
} }
function ProductComponent_ng_container_3_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const prod_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Description: ", prod_r1.description, " ");
} }
function ProductComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ProductComponent_ng_container_3_p_7_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ProductComponent_ng_container_3_ng_template_8_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ProductComponent_ng_container_3_p_10_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductComponent_ng_container_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const prod_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.addToCart(prod_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const prod_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", prod_r1.itemName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prod_r1.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", prod_r1.price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", prod_r1.quantity === "0")("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", prod_r1.description);
} }
class ProductComponent {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    ngOnInit() {
    }
    addToCart(productID) {
        this.httpRequest.addToCart(productID);
    }
}
ProductComponent.??fac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"])); };
ProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { product: "product" }, decls: 4, vars: 1, consts: [["align", "center"], [4, "ngFor", "ngForIn"], [4, "ngIf", "ngIfElse"], ["inStock", ""], [4, "ngIf"], [3, "click"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Our Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ProductComponent_ng_container_3_Template, 13, 6, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForIn", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.css']
            }]
    }], function () { return [{ type: _http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-requests/http-requests.service */ "./src/app/http-requests/http-requests.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class RegistrationComponent {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
        this.btnDisabled = false;
    }
    ngOnInit() {
    }
    validateInputs() {
        if (this.fname) {
            if (this.lname) {
                if (this.email) {
                    if (this.password) {
                        if (this.password1) {
                            if (this.password === this.password1) {
                                return true;
                            }
                            else {
                                alert('Passwords do not match.');
                            }
                        }
                        else {
                            alert('Confirmation Password is not entered');
                        }
                    }
                    else {
                        alert('Password is not entered');
                    }
                }
                else {
                    alert('Email is not entered.');
                }
            }
            else {
                alert('Last name is not entered.');
            }
        }
        else {
            alert('First name is not entered.');
        }
        return false;
    }
    register() {
        this.btnDisabled = true;
        if (this.validateInputs()) {
            this.httpRequest.register(this.email, this.password, this.fname, this.lname).subscribe((res) => {
                if (res === 'Result: 1 Registered successfully!') {
                }
                else if (res === 'Result: -1 Email already registered.') {
                    alert("There is already an account linked to this email!!");
                }
            });
        }
    }
}
RegistrationComponent.??fac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"])); };
RegistrationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 32, vars: 6, consts: [[1, "container", "p-5"], [1, "row", "mt-5"], [1, "col-lg-4", "offset-lg-4"], [1, "card", "bg-light"], [1, "card-body"], [1, "text-center"], [1, "form-group"], [1, "form-control-label"], ["type", "text", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_12_listener($event) { return ctx.fname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_16_listener($event) { return ctx.lname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_20_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_24_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_28_listener($event) { return ctx.password1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RegistrationComponent_Template_button_click_30_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.fname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.lname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.password1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.btnDisabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return [{ type: _http_requests_http_requests_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestsService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mychart/Documents/School/EECS/EECS_4413/TeamM_FE/TeamM_FE/Ecomm-Client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map