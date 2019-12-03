require 'set'

class Character < ApplicationRecord
  has_and_belongs_to_many :story
  belongs_to :user

  has_many :relationships


  has_many :follower_relationships, foreign_key: :character2, class_name: 'Relationship'
  has_many :followers, through: :follower_relationships, source: :follower


  has_many :following_relationships, foreign_key: :character_id, class_name: 'Relationship'
  has_many :following, through: :following_relationships, source: :following

  has_many :quality

  def characterRelationship
    @relationship = Relationship.where('character_id = ? or character2 = ?', self.id, self.id)

    relationHash = {}

    @relationship.each do |relation|
      @character = Character.where(id: relation.character_id)[0]

      charName = @character.name.to_s
      if charName == self.name
        @character = Character.where(id: relation.character2)[0]
        if @character != nil
          @relation = relation
          charName = @character.name.to_s
          relationHash[charName] = @relation
        end
      elsif charName != self.name
        if @character != nil
          @relation = relation
          relationHash[charName] = @relation
        end
      end
    end
    return relationHash
  end

  def notRelated
    @relationship = characterRelationship.keys
    @allCharacters = Character.where.not(id: self.id)
    @notRelated = @allCharacters.select do |x|
      !@relationship.include?(x.name)
    end
    return @notRelated
  end

  def destroyRelation
    @exist = Relationship.where(character_id: self.id).or(Relationship.where(character2: self.id))
  end

end