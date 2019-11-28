class StoriesSequence < ApplicationRecord
  belongs_to :story
  has_many :sequence_note
end