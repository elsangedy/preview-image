var app = angular.module('app', []);

//---

app.controller('MainCtrl', function($scope) {
  $scope.preview = undefined;

  $scope.select = function(element) {
    var reader = new FileReader();
    reader.readAsDataURL(element.files[0]);
    reader.onload = function(e) {
      $scope.$apply(function() {
        $scope.preview = e.target.result;
      });
    };
  };
});

//---

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});
