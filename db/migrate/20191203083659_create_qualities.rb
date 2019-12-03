class CreateQualities < ActiveRecord::Migration[6.0]
  def change
    create_table :qualities do |t|
      t.string :quality
      t.string :value
      t.references :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end