class AuctionsSerializer < ActiveModel::Serializer
  attributes :id, :title,:details

  belongs_to :user
  has_many :bids
end
