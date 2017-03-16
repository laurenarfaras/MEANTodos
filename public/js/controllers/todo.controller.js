(function(){    //iife tab is shortcut
  angular.module('MEANTodos') //getter syntax
  .controller("TodoController", TodoController);

  TodoController.$inject = ["$scope"];

  function TodoController($scope){
    $scope.message = "I WORK!";
    $scope.greeting ='Hello';
    $scope.print = print;

    function print(something){
      console.log(something);
    }
  }
})()
