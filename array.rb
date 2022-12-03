# ARRAY CRUD
students = ['Ryan', 'Kim', 'Sarah']

# Create
students << "Danielle"
students.push("Isabel")
p students

# Read
p students[3]

# Update
students[3] = "Super Danielle"
p students

# Delete
students.delete_at(3)
students.delete("Isabel")
p students

# Iterate
students.each do |student|
  p "#{student} is amazing!"
end