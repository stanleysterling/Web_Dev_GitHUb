/*
Welcome to 🐱‍🐉 Dino's Looping Challenge of Doom!
You will need to create 4 loops for this challenge

1. Create a loop that writes "I love homework" 5 times
2. Create a loop that counts from 0 to 4 and writes the current number on the screen.
3. Create a loop that counts from 15 to 30 but only writes multiples of 3 on the screen
      - ex. 15, 18, 21, 24, 27, 30
4. Create a loop that will draw 4X4 square using ⬜. ONLY PRINT 1 ⬜ at a time. Your loops should do the rest. It should look like this:
⬜⬜⬜⬜
⬜⬜⬜⬜
⬜⬜⬜⬜
⬜⬜⬜⬜
document.write("⬜⬜⬜⬜") (X) <-- don't do this)
HINT: Loops can be nested inside another loop

5. Dino is a very neat and organized dinosaur. He likes to stack the bones (🦴) of his victims in a nice triangle shape. Create a stack that is 7 bones high.
- You will need to create a loop writes 1 🦴, and every successive line adds one more bone. It should look like this: 

🦴
🦴🦴
🦴🦴🦴
🦴🦴🦴🦴
🦴🦴🦴🦴🦴 
🦴🦴🦴🦴🦴🦴
🦴🦴🦴🦴🦴🦴🦴

6. Create the same pile of bones as challenge 5, but this time, center them by adding a ~ in front so the shape is a pyramid 

~~~~~~🦴
~~~~~🦴🦴
~~~~🦴🦴🦴
~~~🦴🦴🦴🦴
~~🦴🦴🦴🦴🦴 
~🦴🦴🦴🦴🦴🦴
🦴🦴🦴🦴🦴🦴🦴

7. Create a loop that creates 5 stacks of bones, each with another row at the bottom

🦴

🦴
🦴🦴

🦴
🦴🦴
🦴🦴🦴

🦴
🦴🦴
🦴🦴🦴
🦴🦴🦴🦴

🦴
🦴🦴
🦴🦴🦴
🦴🦴🦴🦴
🦴🦴🦴🦴🦴

GOOD LUCK 🤹‍♂️
*/

//==================================================================================================================================

      function br() {
            document.write("</br>")
      }

// 1. Create a loop that writes "I love homework" 5 times

      function one() {
            for(i = 0; i < 5; i++) {
                  document.write("I love homework")
            }
      }

      one()
      br()

// 2. Create a loop that counts from 0 to 4 and writes the current number on the screen.

      function two() {
            for(i = 0; i < 5; i++) {
                  document.write(i)
            }
      }

      two()
      br()

// 3. Create a loop that counts from 15 to 30 but only writes multiples of 3 on the screen
//       - ex. 15, 18, 21, 24, 27, 30

      function three() {
            for(i = 15; i < 33; i += 3) {
                  document.write(i)
            }
      }

      three()
      br()

// 4. Create a loop that will draw 4X4 square using ⬜. ONLY PRINT 1 ⬜ at a time. Your loops should do the rest. It should look like this:
// ⬜⬜⬜⬜
// ⬜⬜⬜⬜
// ⬜⬜⬜⬜
// ⬜⬜⬜⬜
// document.write("⬜⬜⬜⬜") (X) <-- don't do this)
// HINT: Loops can be nested inside another loop

      function four() {
            for(i = 0; i < 4; i++) {
                  for(j = 0; j < 4; j++) {
                        document.write("[ ]")
                  }
                  br()
            }
      }

      four()
      br()

// 5. Dino is a very neat and organized dinosaur. He likes to stack the bones (🦴) of his victims in a nice triangle shape. Create a stack that is 7 bones high.
// - You will need to create a loop writes 1 🦴, and every successive line adds one more bone. It should look like this: 

// 🦴
// 🦴🦴
// 🦴🦴🦴
// 🦴🦴🦴🦴
// 🦴🦴🦴🦴🦴 
// 🦴🦴🦴🦴🦴🦴
// 🦴🦴🦴🦴🦴🦴🦴

      function five() {
            for(i = 0; i <= 7; i++) {
                  for(j = 0; j < i; j++) {
                        document.write("x")
                  }
                  br()
            }
      }

      five()
      br()

// 6. Create the same pile of bones as challenge 5, but this time, center them by adding a ~ in front so the shape is a pyramid 

// ~~~~~~🦴
// ~~~~~🦴🦴
// ~~~~🦴🦴🦴
// ~~~🦴🦴🦴🦴
// ~~🦴🦴🦴🦴🦴 
// ~🦴🦴🦴🦴🦴🦴
// 🦴🦴🦴🦴🦴🦴🦴

      function six() {
            for (i = 7; i > 0; i--){
                  for(j = 1; j < i; j++) {
                      document.write("~")
                  }
                  for(k = 7; k >= j; k--) {
                      document.write("x")
                  }
                  br()
            }
      }

      six()
      br()


// 7. Create a loop that creates 5 stacks of bones, each with another row at the bottom

// 🦴

// 🦴
// 🦴🦴

// 🦴
// 🦴🦴
// 🦴🦴🦴

// 🦴
// 🦴🦴
// 🦴🦴🦴
// 🦴🦴🦴🦴

// 🦴
// 🦴🦴
// 🦴🦴🦴
// 🦴🦴🦴🦴
// 🦴🦴🦴🦴🦴

      function seven() {
            for(i = 1; i <= 5; i++) {
                  for(j = 1; j <= i; j++) {
                        for(k = 1; k <= j; k++) {
                              document.write("x")
                        }
                        br()
                  }
                  br()
            }
      }

      seven()
      br()