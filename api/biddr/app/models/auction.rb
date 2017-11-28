class Auction < ApplicationRecord
  validates :title, presence: :true
  validates :end_time, presence: :true
  validate :end_time_cannot_be_in_the_past

  def end_time_cannot_be_in_the_past
    if end_time.present? && end_time < Date.today
      errors.add(:end_time, "can't be in the past")
    end
  end

  has_many :bids

  has_many :bidders, through: :bids, source: :user

  belongs_to :user, dependent: :destroy

end
