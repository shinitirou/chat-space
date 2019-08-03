json.array! @users do |user|
  json.id  user.id
  json.name  user.name
  json.current current_user.id
end