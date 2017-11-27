class Bid < ApplicationRecord
  belongs_to :auction, dependent: :destroy
  belongs_to :user, dependent: :destroy

  validate :price_cannot_be_less_than_reserve

def price_cannot_be_less_than_reserve
  if price.present? && price < auction.reserve_price
    errors.add(:price, 'cannot be less than reseserve')
  end
end

end
