class HomesController < ApplicationController
  def index
    if user_signed_in?
      render 'home.html.erb'
    else
      render 'preLogin.html.erb'
    end
  end
end