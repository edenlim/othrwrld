class Story < ApplicationRecord
  has_and_belongs_to_many :character
  has_many :story
end