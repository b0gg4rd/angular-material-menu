(function() {
  'use strict'

  angular
    .module('MaterialMenu.Commons')
    .service('MenuModel', MenuModel)

  MenuModel.$inject = [
    '$q'
  ]

  function MenuModel($q) {

    let openedSection = undefined
    let currentPage   = undefined

    let sections = [
      {
        key    : 100,
        name   : 'Facturas',
        type   : 'toggle',
        active : true,
        pages  : [
          {
            key    : 101,
            name   : 'Alta',
            type   : 'link',
            active : true,
            url    : 'invoice-register',
            icon   : 'ic_storage'
          },
          {
            key    : 102,
            name   : 'Histórico',
            type   : 'link',
            active : true,
            url    : 'invoice-historic',
            icon   : 'person'
          }
        ]
      },
      {
        key    : 200,
        name   : 'Personas',
        type   : 'link',
        active : true,
        url    : 'person',
        icon   : 'person'
      },
      {
        key    : 300,
        name   : 'Productos',
        type   : 'toggle',
        active : true,
        pages  : [
          {
            key    : 301,
            name   : 'Nacionales',
            type   : 'link',
            url    : 'product-national',
            active : true,
            icon   : 'ic_storage'
          },
          {
            key    : 302,
            name   : 'Internacionales',
            type   : 'link',
            url    : 'product-international',
            active : true,
            icon   : 'ic_storage'
          },
          {
            key    : 303,
            name   : 'Locales',
            type   : 'link',
            url    : 'product-local',
            active : false,
            icon   : 'ic_storage'
          }
        ]
      }
    ]

    this.requestAll = () => {
      return $q.when(sections)
    }

    this.isSectionSelected = (section) => {
      return openedSection === section
    }

    this.toggleSelectSection = (section) => {
      openedSection = this.isSectionSelected(section) ? undefined : section
    }

    this.selectSection = (section) => {
      openedSection = section
    }

    this.isPageSelected = (page) => {
      currentPage === page
    }

    /*
    return {
      requestAll : () => {
        return $q.when(sections)
      }
    }
    */

  }

})()

