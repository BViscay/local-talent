const searchServiceQuery = `
  select 
    a.*,
    b.firstname & ' ' & b.lastname as user,
    c.name  as category,
  from services a 
  join users b on a.user_id = b.id
  join categoies c on a.category_id = c.id
  where :query
`

module.exports = { searchServiceQuery }
