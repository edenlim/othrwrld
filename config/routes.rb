Rails.application.routes.draw do
  devise_for :users
  resources :stories
  resources :characters

  # get '/universes' => 'universes#index', as: 'universes'
  resources :universes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'homes#index'
  get '/test' => 'characters#testJSON'
end