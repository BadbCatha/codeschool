class Like < ApplicationRecord

  belongs_to :article
  belongs_to :user

  validates :user, uniqueness: { scope: :article,  message: "you already like it!" }
  
end

