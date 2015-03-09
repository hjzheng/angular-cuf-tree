/**
 * Created by hjzheng on 2015/3/4.
 */
angular.module("test", ["cuf.tree"]).controller("testCtrl", function ($scope) {
    $scope.click = function (label) {
        console.log(label);
    }
});