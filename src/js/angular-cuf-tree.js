/**
* cuf Module
*
* Description
*/
angular.module('cuf', ['cuf-tree-template']).directive('cufTree', function($window){
  // Runs during compile
  return {
    scope: {
      showButtons: '@'
    },
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'template/cufTree.html',
    replace: true,
    transclude: true,
    controllerAs: 'cufTreeCtrl',
    controller: function($scope, $element, $attrs, $transclude){
        var items = [];
        
        this.addItem = function(item) {
           items.push(item);
        };

        $scope.collapseAll = function(){
          angular.forEach(items, function(item){
            item.show = false;
          });
        }

        $scope.expandAll = function(){
          angular.forEach(items, function(item){
            item.show = true;
          });
        }
    }
  };
}).directive('cufTreeItem', function(){
  // Runs during compile
  return {
    require: '^cufTree',
    scope: {
      label: '@',
      href: '@',
      hasChildren: '@',
      show: '@'
    },
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'template/cufTreeItem.html',
    replace: true,
    transclude: true,
    controllerAs: 'cufTreeItem',
    controller: function($scope, $element, $attrs, $transclude){
    
    },
    link: function($scope, iElm, iAttrs, cufTreeCtrl) {
       
       cufTreeCtrl.addItem($scope);

       $scope.clickToggle = function(){
         $scope.show = ($scope.show == true ? false: true); 
       }
    }
  };
});