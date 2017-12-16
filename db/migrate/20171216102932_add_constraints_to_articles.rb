class AddConstraintsToArticles < ActiveRecord::Migration[5.1]
  def change
  	change_column_null(:articles, :title, false)
  	change_column_null(:articles, :text, false)
  end
end
