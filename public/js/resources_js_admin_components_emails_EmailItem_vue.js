(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_components_emails_EmailItem_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/emails/EmailItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/emails/EmailItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      loading: true
    };
  },
  computed: _objectSpread({
    getIsLoading: function getIsLoading() {
      return this.isLoading["get"];
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)("emails", ["emailObject", "isLoading"])),
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)("emails", ["fetchEmail"])),
  mounted: function mounted() {
    var id = this.$route.params.id;
    this.fetchEmail(id);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/emails/EmailItem.vue?vue&type=style&index=0&id=116c0cfc&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/emails/EmailItem.vue?vue&type=style&index=0&id=116c0cfc&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.email-app[data-v-116c0cfc] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  background: #fff;\n}\n.email-app main[data-v-116c0cfc] {\r\n  min-width: 0;\r\n  flex: 1;\r\n  padding: 1rem;\n}\n.email-app .message .details .title[data-v-116c0cfc] {\r\n  padding: 1rem 0;\r\n  font-weight: bold;\n}\n.email-app .message .details .header[data-v-116c0cfc] {\r\n  display: flex;\r\n  padding: 1rem 0;\r\n  margin: 1rem 0;\r\n  border-top: 1px solid #e1e6ef;\r\n  border-bottom: 1px solid #e1e6ef;\n}\n.email-app .message .details .header .avatar[data-v-116c0cfc] {\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 1rem;\n}\n.email-app .message .details .header .from[data-v-116c0cfc] {\r\n  font-size: 12px;\r\n  color: #9faecb;\r\n  align-self: center;\n}\n.email-app .message .details .header .from span[data-v-116c0cfc] {\r\n  display: block;\r\n  font-weight: bold;\n}\n.email-app .message .details .header .date[data-v-116c0cfc] {\r\n  margin-left: auto;\n}\n@media (max-width: 767px) {\n.email-app[data-v-116c0cfc] {\r\n    flex-direction: column;\n}\n}\n@media (max-width: 575px) {\n.email-app .message .header[data-v-116c0cfc] {\r\n    flex-flow: row wrap;\n}\n.email-app .message .header .date[data-v-116c0cfc] {\r\n    flex: 0 0 100%;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/emails/EmailItem.vue?vue&type=style&index=0&id=116c0cfc&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/emails/EmailItem.vue?vue&type=style&index=0&id=116c0cfc&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailItem_vue_vue_type_style_index_0_id_116c0cfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailItem.vue?vue&type=style&index=0&id=116c0cfc&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/emails/EmailItem.vue?vue&type=style&index=0&id=116c0cfc&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailItem_vue_vue_type_style_index_0_id_116c0cfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailItem_vue_vue_type_style_index_0_id_116c0cfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/admin/components/emails/EmailItem.vue":
/*!************************************************************!*\
  !*** ./resources/js/admin/components/emails/EmailItem.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmailItem_vue_vue_type_template_id_116c0cfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailItem.vue?vue&type=template&id=116c0cfc&scoped=true& */ "./resources/js/admin/components/emails/EmailItem.vue?vue&type=template&id=116c0cfc&scoped=true&");
/* harmony import */ var _EmailItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailItem.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/emails/EmailItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _EmailItem_vue_vue_type_style_index_0_id_116c0cfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailItem.vue?vue&type=style&index=0&id=116c0cfc&scoped=true&lang=css& */ "./resources/js/admin/components/emails/EmailItem.vue?vue&type=style&index=0&id=116c0cfc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _EmailItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EmailItem_vue_vue_type_template_id_116c0cfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmailItem_vue_vue_type_template_id_116c0cfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "116c0cfc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/emails/EmailItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/emails/EmailItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/components/emails/EmailItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/emails/EmailItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/admin/components/emails/EmailItem.vue?vue&type=style&index=0&id=116c0cfc&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/admin/components/emails/EmailItem.vue?vue&type=style&index=0&id=116c0cfc&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailItem_vue_vue_type_style_index_0_id_116c0cfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailItem.vue?vue&type=style&index=0&id=116c0cfc&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/emails/EmailItem.vue?vue&type=style&index=0&id=116c0cfc&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/admin/components/emails/EmailItem.vue?vue&type=template&id=116c0cfc&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/admin/components/emails/EmailItem.vue?vue&type=template&id=116c0cfc&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailItem_vue_vue_type_template_id_116c0cfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailItem_vue_vue_type_template_id_116c0cfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailItem_vue_vue_type_template_id_116c0cfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmailItem.vue?vue&type=template&id=116c0cfc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/emails/EmailItem.vue?vue&type=template&id=116c0cfc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/emails/EmailItem.vue?vue&type=template&id=116c0cfc&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/emails/EmailItem.vue?vue&type=template&id=116c0cfc&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("the-breadcrumb", [
        _c(
          "li",
          { staticClass: "breadcrumb-item" },
          [
            _c("router-link", { attrs: { to: { name: "emails" } } }, [
              _c("i", { staticClass: "fa fa-clipboard-alt" }),
              _vm._v(" Boîte de réception")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("Email")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12 col-lg-12" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tab-content", attrs: { id: "myTabContent" } },
              [
                _c(
                  "div",
                  {
                    staticClass: "tab-pane fade active show",
                    attrs: {
                      id: "inbox",
                      "aria-labelledby": "inbox-tab",
                      role: "tabpanel"
                    }
                  },
                  [
                    _c("div", { staticClass: "email-app mb-4" }, [
                      _c("main", { staticClass: "message" }, [
                        _vm.getIsLoading
                          ? _c(
                              "div",
                              { staticClass: "text-center" },
                              [
                                _c(
                                  "loading",
                                  {
                                    attrs: {
                                      color: "white",
                                      active: _vm.getIsLoading,
                                      "is-full-page": false
                                    },
                                    on: {
                                      "update:active": function($event) {
                                        _vm.getIsLoading = $event
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "h5",
                                      {
                                        staticClass: "text-light",
                                        attrs: { slot: "after" },
                                        slot: "after"
                                      },
                                      [_vm._v("Loading")]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _c("div", { staticClass: "details" }, [
                              _c("div", { staticClass: "title" }, [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(_vm.emailObject.data.subject) +
                                    "\n                  "
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "header" }, [
                                _c("img", {
                                  staticClass: "avatar",
                                  attrs: {
                                    src: "/storage/images/users/noavatar.jpg"
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "from" }, [
                                  _c("span", [
                                    _vm._v(_vm._s(_vm.emailObject.data.name))
                                  ]),
                                  _vm._v(
                                    "\n                      " +
                                      _vm._s(_vm.emailObject.data.email) +
                                      "\n                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "date" }, [
                                  _vm._v(
                                    "\n                      " +
                                      _vm._s(
                                        _vm._f("formatedDate")(
                                          _vm.emailObject.created_at
                                        )
                                      ) +
                                      "\n                      "
                                  ),
                                  _c("i", { staticClass: "fa fa-calendar-alt" })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "content" }, [
                                _c("p", [
                                  _vm._v(
                                    "\n                      " +
                                      _vm._s(_vm.emailObject.data.message) +
                                      "\n                    "
                                  )
                                ])
                              ])
                            ])
                      ])
                    ])
                  ]
                )
              ]
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-body bg-black text-white mailbox-widget pb-0" },
      [
        _c("h2", { staticClass: "text-white pb-3" }, [
          _c("i", { staticClass: "fa fa-envelope" }),
          _vm._v(" Votre boîte mail\n          ")
        ]),
        _vm._v(" "),
        _c(
          "ul",
          {
            staticClass: "nav nav-tabs custom-tab border-bottom-0 mt-4",
            attrs: { id: "myTab", role: "tablist" }
          },
          [
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link active",
                  attrs: {
                    id: "inbox-tab",
                    "data-toggle": "tab",
                    "aria-controls": "inbox",
                    href: "#inbox",
                    role: "tab",
                    "aria-selected": "true"
                  }
                },
                [
                  _c("span", { staticClass: "d-block d-md-none" }, [
                    _c("i", { staticClass: "fa fa-inbox" })
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-none d-md-block" }, [
                    _vm._v(" Boîte de réception")
                  ])
                ]
              )
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);