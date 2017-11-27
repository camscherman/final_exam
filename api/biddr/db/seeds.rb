# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
@admin = User.create({email: 'florence@cat.com', password: "meow"})

10.times do
  User.create({email: Faker::Internet.email, password: Faker::Internet.password})
end
@users = User.all

100.times do
  Auction.create({ title: Faker::Commerce.product_name,
                  details: Faker::HitchhikersGuideToTheGalaxy.marvin_quote,
                  end_time: rand(1..100).days.from_now,
                  reserve_price: Faker::Commerce.price,
                   user: @users.sample })
end

puts "#{Auction.all.count} products created"
puts "#{@users.count} users created "
