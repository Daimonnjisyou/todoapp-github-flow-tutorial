$("#addTodo").click(function () {
  const inputTodo = $("#input").val();
  $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");
  $("#inputTodo").val("");
});
