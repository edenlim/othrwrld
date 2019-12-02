Rails.application.routes.draw do
  devise_for :users
  resources :stories
  resources :characters

  # get '/universes' => 'universes#index', as: 'universes'
  resources :universes
  get '/characters/:id/addRelation' => 'characters#addRelation', as: 'add_relation'
  post '/characters/:id' => 'characters#createRelation', as: 'create_Relation'
  delete '/characters/deleteAffiliation/:id' => 'characters#destroyRelation'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'homes#index'
  get '/test' => 'characters#testJSON'
end