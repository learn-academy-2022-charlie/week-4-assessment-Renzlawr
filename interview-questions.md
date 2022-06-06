# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: I like to think of props in React almost like variables specific to your components. Props are made in your "parent class" and can be passed down to children classes but not back up. You can create a prop with the syntax `propName = {this.whatEverYouArePassingHere}` inside a component call. We use it a lot to pass state or methods down. You can then call the props in whichever component you passed it to with `this.props.propNameHere`. 

  Researched answer: Props are read only, so if you pass a method as props you can not modify whatever the input is. When you modify the input directly it turns from a "pure" method/function to a "impure" method/function. You can avoid this with state and/or copies of your inputs.



2. What is a DOM event?

  Your answer: A DOM event or just an event is used primarily when we make buttons to update something based on user interaction. Events are used a lot with props as you can activate methods passed as props within your component which can update your parent class. 

  Researched answer: DOM events perform certain actions depending on the users interaction on the page such as buttons. React events are camelCase and typed within curly braces. 



3. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object oriented programming is the main way we utilize React at LEARN. We create classes and methods instead of functions. It's not entirely different from functional programming, in functional programming you use functions instead of classes and objects. When functional programming, data isn't really stored inside objects and mainly transformed instead.

  Researched answer: Object oriented programming is the act of writing code with objects, classes, and methods. Functional programming utilizes functions instead, you can not store data in objects and have to transform it



4. What is the difference between a Float and an Integer in Ruby?

  Your answer: Ruby likes to have integers which are all your whole numbers and floats which are numbers with decimals. Keep in mind that if you have 15.0 a float and 15 and compare them with the equality operator it will return false. This is because they are not the same data type despite both being numbers. This is also partially due to Ruby not supporting type coercion.

  Researched answer: A float in ruby is a number with a decimal point and an integer is a whole number. Floats and Integers are different data types and are treated as such. 



5. Ruby has an implicit return. What does that mean?

  Your answer: Since Ruby allows for implicit return it means that the last line of code in a method is run if there are no other used returns. Note this does exist in javascript if you write a function inline, although being a cool fact, it can lead to confusion on the readability part in some cases

  Researched answer: If you do not explicitly call a return within your custom method in Ruby, implicit return will be applied automatically to the last line of code in your method.



## Looking Ahead: Terms for Next Week

1. Instance Variable: An instance variable is one of the four variable types, being local, instance, class, and global. Instance vriables start with the value of nil. They are declared with @var_name

2. PostgreSQL: Database management system, we can store our data from our page within postgres 

3. Ruby on Rails: Rails is a framework for ruby that helps us with default structures.

4. ORM: Object-relational mapping. It is a programming technique that allows us to manipulate object without having to take into account relational data.

5. Active Record: A software used with ruby on rails. It is an ORM, Active record runs between your code and databases
