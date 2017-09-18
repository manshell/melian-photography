Rails.application.routes.draw do

  devise_for :users
  resources :categories
  resources :posts

  # root 'home#index'
  root 'home#index'

  get 'portfolio' => 'home#portfolio'

  get 'categorical' => 'home#portfolio_by_category'

  get 'manage' => 'posts#index'

  get 'manage_categories' => 'categories#index'


  devise_scope :user do
    get 'admin', to: 'devise/sessions#new'
  end

  # get 'cat_one' => 'home#cat_one'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
