(function() {
  'use strict'

  angular
    .module('MaterialMenu')
    .config(MaterialMenuConfig)

  MaterialMenuConfig.$inject = [
    '$mdThemingProvider'
  ]

  /* Application level configuration */
  function MaterialMenuConfig($mdThemingProvider) {
    let primaryMenuPalette = $mdThemingProvider.extendPalette('blue', {
      '500' : '#185694'
    })

    let accentMenuPalette = $mdThemingProvider.extendPalette('blue', {
      '500' : '#106cc8'
    })

    $mdThemingProvider.definePalette('primaryMenu', primaryMenuPalette)
    $mdThemingProvider.definePalette('accentMenu', accentMenuPalette)

    $mdThemingProvider
      .theme('default')
      .primaryPalette('primaryMenu')
      .accentPalette('accentMenu')
  }
})()

