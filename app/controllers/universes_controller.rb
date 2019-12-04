class UniversesController < ApplicationController
  before_action :authenticate_user!
  def index
    @universes = Universe.where(user_id: current_user.id)
  end

  def show
    @universe = Universe.find(params[:id])

  end

  def new
    @universe = Universe.new
    @user_id = current_user.id
  end

  def edit
    @universe = Universe.find(params[:id])
  end

  def create
    @universe = Universe.new(universe_params.merge(user_id: current_user.id))
    @universe.save
    redirect_to universes_path
  end

  def update
    @universe = Universe.find(params[:id])
    @universe.update(universe_params)
    redirect_to universes_path
  end

  def destroy
    @universe = Universe.find(params[:id])
    @universe.destroy
    respond_to do |format|
      format.html { redirect_to universes_url, notice: 'Universe was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def universe_params
      params.require(:universe).permit(:name, :description)
    end
end