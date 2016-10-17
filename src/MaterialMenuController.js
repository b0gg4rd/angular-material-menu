(function() {
  'use strict'

  angular
    .module('MaterialMenu')
    .controller('MaterialMenuController', MaterialMenuController)

  MaterialMenuController.$inject = [
    '$mdSidenav',
    '$log',
    'MenuModel'
  ]

  /* Application level controller */
  function MaterialMenuController($mdSidenav, $log, MenuModel) {

    $log.debug('MaterialMenuController up and running...')

    this.menu = []

    let autoFocusContent = false

    MenuModel
      .requestAll()
        .then((sections) => {
          $log.debug('return sections : ')
          $log.debug(sections)
          this.menu = [].concat(sections)
        })

    this.toggleSidenav = () => {
      $mdSidenav('left').toggle();
    }

    /* Functions for menu */
    this.isOpen = (section) => {
      return MenuModel.isSectionSelected(section)
    }

    this.toggleOpen = (section) => {
      MenuModel.toggleSelectSection(section)
    }

    this.isSelected = (section) => {
    }

  }

})()

