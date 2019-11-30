class Character < ApplicationRecord
  has_and_belongs_to_many :story
  belongs_to :user

  has_many :relationships

  has_many :follower_relationships, foreign_key: :character2, class_name: 'Relationship'
  has_many :followers, through: :follower_relationships, source: :follower

  has_many :following_relationships, foreign_key: :character_id, class_name: 'Relationship'
  has_many :following, through: :following_relationships, source: :following

  def characterRelationship
    @relationship = Relationship.where('character_id = ? or character2 = ?', self.id, self.id)

    relationHash = {}

    @relationship.each do |relation|
      @character = Character.where(id: relation.character_id)[0]

      charName = @character.name.to_s
      if charName == self.name
        @character = Character.where(id: relation.character2)[0]
        @relation = Relationship.where(character2: @character.id)[0]
        charName = @character.name.to_s
        relationHash[charName] = @relation
      elsif charName != self.name
        @relation = Relationship.where(character_id: @character.id)[0]
        relationHash[charName] = @relation
      end
    end
    return relationHash
  end
end