## Description

"T9 word" allows you to input words quickly on a cell phone using only the 9 standard number keys. Each number represents several letters, except 0 and 1 which have no letters. The number 2 goes with ABC, 3 DEF, ..., 7 PQRS, 8 TUV, and 9 WYXZ. The usefulness of T9 is that you only have to press a given number once per letter in a word you want to type, and the algorithm can figure out which of each number's letters you intended based on the possible words your number combination could represent. For example, the number 7687 could represent both SOUP and ROTS:

SOUP: 7 [PQRS] 6 [MNO] 8 [TUV] 7 [PQRS]
ROTS: 7 [PQRS] 6 [MNO] 8 [TUV] 7 [PQRS]

The point is that T9 can "narrow down" what you intended based on what words in the dictionary could possibly match your number sequence.

## Task

Write a T9 word AngularJS application. It should include the business logic for the T9 word function.

Gets all possible words for a given number sequence typed on a standard telephone 10-digit keypad. Gets ALL letter combinations and not just those which are actual words (which would require a separate dictionary lookup). Characters that do not correspond with a letter will be ignored.

Note: Your function should get ALL letter combinations not just those that are actual words (You do not need to implement a dictionary lookup) You should also create a clean and functional front-end display of your keypad and results. This does not need to be beautiful (you will not be judged on your design). However, we ask that you write your own CSS and HTML and do not use a framework (like Bootstrap).

## Solutions

First we are creating the object of standard phone buttons with alphabet characters. (buttons object)
We are going to create a directive 'key' and loop through the buttons object, showing the numbers and letters of buttons (key directive)
Creating the text variable - for holding our output text. Textarea is going to be showing the text variable and going to be disabled for manual input.
Creating empty suggestions array - for holding current suggestions before adding one of them to the text.
We create another directory - suggestion - for holding all our suggestions. It is going to have span elements for each suggestion in a suggestions array.

The function 'suggest' is going to be called each time the key button is hit. It is going to generate the list of suggestions looping though list of current suggestions and looping through key's letters - populating more suggestions.

The function 'type' is going to be called every time the suggestion is hit. It is going to add the selected suggestion to the text and remove all extra suggestions.

Please refer to code comments for more information about specific parts of code.