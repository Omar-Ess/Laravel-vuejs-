(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_components_users_UsersForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/users/UsersForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/users/UsersForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      newAvatar: null
    };
  },
  computed: _objectSpread({
    isCreateMode: function isCreateMode() {
      return this.$route.name == "users.create";
    },
    getIsLoading: function getIsLoading() {
      return this.isLoading["get"];
    },
    postIsLoading: function postIsLoading() {
      return this.isLoading["post"];
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)("users", ["userObject", "isLoading", "serverErrors"])),
  methods: _objectSpread({
    onFileChange: function onFileChange(e) {
      this.newAvatar = e.target.files[0];
    },
    cancelAvatar: function cancelAvatar() {
      $("#avatar").val("");
      $("#upload-file-info").html("Choose new Avatar");
      $("#inputGroupFileAddon01").css("display", "none");
      this.newAvatar = null;
    },
    handleSubmit: function handleSubmit() {
      // create new formdata object
      var formData = new FormData(); // appending the avatar file to the formdata if the file is not null

      if (this.newAvatar) {
        formData.append("newAvatar", this.newAvatar);
      } // appending all the userObject properties to the form data


      _.each(this.userObject, function (value, key) {
        formData.append(key, value);
      }); // and passing the form data instead of the user object


      if (this.isCreateMode) {
        this.addUser(formData);
      } else {
        this.updateUser(formData);
      }
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)("users", ["addUser", "fetchUser", "updateUser"])),
  mounted: function mounted() {
    this.$store.commit("users/clearUser");
    this.$store.commit("users/clearServerErrors");

    if (!this.isCreateMode) {
      this.fetchUser(this.$route.params.id);
    }
  }
});

/***/ }),

/***/ "./resources/js/admin/components/users/UsersForm.vue":
/*!***********************************************************!*\
  !*** ./resources/js/admin/components/users/UsersForm.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UsersForm_vue_vue_type_template_id_c4d5006c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersForm.vue?vue&type=template&id=c4d5006c& */ "./resources/js/admin/components/users/UsersForm.vue?vue&type=template&id=c4d5006c&");
/* harmony import */ var _UsersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersForm.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/users/UsersForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UsersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UsersForm_vue_vue_type_template_id_c4d5006c___WEBPACK_IMPORTED_MODULE_0__.render,
  _UsersForm_vue_vue_type_template_id_c4d5006c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/users/UsersForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/users/UsersForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/admin/components/users/UsersForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/users/UsersForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/admin/components/users/UsersForm.vue?vue&type=template&id=c4d5006c&":
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/components/users/UsersForm.vue?vue&type=template&id=c4d5006c& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_template_id_c4d5006c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_template_id_c4d5006c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersForm_vue_vue_type_template_id_c4d5006c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersForm.vue?vue&type=template&id=c4d5006c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/users/UsersForm.vue?vue&type=template&id=c4d5006c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/users/UsersForm.vue?vue&type=template&id=c4d5006c&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/users/UsersForm.vue?vue&type=template&id=c4d5006c& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
            _c("router-link", { attrs: { to: { name: "users" } } }, [
              _c("i", { staticClass: "fa fa-clipboard-alt" }),
              _vm._v(" Utilisateurs")
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
                    _vm._v("\n          Ajout de Utilisateurs\n        ")
                  ])
                : _c("h1", { staticClass: "h4 mt-4 text-gray-800" }, [
                    _vm._v("\n          Modification de Utilisateurs\n        ")
                  ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "ml-auto align-self-center p-3" },
              [
                _c("router-link", { attrs: { to: { name: "users" } } }, [
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
              attrs: { enctype: "multipart/form-data" },
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
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "form-group col-md-6" }, [
                  _c("label", [_vm._v("Nom d'Utilisateur")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.userObject.name,
                        expression: "userObject.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Entrez le Nom",
                      required: ""
                    },
                    domProps: { value: _vm.userObject.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.userObject, "name", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-md-6" }, [
                  _c("label", [_vm._v("Email d'Utilisateur")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.userObject.email,
                        expression: "userObject.email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      placeholder: "Entrez l'Email",
                      required: ""
                    },
                    domProps: { value: _vm.userObject.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.userObject, "email", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _vm.isCreateMode
                ? _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Mot de Passe")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userObject.password,
                          expression: "userObject.password"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        placeholder: "Entrez le Mot de passe",
                        required: ""
                      },
                      domProps: { value: _vm.userObject.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.userObject,
                            "password",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Avatar d'Utilisateur")]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group mb-3 mt-2" }, [
                  _c(
                    "div",
                    {
                      staticClass: "input-group-prepend",
                      staticStyle: { display: "none" },
                      attrs: { id: "inputGroupFileAddon01" }
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "input-group-text btn btn-danger",
                          attrs: { type: "button" },
                          on: { click: _vm.cancelAvatar }
                        },
                        [
                          _c("i", { staticClass: "fa fa-close mr-2" }),
                          _vm._v(" Cancel\n              ")
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "custom-file" }, [
                    _c("input", {
                      staticClass: "custom-file-input form-control mr-3",
                      attrs: {
                        type: "file",
                        name: "avatar",
                        id: "avatar",
                        "aria-describedby": "inputGroupFileAddon01",
                        onchange:
                          "$('#upload-file-info').html(this.files[0].name) ; $('#inputGroupFileAddon01').css('display','block')"
                      },
                      on: { change: _vm.onFileChange }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-file-label",
                        staticStyle: { overflow: "hidden" },
                        attrs: { id: "upload-file-info", for: "image" }
                      },
                      [
                        _vm._v(
                          "\n                Choisissez un nouvel avatar\n              "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                !_vm.isCreateMode
                  ? _c("img", {
                      staticClass: "avatar",
                      attrs: { src: _vm.userObject.avatar, alt: "" }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group d-flex" }, [
                _c("label", { staticClass: "mr-2" }, [_vm._v("Est Admin : ")]),
                _vm._v(" "),
                _c(
                  "span",
                  {},
                  [
                    _c("toggle-button", {
                      attrs: { value: _vm.userObject.is_admin, sync: true },
                      model: {
                        value: _vm.userObject.is_admin,
                        callback: function($$v) {
                          _vm.$set(_vm.userObject, "is_admin", $$v)
                        },
                        expression: "userObject.is_admin"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm.isCreateMode
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-orange  btn-block",
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
                      staticClass: "btn btn-orange  btn-block",
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