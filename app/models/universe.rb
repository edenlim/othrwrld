class Universe < ApplicationRecord
  has_many :story, dependent: :destroy
  has_many :universe_note,  dependent: :destroy
  belongs_to :user
end