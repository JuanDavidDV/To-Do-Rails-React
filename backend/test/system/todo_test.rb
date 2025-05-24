require "application_system_test_case"

class TodoTest < ApplicationSystemTestCase
  setup do
    
  end

  test "should get main page" do
    visit api_todos_url
    assert_text "Todo List App"
  end
end
