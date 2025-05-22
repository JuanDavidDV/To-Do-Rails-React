Rails.application.routes.draw do
  namespace :api do   # namespace makes: /api/todos
    resources :todos do # setup endpoints for todos within /api
      member do # Used because update_completed is not inside the scaffold. Path will look like: /api/todos/:id/update_completed
        patch "update_completed"
      end
    end 
  end
end
