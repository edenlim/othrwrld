class Relationship < ApplicationRecord
  belongs_to :follower, foreign_key: :character1, class_name: 'Character'
  belongs_to :following, foreign_key: :character2, class_name: 'Character'
end