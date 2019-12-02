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
    @characters = Character.all
    @relationship = Relationship.all
    # render plain: @relationship.inspect
  end

  # GET /characters/1
  # GET /characters/1.json
  def show
    @characters = @character.characterRelationship



    # render plain: @characters["Jane Hutton"].affiliation

    @character_id = params[:id]

    # render plain: @relationships.inspect
    @qualities = JSON.parse(@character.qualities)

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
    @stories = Story.all
    @character = Character.find(params[:id])
  end

  # POST /characters
  # POST /characters.json
  def create
    @character = Character.new(character_params.merge(user_id: current_user.id, qualities: '{}'))

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
    # render plain: character_params
    @character = Character.find(params[:id])
    @character.update(character_params)
    redirect_to characters_path
  end

  # DELETE /characters/1
  # DELETE /characters/1.json
  def destroy
    @character = Character.find(params[:id])
    @character.destroy
    redirect_to characters_path
    # render plain: @character.inspect

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
    @relation_params = relation_params.merge(character2: @character.id)
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
    @characters = Character.all
    @relationships = Relationship.all
    @data = {}
    @data[:nodes] = @characters.select(:id,:name)
    @data[:links] = @relationships
    render json: @data

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
end