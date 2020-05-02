# Random Meal Generator

This is a simple React application that queries an API for a random recipe, then displays it in a pretty way.

### Idea Source

[FlorinPop's Meal Generator](https://codepen.io/FlorinPop17/pen/WNeggor)

### Learning Goals

-   Try out a new React Design System

### Time spent

About an hour and 45 minutes

### Biggest hurdles

-   The lack of some components I would expect to be in a design system meant that I had to spend more time fussing over CSS than I would have liked.
-   The API had some noise in it which meant I had to do weird null checks, like checking for a string that was just a space (i.e. " ");

### What I learned

I tried out the BlueprintJS react library, and found that it wasn't really to my speed. I really want a design system that works right out of the box. I want a design system that is opinionated, rather than giving me only the lowest common denominator of components.

For instance, some libraries give a Button component, and automatically swap in the underlying a tag if there's an href present, but this library makes me make the conscious decision to use an AnchorButton instead of a Button. Similarly, the lack of a drop in Container component means that I have to do more work to get my MVP up and running. I think the lack of opinion does make it easier once my app has legs and I want to start doing really custom things, but for one off apps, I wouldn't recommend it.
