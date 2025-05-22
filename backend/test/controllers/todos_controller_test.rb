require "test_helper"

class TodosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @todo = todos(:one)
  end

  test "should get index" do
    get api_todos_url, as: :json
    assert_response :success
  end

  test "should create todo" do
    assert_difference("Todo.count") do
      post api_todos_url, params: { todo: { completed: @todo.completed, todo_name: @todo.todo_name } }, as: :json
    end

    assert_response :created
  end

  test "should show todo" do
    get api_todo_url(@todo), as: :json
    assert_response :success
  end

  test "should update todo" do
    patch update_completed_api_todo_url(@todo), params: { todo: { completed: @todo.completed, todo_name: @todo.todo_name } }, as: :json
    assert_response :success
  end

  test "should destroy todo" do
    assert_difference("Todo.count", -1) do
      delete api_todo_url(@todo), as: :json
    end

    assert_response :no_content
  end
end
