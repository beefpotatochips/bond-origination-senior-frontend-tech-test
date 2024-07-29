# The Bots Frontend coding challenge
## My solution

This is a problem that I'm familiar with from back in the day - I made a little windows program in visual basic to do something similar to easily translate spoilers in forums using ROT13.

## My approach

I decided to focus primarily on the functionality of the cipher and ensuring that it was working correctly. I used a simple Caesar cipher to encode the text, based on what I could piece together from memory. 
I began with unit testing the expected functionality, and then built a react hook that conformed to the results of the tests. 
After a few rounds of testing, building and testing again I realised I was close to out of time, and settled on the test cases I had for the function and began with the components themselves.

## Considerations

Given the spec, I decided to focus on the functionality rather than form. I would have liked to have styled the components a little, and added some quality of life features like copy to clipboard, but I ran out of time.

## How to run

Built with node v20.16.0 and npm 10.8.1. 
The dev server can be spun up with `npm run dev` and the tests can be run with `npm run test`.
Preview/Built out server use `npm run build && npm run preview`.