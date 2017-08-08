Rails.application.routes.draw do

  resources :categories
  resources :posts

  # root 'home#index'
  root 'home#index'

  get 'portfolio' => 'home#portfolio'

  get 'manage' => 'posts#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
