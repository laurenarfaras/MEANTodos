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

    return{
      getAll: getAll,
      create: create
    };
  }
}());
