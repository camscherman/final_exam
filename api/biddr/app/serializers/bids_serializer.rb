class BidsSerializer < ActiveModel::Serializer
  attributes :id, :price, :user, :auction

  belongs_to :auction
  belongs_to :user
end
