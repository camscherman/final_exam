class Api::V1::BidsController < ApplicationController

  def create
    auction = Auction.find params[:auction_id]
    user = User.first
    price = params[:price]
    bid = Bid.new(user: user, auction: auction, price: price)
    if bid.save
      render json: auction
    else
      render {error: bid.errors.messages}
    end
  end

  def destroy
    bid = Bid.find(params[:id])
    if bid
      bid.destroy
      render json: {success: true}
    else
      render json: {error: bid.errors.full_messages}
    end
  end
     
end
