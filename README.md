# vue-wordpress-test
A Vue.js test using the WordPress REST API and custom endpoints to render content.

## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

Replace URL in `src/store/baseurl.js`  with the root of your WordPress install.

## Plugins Used and Activated
- [ACF | Advanced Custom Fields Plugin for WordPress](https://www.advancedcustomfields.com/)
ACF Export json `acf-export-2017-09-25.json` included in the support folder.

- [WP-REST-API V2 Menus — WordPress Plugins](https://wordpress.org/plugins/wp-rest-api-v2-menus/)
- [ACF to REST API — WordPress Plugins](https://wordpress.org/plugins/acf-to-rest-api/)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
