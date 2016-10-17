(function() {
  'use strict'

  angular
    .module('MaterialMenu.Commons')
    .directive('menuToggle', MenuToggle)

  MenuToggle.$inject = [
    '$mdUtil',
    '$animateCss',
    '$$rAF'
  ]

  function MenuToggle($mdUtil, $animateCss, $$rAF) {
    return {
      scope : {
        section : '='
      },
      templateUrl : 'commons/directives/menu/menu-toggle.html',
      link : (scope, element) => {
        let controller = element.parent().controller()

        scope.renderContent = false

        scope.isOpen = () => {
          return controller.isOpen(scope.section)
        }

        scope.toggle = () => {
          controller.toggleOpen(scope.section)
        }

        $mdUtil.nextTick(() => {
          scope.$watch(() => {
            return controller.isOpen(scope.section)
          }, (open) => {
            let $ul = element.find('ul')
            let $li = $ul[0].querySelector('a.active')

            if (open) {
              scope.renderContent = true
            }

            $$rAF(() => {
              let targetHeight = open ? $ul[0].scrollHeight : 0

              $animateCss($ul, {
                easing   : 'cubic-bezier(0.35, 0, 0.25, 1)',
                to       : { height: targetHeight + 'px' },
                duration : 0.75 // seconds
              }).start().then(() => {
                let $li = $ul[0].querySelector('a.active')

                scope.renderContent = open

                if (open && $li && $ul[0].scrollTop === 0) {
                  let activeHeight = $li.scrollHeight
                  let activeOffset = $li.offsetTop
                  let parentOffset = $li.offsetParent.offsetTop
                  let negativeOffset = activeHeight * 2
                  let newScrollTop = activeOffset + parentOffset - negativeOffset

                  $mdUtil.animateScrollTo(document.querySelector('.site-menu').parentNode, newScrollTop)
                }
              })
            })
          })
        })
      }
    }
  }

})()

