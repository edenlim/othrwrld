class Story < ApplicationRecord
  has_and_belongs_to_many :character
  has_many :stories_sequence
  has_many :stories_note
  belongs_to :universe
  belongs_to :user
end