(function() {
  'use strict'

  angular
    .module('MaterialMenu.Commons')
    .directive('menuLink', MenuLink)

  MenuLink.$inject = []

  function MenuLink() {
    return {
      scope : {
        section : '='
      },
      templateUrl : 'commons/directives/menu/menu-link.html',
      link : (scope, element) => {
        let controller = element.parent().controller()

        scope.isSelected = () => {
          return controller.isSelected(scope.section)
        }

        scope.focusSection = () => {
          controller.autoFocusContent = true
          controller.toggleSidenav()
        }
      }
    }
  }

})()

