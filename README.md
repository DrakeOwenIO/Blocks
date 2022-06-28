# Blocks
'Blocks' is a milestone browser game project for my NCSU Software Dev Program. 

Note: Must run in live server to allow imports to work properly. THIS WILL NOT RUN IN GITHUB PAGES!

You can play the finished game at: http://drakeowen.io/projectGame/mainMenu.html

This is a simple game where you control a player using the WASD keys and have to dodge randomly generated blocks that move horizontally across the screen.
The score updates once per second and then game ends when the player is touched by a block. 
It saves the highscore and will display it to the player across games using local storage.
The inspiration for this game is some game devs that I follow on YouTube. They take part in game jams where you build a game in a short amount of time under
certain restrictions. They normally start with a dead simple concept and add things from there. So I started by printing some squares to the screen and went from there.  

Known Bugs
-------------------
Random crash issue that isn't consistently reproducible.

    - The tab randomly closes. Sometimes on game load, sometimes on game over or just randomly.

    - It seems to be some type of memory issue with the browser but I'm not 100% sure.

    - It could also be an issue with how the pages are loaded. A simliar issue could occur if pages are loaded out of order, but I haven't tested this.

    - Chrome doesn't generate a crash report when it happens.

Invincibility Glitch on Microsoft Edge

    - When placing your player in a certain spot when using Microsoft Edge, all obstacles will miss the player.

    - I can't reproduce this issue on Chrome.

    - Doesn't seem to happen in every game.

    - Happens more often in windowed mode. 

Additional Features If Time Had Allowed
----------------------

Increasing difficulty. As the game progresses the obstacles will move faster.