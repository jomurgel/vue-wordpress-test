webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_Home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Blog__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Blog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_Blog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Single__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Single___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_Single__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Page__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__pages_Page__);
// https://router.vuejs.org/en/api/router-link.html








__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history', // this is important — https://router.vuejs.org/en/essentials/history-mode.html
  routes: [{
    path: '/',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__pages_Home___default.a
  }, {
    path: '/blog',
    name: 'Blog',
    component: __WEBPACK_IMPORTED_MODULE_3__pages_Blog___default.a
  }, {
    path: '/blog/:slug',
    name: 'Single',
    component: __WEBPACK_IMPORTED_MODULE_4__pages_Single___default.a
  }, {
    path: '/:slug',
    name: 'Page',
    component: __WEBPACK_IMPORTED_MODULE_5__pages_Page___default.a
  }]
}));

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_baseurl__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(4);






__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */]);

const jsonLocate = 'wp-json';

const namespace = {
	wp: jsonLocate + '/wp/v2/',
	menus: jsonLocate + '/wp-api-menus/v2/'
};

const api = {
	posts: 'posts',
	pages: 'pages',
	menus: 'menus/2'
};

const state = {
	menu: {},
	posts: [],
	post: {},
	pages: [],
	loaded: false,
	slug: ''
};

const actions = {
	getAllPosts: function ({ commit }) {

		__WEBPACK_IMPORTED_MODULE_3__store_baseurl__["a" /* HTTP */].get(namespace.wp + api.posts).then(response => {

			commit('recieve_all_posts', response.data);

			return state.loaded = true;
		}), err => {
			console.log(err);
			return state.loaded = false;
		};
	},
	getAllPages: function ({ commit }) {

		__WEBPACK_IMPORTED_MODULE_3__store_baseurl__["a" /* HTTP */].get(namespace.wp + api.pages).then(response => {

			commit('recieve_all_pages', response.data);

			return state.loaded = true;
		}), err => {
			console.log(err);
			return state.loaded = false;
		};
	},
	getMenus: function ({ commit }) {

		__WEBPACK_IMPORTED_MODULE_3__store_baseurl__["a" /* HTTP */].get(namespace.menus + api.menus).then(response => {

			commit('recieve_all_menus', response.data);

			return state.loaded = true;
		}), err => {
			console.log(err);
			return state.loaded = false;
		};
	}
};

const mutations = {
	recieve_all_posts(state, posts) {
		state.posts = posts;
	},
	recieve_all_pages(state, pages) {
		state.pages = pages;
	},
	recieve_all_menus(state, menu) {
		state.menu = menu;
	},
	set_page_title(state, value) {
		state.title = value;

		document.title = state.title ? state.title : '';
	},
	set_slug(state, slug) {
		state.slug = slug;
	}
};

const getters = {
	allPosts(state) {
		return state.posts;
	},
	singlePost(state) {
		const post = state.posts.filter(function (e) {
			return e.slug === state.slug;
		});
		return post[0];
	},
	allPages(state) {
		return state.pages;
	},
	primaryMenu(state) {
		// Setup holder for new array.
		let tempArray = [];

		if (!state.menu.items) {
			return;
		}

		// Loop through menu items.
		state.menu.items.forEach(function (element) {

			// Replace slug if is home.
			if (element.object_slug === 'home') {
				element.object_slug = '';
			}

			// Throw items back into an array.
			return tempArray.push(element);
		});

		// Return array to local storage.
		return state.menu = tempArray;
	},
	singlePage(state) {
		const page = state.pages.filter(function (e) {
			return e.slug === state.slug;
		});
		return page[0];
	},
	loadState(state) {
		return state.loaded;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */].Store({
	state,
	actions,
	mutations,
	getters
}));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(39)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(50),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-172eaae2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (21:4)\n\n\u001b[0m \u001b[90m 19 | \u001b[39m  }\u001b[33m,\u001b[39m\n \u001b[90m 20 | \u001b[39m  methods\u001b[33m:\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 21 | \u001b[39m    \u001b[33m...\u001b[39mmapActions([\n \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 22 | \u001b[39m      \u001b[32m'getAllPosts'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 23 | \u001b[39m      \u001b[32m'getAllPages'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 24 | \u001b[39m    ])\u001b[33m,\u001b[39m\u001b[0m\n");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (30:6)\n\n\u001b[0m \u001b[90m 28 | \u001b[39m    }\u001b[33m,\u001b[39m\n \u001b[90m 29 | \u001b[39m    computed\u001b[33m:\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 30 | \u001b[39m      \u001b[33m...\u001b[39mmapGetters({\n \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 31 | \u001b[39m        post\u001b[33m:\u001b[39m \u001b[32m'singlePost'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 32 | \u001b[39m        loaded\u001b[33m:\u001b[39m \u001b[32m'loadState'\u001b[39m\n \u001b[90m 33 | \u001b[39m      })\u001b[0m\n");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (25:6)\n\n\u001b[0m \u001b[90m 23 | \u001b[39m    }\u001b[33m,\u001b[39m\n \u001b[90m 24 | \u001b[39m    computed\u001b[33m:\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 25 | \u001b[39m      \u001b[33m...\u001b[39mmapGetters({\n \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 26 | \u001b[39m        posts\u001b[33m:\u001b[39m \u001b[32m'allPosts'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 27 | \u001b[39m        loaded\u001b[33m:\u001b[39m \u001b[32m'loadState'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 28 | \u001b[39m      })\u001b[0m\n");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Posts__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Posts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Posts__);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Blog',
  components: {
    Posts: __WEBPACK_IMPORTED_MODULE_0__components_Posts___default.a
  }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Home',
  mounted() {
    this.setPageTitle();
  },
  methods: {
    setPageTitle: function () {
      const vm = this;

      vm.pageTitle = 'Vue.js Demo Site';
      vm.$store.commit('set_page_title', vm.pageTitle);
    }
  }
});

/***/ }),
/* 35 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (29:6)\n\n\u001b[0m \u001b[90m 27 | \u001b[39m    }\u001b[33m,\u001b[39m\n \u001b[90m 28 | \u001b[39m    computed\u001b[33m:\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 29 | \u001b[39m      \u001b[33m...\u001b[39mmapGetters({\n \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 30 | \u001b[39m        page\u001b[33m:\u001b[39m \u001b[32m'singlePage'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 31 | \u001b[39m        loaded\u001b[33m:\u001b[39m \u001b[32m'loadState'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 32 | \u001b[39m      })\u001b[0m\n");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Post__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Post___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Post__);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Single',
  components: {
    Post: __WEBPACK_IMPORTED_MODULE_0__components_Post___default.a
  }
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_store__ = __webpack_require__(11);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




// vuex


__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store_store__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


const HTTP = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseURL: 'https://vue-app.jomurgel.com/server/'
});
/* harmony export (immutable) */ __webpack_exports__["a"] = HTTP;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(52),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(54),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(48),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(34),
  /* template */
  __webpack_require__(49),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(51),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(36),
  /* template */
  __webpack_require__(53),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Posts')], 1)
},staticRenderFns: []}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('h1', [_vm._v("The \"Home\" component has been mounted.")])])
}]}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('Navigation')], 1)
},staticRenderFns: []}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.page) ? _c('div', [(_vm.page.title) ? _c('h1', [_vm._v("\n    " + _vm._s(_vm.page.title.rendered) + "\n  ")]) : _vm._e(), _vm._v(" "), (_vm.page.content) ? _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.page.content.rendered)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.page.acf !== false) ? _c('div', [_vm._v("\n    " + _vm._s(_vm.page.acf.services) + "\n  ")]) : _vm._e()]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.post) ? _c('div', [(_vm.post.title) ? _c('h1', [_vm._v("\n    " + _vm._s(_vm.post.title.rendered) + "\n  ")]) : _vm._e(), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.post.content.rendered)
    }
  }), _vm._v(" "), (_vm.post.acf) ? _c('div', [_c('h2', [_vm._v("ACF Fields")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.post.acf.image.sizes.thumbnail
    }
  })]) : _vm._e()]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Post', {
    attrs: {
      "postSlug": _vm.$route.params.slug
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.loaded === true) ? _c('div', [(_vm.posts.length) ? _c('ul', _vm._l((_vm.posts), function(post) {
    return _c('li', {
      key: post
    }, [_c('h2', [_c('router-link', {
      attrs: {
        "to": _vm.$route.path + '/' + post.slug
      }
    }, [_vm._v("\n          " + _vm._s(post.title.rendered) + "\n        ")])], 1), _vm._v(" "), _c('div', {
      domProps: {
        "innerHTML": _vm._s(post.content.rendered)
      }
    })])
  })) : _vm._e()]) : _vm._e()
},staticRenderFns: []}

/***/ })
],[37]);
//# sourceMappingURL=app.580426b3acd5b0f72504.js.map