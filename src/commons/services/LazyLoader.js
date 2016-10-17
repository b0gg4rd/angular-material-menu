(function() {
  'use strict'

  angular
    .module('MaterialMenu.Commons')
    .provider('LazyLoader', LazyLoader)

  function LazyLoader() {
    return {
      add: (resources) => {
        return ['$q', ($q) => {
          let deferred = $q.defer()

          $script(resources, () => {
            deferred.resolve()
          })

          return deferred.promise
        }]
      },
      $get: () => {
      }
    }
  }
})()

