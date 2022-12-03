# puts "Hello Radek!"

# p "hello".class
# p 12.class
# p 2.4.class
# p true.class

# p "42".to_i
# p 42.to_s

student = "SArAh"
age = 21

# p "#{student} is #{age}."

age += 1

# p "#{student} will be #{age} next year."

# p student.length
# p student.count # only for arrays
# p student.size
# # p student.first # only for arrays
# p student[0]
# p student[0..1]
# p student[..1]
# p student[...2]
# p student.slice(1,3) # from index 1, 3 characters

# p student.upcase
# p student.downcase
# p student.capitalize 

students = ["Sarah", "Tim", "Jeremy" ]
p students.join
p students.join(" ")
p students.join(", ")

students_string = students.join("-")
p students_string.split()
p students_string.split("-")