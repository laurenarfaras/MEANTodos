(function() {
  angular.module("MEANTodos")
    .controller("TodoController", TodoController);

  TodoController.$inject = ["$scope", "TodoService"];

  function TodoController($scope, TodoService){
    $scope.todos = [];
    $scope.newTodo = {};
    $scope.addTodo = addTodo;
    $scope.deleteTodo = deleteTodo;
    $scope.update = update;
    $scope.edit = edit;
    $scope.autocheck = true;

    getTodos();

    $scope.$watch(function watcher(){
      return TodoService.fetch();
    },
    function onChange(){
      $scope.todos = TodoService.fetch();
    });

    function addTodo(todo){
      TodoService.create(todo)
                  .then(function(response){
                    $scope.newTodo = {};
                  });
    }

    function deleteTodo(todo) {
      TodoService.delete(todo);
    }

    function update(todo) {
      console.log("updating");
      todo.edit = false;
      TodoService.update(todo);
    }

    function edit(todo) {
      console.log("editing");
      todo.edit = true;
    }

    function getTodos() {
      console.log("getting the todos");
      TodoService.getAll();
    }
  }
}());
