(function() {
  'use strict'

  angular
    .module('MaterialMenu')
    .config(MaterialMenuRoutes)

  MaterialMenuRoutes.$inject = [
    '$urlRouterProvider',
    '$stateProvider',
    'LazyLoaderProvider'
  ]

  /* Application level routes for Angular UI Router */
  function MaterialMenuRoutes($urlRouterProvider, $stateProvider, LazyLoaderProvider) {

    $urlRouterProvider.otherwise('/')

  }
})()

