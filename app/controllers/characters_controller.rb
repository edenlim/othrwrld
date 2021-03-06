class CharactersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_character, only: [:show, :edit, :update, :destroy]

  def testJSON
    @@data = File.read("#{Rails.root}/app/javascript/packs/d3Graph/test.json")
    render :json => @@data
  end

  # GET /characters
  # GET /characters.json
  def index
    @user_id = current_user.id
    @characters = Character.where(user_id: @user_id)
    @relationship = Relationship.all
    # render plain: current_user.id
    # render :layout => false
  end

  # GET /characters/1
  # GET /characters/1.json
  def show
    @characters = @character.characterRelationship


    @character_id = params[:id]

    # render plain: @relationships.inspect
    @qualities = @character.quality

    respond_to do |format|
      format.json {
          render :json => @character,
          include: :user
      }

      format.html
    end
  end

  # GET /characters/new
  def new
    @character = Character.new
  end

  # GET /characters/1/edit
  def edit
    @user_id = current_user.id
    @stories = Story.where(user_id: @user_id)
    # render plain: @stories.inspect

    # @stories = Story.all
    # @relationship = CharactersStory.where(:character)
    @character = Character.find(params[:id])
  end

  # POST /characters
  # POST /characters.json
  def create
    @character = Character.new(character_params.merge(user_id: current_user.id))

    respond_to do |format|
      if @character.save
        format.html { redirect_to @character, notice: 'Character was successfully created.' }
        format.json { render :show, status: :created, location: @character }
      else
        format.html { render :new }
        format.json { render json: @character.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /characters/1
  # PATCH/PUT /characters/1.json
  def update

    @character = Character.find(params[:id])
    @character.update(character_params)
    redirect_to characters_path
  end

  # DELETE /characters/1
  # DELETE /characters/1.json
  def destroy
    @character = Character.find(params[:id])
    @exist = Relationship.where(character_id: params[:id]).or(Relationship.where(character2: params[:id]))
    # @data = @character.merge(@exist)
    # render plain: @exist.inspect
    Quality.where(character_id: params[:id]).delete_all
    @character.destroy


    Relationship.where(id: @exist.map(&:id)).delete_all
    redirect_to characters_path

    # respond_to do |format|
    #   format.html { redirect_to characters_url, notice: 'Character was successfully destroyed.' }
    #   format.json { head :no_content }
    # end
  end

  def addRelation
    @character = Character.find(params[:id])
    @notRelated = @character.notRelated
  end

  def createRelation
    @character = Character.find(params[:id])
    @relation_params = relation_params.merge(character2: @character.id, user_id: current_user.id)
    @newRelation = Relationship.new(@relation_params)
    respond_to do |format|
      if @newRelation.save
        format.html { redirect_to @character, notice: 'Character was successfully created.' }
        format.json { render :show, status: :created, location: @character }
      else
        format.html { render :new }
        format.json { render json: @character.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroyRelation
    @relationship = Relationship.find(params[:id])
    @relationship.destroy
    redirect_to characters_path
  end

  def d3json
    @user_id = current_user.id
    @characters = Character.where(user_id: @user_id)
    @relationships = Relationship.where(user_id: @user_id)
    @data = {}
    @data[:nodes] = @characters.select(:id,:name)
    @data[:links] = @relationships
    render json: @data

  end

  def editQualities
    @quality = Quality.find(params[:qualityid])
  end

  def updateQualities
    @quality = Quality.find(params[:qualityid])
    @id = params[:characterid]
    @quality.update(quality_params)
    redirect_to "/characters/#{@id}"
  end

  def addQuality
    @character_id = params[:id]
  end

  def postQuality
    @character_id = params[:id]
    @data = quality_params.merge(:character_id => @character_id)
    @quality = Quality.new(@data)
    respond_to do |format|
      if @quality.save
        format.html { redirect_to "/characters/#{@character_id}", notice: 'Quality was successfully created.' }
        format.json { render :show, status: :created, location: @character }
      else
        format.html { render :new }
        format.json { render json: @character.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroyQuality
    @quality_id = params[:qualityid]
    @id = params[:characterid]
    @quality = Quality.find(@quality_id)
    @quality.destroy
    redirect_to "/characters/#{@id}"
    # render plain: @quality.inspect
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def character_params
      params.require(:character).permit(:name, :story_ids => [])
    end

    def relation_params
      params.require(:character).permit(:character_id,:affiliation)
    end

    def quality_params
      params.require(:quality).permit(:quality,:value)
    end
end