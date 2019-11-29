class HomesController < ApplicationController
  def index
    if user_signed_in?
      @user_id = current_user.id
      @name = User.where(id: @user_id)[0]
      # render plain: @name.inspect
      render 'home.html.erb'
    else
      render 'preLogin.html.erb'
    end
  end
end