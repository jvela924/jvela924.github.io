# Settle The Score
## What is Settle The Score
### Use Settle The Score to retrieve season averages for your favorite NBA players and debate amongst your friends who's the better player. The app is built using HTML, CSS, JS, and JQuery:
#### HTML
HTML is the standard langauge for creating web pages. It defines the structure of a web page.
#### CSS
CSS is a langauge that defines how your HTML elements are displayed within your web page. 
#### JS
JavaScript (JS) is a programming language that allows you to implement complex things and create dynamic web page.
#### JQuery
JQuery is a JS library that makes running JS on your web page easier. You can use JQuery methods to complete complex JS functions in a single line of code.
## The Approach
#### Wireframe
Once I fleshed out the concept, I started to think about what I want my site to look like. I created a wireframe using [wireframe.cc](https://wireframe.cc)

![Wireframe](https://github.com/jvela924/jvela924.github.io/blob/master/settle-the-score-app/images/screenshot.png)

#### Setting up the basic page structure
Based on the wireframe, I started with my HTML file. I created all of my containers, and added in content where necessary. Then, I created the CSS and JS files, and I linked them to the HTML file to make sure everything was working.

#### API
After doing some research, I found a public API (on reddit) to use to get the data I needed for my site. [balldontlie](https://www.balldontlie.io/#introduction) seemed fairly easy to use and had some simple documentation. 

#### JS and JQuery
I started with building my ajax call to make sure I could retrieve data from the API before moving forward. Using JS, I was able to get the data I needed and log it to the console. Then, I used JQeury to place that data onto the page. Once I had the basic call structure down, I was ready to move on and build the more complex JS and JQeury functionality.
I knew that I would need to customize the ajax url based on user input, so I referred to what we had done in class. I was easily able to customize the url based on whatever value someone entered into the input boxes.

#### Building the site
Using my HTML, CSS, and JS files in tandem, I was able to where all my data needed to fit and started adding some styling to it. A lot of it was trial and error, but early on in the process I was able to get a functioning website that looked close to the wireframe. I then added in some more complex UI elements like the modals and gif carousel. 

#### Responsive design
I struggled a little bit with responsive design since I designed for desktop first, but I ultimately used two different media queries to make the page responsive for mobile devices and smaller sized windows. Again, a lot of this was trial and error.

## Live Site
[Settle The Score](https://jvela924.github.io/settle-the-score-app/)

## Unsolved Problems
One unsolved problem was searching for players with the same name. To get the player id, I'm initially querying on a non-unique property (player name) and not the unique property (player id). A potential solution could be to display all players with that name and their team and then have the user select who they want, but two players with the same name might  also share a team. Based on my NBA knowledge, I know a lot of the top players don't share a name with other players, so I did not think it would be a valuable use of my time for now to solve this issue. 
Another unsolved problem (but not really the current intention of the site) is to add a comparison tool. I would need to create a weighted rating scale, based on the stats, and then compare each player. However, when comparing athletes, it is hard to truly say who is "better". There are a lot of factors that come into play, but this app just provides the stats for a fun debate.
Also, I could have wrote more DRY JS code. However, since I was doing two separate Ajax calls, I felt it was simpler as the author to separate them into their own functions. The code was similar, but variable names were changed and the output was different for both calls.

## Future Extensions
* Include alert for when a player's name has duplicate entries
* Include other sports
* Add in a comparison tool
* Include fantasy sports functionality, like a link to one of the draft apps

