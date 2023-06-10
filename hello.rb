# p "Hello!"

# p 42.class
# p 42.5.class
# p true.class
# p "hello".class

# naming convention of Ruby is lower_snake_case
# methods () are optional
# p 42.to_s
# p "42".to_i

# student = "Valerie"
# age = 21

# p "#{student} is #{age} years-old."
# age += 1
# p "#{student} is #{age} years-old next year."

student = "vAlerie"
# p student.first DOESN'T WORK, only for arrays
p student[0]
p student.length
p student.size
# p student.count DOESN'T WORK, only for arrays
p student[0..2] # from index 0 to index 2
p student[..2] # from start to index 2
p student[1..2] # from index 1 to index 2
p student[1..] # from index 1 to the end
p student[1..-1] # from index 1 to the last
p student[1...-1] # from index 1 to the last excluded
p student.slice(1) # only index 1
p student.slice(1, 3) # from index 1, 3 characters

p student.downcase
p student.upcase
p student.capitalize

students =  ['Curtis', 'Kiyoe', 'Joe'];

students_string = students.join
p students_string

students_string = students.join('-')
p students_string

p students_string.split
p students_string.split('')
p students_string.split('-')