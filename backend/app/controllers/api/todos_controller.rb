class Api::TodosController < ApplicationController  # Api:: is added because of the namespace
  before_action :set_todo, only: %i[ show update_completed destroy ]

  # GET /api/todos
  def index
    @todos = Todo.order(created_at: :desc)

    render json: @todos
  end

  # GET /api/todos/1
  def show
    render json: @todo
  end

  # POST /api/todos
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo, status: :created
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/todos/1/update_completed
  def update_completed
    if @todo.update(completed: params[:completed])
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/todos/1
  def destroy
    @todo.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def todo_params
      params.expect(todo: [ :todo_name, :completed ])
    end
end
