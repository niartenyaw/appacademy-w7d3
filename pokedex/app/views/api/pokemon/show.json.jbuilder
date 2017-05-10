json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves
json.image_url asset_path(@pokemon.image_url)
json.items do
  json.array! @pokemon.items do |item|
    json.id item.id
    json.name  item.name
    json.price item.price
    json.happiness item.happiness
    json.image_url asset_path(item.image_url)
  end
end
