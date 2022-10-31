Rails.application.routes.draw do
  resources :blogs
  root "static#home"
end
