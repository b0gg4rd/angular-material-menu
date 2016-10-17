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

    $stateProvider
      .state('invoice-register', {
        url         : '/invoice/register',
        templateUrl : 'invoice/register.html'
      })

    $stateProvider
      .state('invoice-historic', {
        url         : '/invoice/historic',
        templateUrl : 'invoice/historic.html'
      })

    $stateProvider
      .state('person', {
        url         : '/person',
        templateUrl : 'person/main.html'
      })

    $stateProvider
      .state('product-national', {
        url         : '/product/national',
        templateUrl : 'product/national.html'
      })

    $stateProvider
      .state('product-international', {
        url         : '/product/international',
        templateUrl : 'product/international.html'
      })

    $stateProvider
      .state('product-local', {
        url         : '/product/local',
        templateUrl : 'product/local.html'
      })
  }
})()

