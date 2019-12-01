class CharactersStories < ActiveRecord::Migration[6.0]
  def change
    create_table :characters_stories do |t|
      t.references :character
      t.references :story
      t.integer :importance
      t.string :notes

      t.timestamps
    end
  end
end