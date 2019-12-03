class DropQualityUser < ActiveRecord::Migration[6.0]
  def change
    remove_column :characters, :qualities
  end
end