class Article < ApplicationRecord
	has_many :comments, dependent: :destroy
	has_many :likes
	belongs_to :author, class_name: "User"
	validates :title, presence: true, length:{minimum: 3}


	 mount_uploader :banner, BannerUploader

	def tags=(value)

		value = sanitize_tags(value)if value.is_a?(String)

		super(value)	
	end

	private
	def sanitize_tags(value)
		value.downcase.split.uniq
	end

end
