# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
num4 = 480
# Expected output: '480 is even'
funny_number = 69
# Expected output: '69. haha, nice'

# Create a method named even_or_odd that takes in number as a parameter
# create a ternary conditional that asks if number is odd.
# true for the ternary should tell us our number is odd and if false it should tell us our number is even
# print the method call with our variables passed in
# bonus points: create two more variables and a nested ternary

def even_or_odd number
    number == 69 ? "#{number}. haha, nice." : number.odd? ? "#{number} is odd" : "#{number} is even"
end

p even_or_odd num1
p even_or_odd num2
p even_or_odd num3
p even_or_odd num4
p even_or_odd funny_number

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Create a method named no_vowels that takes in string as a param
# downcase all of our strings in case they start with vowels
# use built in method of delete to delete only vowels 
# print our method passing through variables

def no_vowels string
    string.downcase.delete "aeiou"
end

p no_vowels album1
p no_vowels album2
p no_vowels album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
palindrome_tester4 = 'Tacocat'

# Create a method named is_palindrome that takes in string as the param
# create a ternary that checks if string downcased and reversed is equal to string downcased
# if true use string interpolation to tell us string is a palindrome
# if false use string interpolation to tell us string is not a palindrome
#  print our method passing through variables

def is_palindrome string
    string.downcase.reverse == string.downcase ? "#{string} is a palindrome" : "#{string} is not a palindrome"
end

p is_palindrome palindrome_tester1
p is_palindrome palindrome_tester2
p is_palindrome palindrome_tester3
p is_palindrome palindrome_tester4
