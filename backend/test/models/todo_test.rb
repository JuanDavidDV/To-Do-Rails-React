require "test_helper"

class TodoTest < ActiveSupport::TestCase
  setup do
    @todo = todos(:one)
  end

  test "should not save todo without a name" do
    todo = Todo.create
    assert_not todo.save, "Cannot save the to do task without a title"
  end

  test "should save todo with name" do
    todo = Todo.create(todo_name: "Test 1")
    assert todo.save, "Saved to do task"
  end

  test "should not be valid without a name" do
    @todo.todo_name = ""
    assert_not @todo.valid?
  end

  test "should be valid with a name" do
    assert @todo.valid?
  end
end
