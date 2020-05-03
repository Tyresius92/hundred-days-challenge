# Dice Roller

This is a simple React application which allows the user to specify a dice roll, and then press the roll button to get the result.

### Idea Source

My head.

### Learning Goals

I'm going to use this project to play around with currying functions. Will also use TDD.

### Time spent

3 hours

### Biggest hurdles

Trying to make this as re-usable as possible was hard, and I eventually abandoned the TDD because when your absolute base element is Math.random, it's hard to write tests on curried functions. Also struggled a little at the start just trying to figure out how to handle the random numbers in the "best" way.

The state management could have definitely been better, and I could have broken the components down further to make them more re-usable instead of lumping it all into App.js.

### What I learned

At some point, just write a test that just loosely asserts on your behavior. Sure, if the test is non-deterministic it probably shouldn't actually go to prod, but just write a test, and don't worry about the optimal test.

### Links Used

[Spying on Math.random](https://silvenon.com/blog/mocking-with-jest/functions)

### Possible Extensions

-   Refactor the UI to make it pretty.
-   Write a text box that parses a string die roll (2d4 + 3d6 + 7d17)
