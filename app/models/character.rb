class Character < ApplicationRecord
  has_and_belongs_to_many :story
  belongs_to :user

  has_many :follower_relationships, foreign_key: :character2, class_name: 'Relationship'
  has_many :followers, through: :follower_relationships, source: :follower

  has_many :following_relationships, foreign_key: :character1, class_name: 'Relationship'
  has_many :following, through: :following_relationships, source: :following
end