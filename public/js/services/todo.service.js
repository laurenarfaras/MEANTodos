(function() {
  angular.module("MEANTodos")
    .factory("TodoService", TodoService);

  TodoService.$inject = ["$http"];  //$http == axios

  function TodoService($http){
    var baseURL = "/todos";

    function getAll(){
      return $http.get(baseURL);
    }

    function create(newTodo){
      return $http.post(baseURL, newTodo);
    }

    function deleteTodo(newTodo){
      return $http.delete(`${baseURL}/${newTodo._id}`);
    }

    function update(todo){
      return $http.put(`${baseURL}/${todo._id}`, todo);
    }

    return{
      getAll: getAll,
      create: create,
      delete: deleteTodo,
      update: update
    };
  }
}());
