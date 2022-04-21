# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Muzaffar Mukhitdinov**

Time spent: **15** hours spent in total

Link to project: (https://glitch.com/edit/#!/wide-reminiscent-punch)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

3 Strikes
![](https://user-images.githubusercontent.com/66290696/161369947-f0e43af5-2b73-48ca-ae0f-5d6de85ae562.gif)
Countdown timer
![](https://user-images.githubusercontent.com/66290696/161369949-9f3ae49d-b62d-4ce4-af47-6c5a55db4525.gif)
Extra Button
![](https://user-images.githubusercontent.com/66290696/161369952-3c8dde90-0747-4da8-8a4f-82104a99795a.gif)
General
![](https://user-images.githubusercontent.com/66290696/161370114-67fb72cd-70d7-40fb-ba96-48b6161b8bb4.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. <br /> 
I extensively utilized W3Schools and freeCodeCamp when building the project.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)  <br />
Out of all of the features incorporated, the logic for feature 3 Strikes was challenging. I wasn’t sure how to implement it so that if the user makes a mistake, the pattern doesn’t update and instead continues from where it left off. I thought it would make it difficult to win if I kept resetting the pattern each time. So the solution was to check if the user has lives left. If so, then you play the sequence, if not it means they have zero lives left and they would get the “Game over” alert message. Another aspect of this feature which I found challenging was when the user lost the game and clicked on the Start button only to find out that hearts didn’t reappear. The user needed to refresh the whole page for them to reappear. I later realized that all I needed to do was unset the display for each of the hearts in the JS file. This idea is similar to why we hide the Stop button. So when you lose a heart you hide it. Rather than adding a class like how we did for Stop and have it hidden, we can unset the display for hearts.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)  <br />
As I was completing the project I had questions where I was curious how things worked. For one, I wonder how time complexity comes into play in websites. How would one go about optimizing a site? My second question revolved around the idea of testing the website. While this project doesn’t have many buttons and other functionalities to test, I wonder what the step by step process of testing a web application is. In addition, I thought of ways how I could transform my site so that it would also be mobile compatible. Nowadays, many companies have complex, powerful mobile applications because people tend to prefer and can complete many day to day tasks on their cell phone. So does this mean there may be a decline in demand for web developers in the near future?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) <br />
If I had a few more hours, my focus would be to improve the user experience. The background would be changed so that the user would see the solar system from an astronaut’s point of view from inside a spaceship. Inside of each button I would have pictures of controls so as the user follows the random pattern and they would feel as if they are in full control of the ship. I also wanted to change the appearance of a cursor to a person’s hand. This way the user would be immersed into the game as if they are controlling a spaceship with their own hands. One way to implement this feature would’ve been to create a cursor image, save the image with either png or gif extension and incorporate cursor property. Lastly, I would add a feature on the bottom of my page that would display the fastest time it took for the user to win the game. I would create a variable and initialize it to zero. After each win I would have a conditional statement that checks if the current time was faster than previous time. If it’s true, then that time would be displayed on the page. Coming back to the idea of user experience, I believe enhancing the user satisfaction is key to having customer satisfaction and successful products. The company is nothing without its customers and I believe it’s important to take feedback from customers and see how you can improve your services, because at the end of the day customers always come first.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1s056hkpBw3_irk9z6YINen0EcQbB4i4p/view?usp=sharing)


## License

    Copyright [Muzaffar Mukhitdinov]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
