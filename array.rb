# ARRAY CRUD
students =  ['Curtis', 'Kiyoe', 'Joe'];

# Create
students << "Giuilia"
students.push("Buruburu")
p students

# Read
p students[1]

# Update
students[1] = "Super Kiyoe"

# Delete
students.delete_at(1)
# students.delete("Super Kiyoe")
p students

# Iterate
students.each do |student|
  p "#{student} is amazing!"
end 