Rails.application.routes.draw do
  devise_for :users
  resources :stories
  resources :character_characters
  resources :characters
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'homes#index'
end