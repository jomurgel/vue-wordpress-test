import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP} from '@/store/baseurl'
import router from '@/router'

Vue.use(Vuex)

const jsonLocate = 'wp-json';

const namespace = {
	wp: jsonLocate + '/wp/v2/',
	menus: jsonLocate + '/wp-api-menus/v2/'
}

const api = {
	posts: 'posts',
	pages: 'pages',
	menus: 'menus/2'
}

const state = {
	menu: {},
	posts: [],
	post: {},
	pages:  [],
	loaded: false,
	slug: '',
}

const actions = {
	getAllPosts: function( {commit} ) {

		HTTP.get( namespace.wp + api.posts )
			.then( response => {

				commit( 'recieve_all_posts', response.data )

				return state.loaded = true
			}), ( err ) => {
				console.log( err )
				return state.loaded = false
			}
	},
	getAllPages: function( {commit} ) {

		HTTP.get( namespace.wp + api.pages )
			.then( response => {

				commit( 'recieve_all_pages', response.data )

				return state.loaded = true
			}), ( err ) => {
				console.log( err )
				return state.loaded = false
			}
	},
	getMenus: function( {commit} ) {

		HTTP.get( namespace.menus + api.menus )
			.then( response => {

				commit( 'recieve_all_menus', response.data )

				return state.loaded = true
			}), ( err ) => {
				console.log( err )
				return state.loaded = false
			}
	}
}

const mutations = {
	recieve_all_posts( state, posts ) {
		state.posts = posts
	},
  	recieve_all_pages( state, pages ) {
		state.pages = pages
	},
	recieve_all_menus( state, menu ) {
		state.menu = menu
	},
	set_page_title( state, value ) {
		state.title = value

		document.title = ( state.title ? state.title : '' )
	},
	set_slug( state, slug ) {
		state.slug = slug
	},
}

const getters = {
	allPosts( state ) {
		return state.posts
	},
	singlePost( state ) {
		const post = state.posts.filter( function( e ) {
			return e.slug === state.slug
		})
		return post[0]
	},
	allPages( state ) {
		return state.pages
	},
	primaryMenu( state ) {
		// Setup holder for new array.
		let tempArray = []

		if ( ! state.menu.items ) {
			return
		}

		// Loop through menu items.
		state.menu.items.forEach( function( element ) {

			// Replace slug if is home.
			if ( element.object_slug === 'home' ) {
			element.object_slug = ''
			}

			// Throw items back into an array.
			return tempArray.push( element )
		});

		// Return array to local storage.
		return state.menu = tempArray
	},
	singlePage( state ) {
		const page = state.pages.filter( function( e ) {
			return e.slug === state.slug
		})
		return page[0]
	},
	loadState( state ) {
		return state.loaded
	},
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters,
})
