(function(){    //iife tab is shortcut
  angular.module('MEANTodos') //getter syntax
  .controller("TodoController", TodoController);

  TodoController.$inject = ["$scope", "TodoService"];

  function TodoController($scope, TodoService){
    $scope.todos = [];
    $scope.newTodo = {};
    $scope.addTodo = addTodo;
    $scope.deleteTodo = deleteTodo;

    getTodos();

    function addTodo(newTodo){
      TodoService.create(newTodo)
                .then(function(response){
                  getTodos();
                  $scope.newTodo = {};
                });
    }

    function getTodos(){
      TodoService.getAll()
                .then(function(response){
                  $scope.todos = response.data.todos;
                });
    }

    function deleteTodo(todo) {
      // console.log(todo);     // returns the todo object
      // console.log(todo._id); // returns the id of the specific todo object
      TodoService.delete(todo)
                .then(function(response){
                  getTodos();
                  // console.log(response);
                });
    }

  }
})();
