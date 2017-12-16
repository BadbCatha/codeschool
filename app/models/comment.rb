class Comment < ApplicationRecord
  belongs_to :article

  validates :commenter, presence: true
  validates :commenter, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  validates :body, presence: true, length:{in: 6..500}
end
