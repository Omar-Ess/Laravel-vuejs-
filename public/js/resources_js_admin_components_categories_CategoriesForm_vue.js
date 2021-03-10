(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_components_categories_CategoriesForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/categories/CategoriesForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/categories/CategoriesForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  computed: _objectSpread({
    isCreateMode: function isCreateMode() {
      return this.$route.name == "categories.create";
    },
    getIsLoading: function getIsLoading() {
      return this.isLoading["get"];
    },
    postIsLoading: function postIsLoading() {
      return this.isLoading["post"];
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)("categories", ["categoryObject", "isLoading", "serverErrors"])),
  methods: _objectSpread({
    getSlug: function getSlug() {
      var _this = this;

      if (this.categoryObject.name) {
        axios.get("/api/categories/generateSlug/".concat(this.categoryObject.name)).then(function (res) {
          _this.categoryObject.slug = res.data.slug;

          _this.$forceUpdate();
        })["catch"](function (err) {
          _this.$toast.error("La Génération de Slug n'a pas réussi");
        });
      }
    },
    handleSubmit: function handleSubmit() {
      if (this.isCreateMode) {
        this.addCategory(this.categoryObject);
      } else {
        this.updateCategory(this.categoryObject);
      }
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)("categories", ["addCategory", "fetchCategory", "updateCategory"])),
  mounted: function mounted() {
    this.$store.commit("categories/clearCategory");
    this.$store.commit("categories/clearServerErrors");

    if (!this.isCreateMode) {
      this.fetchCategory(this.$route.params.id);
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/components/categories/CategoriesForm.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/admin/components/categories/CategoriesForm.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoriesForm_vue_vue_type_template_id_5b12d678___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriesForm.vue?vue&type=template&id=5b12d678& */ "./resources/js/admin/components/categories/CategoriesForm.vue?vue&type=template&id=5b12d678&");
/* harmony import */ var _CategoriesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoriesForm.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/categories/CategoriesForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CategoriesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CategoriesForm_vue_vue_type_template_id_5b12d678___WEBPACK_IMPORTED_MODULE_0__.render,
  _CategoriesForm_vue_vue_type_template_id_5b12d678___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/categories/CategoriesForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/categories/CategoriesForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/components/categories/CategoriesForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoriesForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/categories/CategoriesForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/admin/components/categories/CategoriesForm.vue?vue&type=template&id=5b12d678&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/admin/components/categories/CategoriesForm.vue?vue&type=template&id=5b12d678& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesForm_vue_vue_type_template_id_5b12d678___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesForm_vue_vue_type_template_id_5b12d678___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesForm_vue_vue_type_template_id_5b12d678___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoriesForm.vue?vue&type=template&id=5b12d678& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/categories/CategoriesForm.vue?vue&type=template&id=5b12d678&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/categories/CategoriesForm.vue?vue&type=template&id=5b12d678&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/categories/CategoriesForm.vue?vue&type=template&id=5b12d678& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
            _c("router-link", { attrs: { to: { name: "categories" } } }, [
              _c("i", { staticClass: "fa fa-clipboard-alt" }),
              _vm._v(" Catégories")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _vm.isCreateMode
          ? _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Ajouter")
            ])
          : _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Modifier")
            ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card card-sticker shadow mb-4 mt-5" }, [
        _c(
          "div",
          { staticClass: "d-flex", attrs: { id: "card-header-wrapper" } },
          [
            _c(
              "div",
              {
                staticClass:
                  "card-header card-header-sticker bg-primary text-center"
              },
              [
                _c("h6", { staticClass: "font-weight-bold text-white" }, [
                  _vm.isCreateMode
                    ? _c("i", { staticClass: "fa fa-plus fa-2x" })
                    : _c("i", { staticClass: "fa fa-pen fa-2x" })
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _vm.isCreateMode
                ? _c("h1", { staticClass: "h4 mt-4 text-gray-800" }, [
                    _vm._v("\n          Ajout de Catégories\n        ")
                  ])
                : _c("h1", { staticClass: "h4 mt-4 text-gray-800" }, [
                    _vm._v("\n          Modification de Catégories\n        ")
                  ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "ml-auto align-self-center p-3" },
              [
                _c("router-link", { attrs: { to: { name: "categories" } } }, [
                  _c("button", { staticClass: "btn btn-outline-black mr-2" }, [
                    _c("i", { staticClass: "fa fa-arrow-circle-left" }),
                    _vm._v(" "),
                    _c("span", [_vm._v(" Annuler")])
                  ])
                ])
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _vm.getIsLoading
            ? _c(
                "div",
                [
                  _c(
                    "loading",
                    {
                      attrs: {
                        color: "#2B51C4",
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
                      _c("h5", { attrs: { slot: "after" }, slot: "after" }, [
                        _vm._v("Loading")
                      ])
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.handleSubmit($event)
                }
              }
            },
            [
              _vm.serverErrors
                ? _c("server-error-alert", {
                    attrs: { serverErrors: _vm.serverErrors }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Nom de Catégorie")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.categoryObject.name,
                      expression: "categoryObject.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: "Entrez le Nom",
                    required: ""
                  },
                  domProps: { value: _vm.categoryObject.name },
                  on: {
                    blur: _vm.getSlug,
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.categoryObject, "name", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Slug de Catégorie ")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.categoryObject.slug,
                      expression: "categoryObject.slug"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: "Entrez le Slug",
                    required: ""
                  },
                  domProps: { value: _vm.categoryObject.slug },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.categoryObject, "slug", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("small", { staticClass: "form-text text-muted" }, [
                  _vm._v("Le slug est pour une URL conviviale.")
                ])
              ]),
              _vm._v(" "),
              _vm.isCreateMode
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-orange ",
                      attrs: { type: "submit", disabled: _vm.postIsLoading }
                    },
                    [
                      _vm.postIsLoading
                        ? _c("i", { staticClass: "fa fa-circle-notch fa-spin" })
                        : _vm._e(),
                      _vm._v("\n          Ajouter\n        ")
                    ]
                  )
                : _c(
                    "button",
                    {
                      staticClass: "btn btn-orange ",
                      attrs: { type: "submit", disabled: _vm.postIsLoading }
                    },
                    [
                      _vm.postIsLoading
                        ? _c("i", { staticClass: "fa fa-circle-notch fa-spin" })
                        : _vm._e(),
                      _vm._v("\n\n          Sauvegarder\n        ")
                    ]
                  )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);