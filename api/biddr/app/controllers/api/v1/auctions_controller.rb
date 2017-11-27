class Api::V1::AuctionsController < ApplicationController
  def index
    auctions = Auction.order(created_at: :desc).limit(25)
    render json: auctions
  end

  def create

    auction = Auction.new( auction_params)
    auction.user = User.first
    if auction.save
      render json: auction
    else
      render json: {error: auction.errors.full_messages}
    end
  end

  def update
    auction = Auction.find(params[:id])
    if auction.update(auction_params)
      render json: {success: true}
    else
      render json: {error: auction.errors.full_messages}
    end
  end

  def show
    auction = Auction.find(params[:id])
    render json: auction

  end

  def destroy
    auction = Auction.find(params[:id])
    if auction
      auction.destroy
      render json: {success: true}
    else
      render  json: {error: auction.errors.full_messages}
    end
  end

  private

  def auction_params
    params.require(:auction).permit(:title, :details, :end_time, :reserve_price )
  end


end
