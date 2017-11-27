class Bid < ApplicationRecord
  belongs_to :auction, dependent: :destroy
  belongs_to :user, dependent: :destroy

  validate :price_cannot_be_less_than_reserve
  validate :user_cannot_bid_on_own_items

def price_cannot_be_less_than_reserve
  if price.present? && price < auction.reserve_price
    errors.add(:price, 'cannot be less than reseserve')
  end
end

def user_cannot_bid_on_own_items
  if user == auction.user
    errors.add(:user, 'cannot bid on their own items')
  end
end

end
