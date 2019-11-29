class Universe < ApplicationRecord
  has_many :story
  has_many :universe_note
  belongs_to :user
end