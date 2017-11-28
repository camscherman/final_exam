Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :auctions, only: [:create, :update, :index, :destroy, :show] do
        resources :bids, shallow: true, only: [:create, :destroy]
      end
      resources :tokens, only: [:create]
    end
  end
end
