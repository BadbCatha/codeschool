class EmailValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    record.errors.add attribute, (options[:message] || "is not an email") unless
      value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  end
end

class Person
  include ActiveModel::Validations
  attr_accessor :name, :email

  validates :name, presence: true, uniqueness: true, length: { maximum: 100 }
  validates :email, presence: true, email: true
end