<h1 align="center"> PLAYLIST API (My Songs Crate)</h1>
<p>A <b>Playlist API</b> that allows for the owner to create a <b>Database</b> of music collections. Users are able to create an account for themselves. After creating an account, users will then be able to create their own <b>Playlist</b> and then add songs from the <b>database collection</b>.</p>
<br>
<p>The Playlist API protects users' password via hashing and set requirements of unique emails and usernames when registering and logging in.
<br>
<br>
<h2>Tech Stack</h2>
<b>Server:</b> Node, Express 
<br>
<b>Database:</b> Mongo
<br>
<b>Tools:</b> Postman, Heroku
<br>
<br>
<h2>Environment Variables</h2>
<p>Running this project requires the addition to these environments on your .env file:</p>
<ul>
<li>MONGODB_URI</li>
<li>JWT_SECRET</li>
</ul>
<br>
<h2>To run my project locally, you must have the following dependencies intstalled.</h2>
<h3>To install dependencies</h3>
<p><i>npm init -y</i></p>
<p>npm i:</p>
<ul>
<li>express</li>
<li>ejs</li>
<li>mongoose</li>
<li>dotenv</li>
<li>expressvalidator</li>
<li>morgan</li>
<li>helmet</li>
<li>bcrypt</li>
<li>jsonwebtoken</li>
</ul>
<br>
<h2>Routes</h2>
<p>server -app.get('/) returns message ""Welcome to 'My Songs Crate' where you create your own collection of playlists!!!"</p>
<h2>Auth Router ('/auth') creates Users and Login</h2>
<h2>User Router</h2>
<ul>
<li><b>Router.post:</b> Creates/Registers a new user via AuthSchema; password is hashed</li>
<li><b>userRouter.post:</b> User logs in with username and password. Token is sent for further access</li>
<li><b>userRouter.get:</b> the endpoint; finds all of the users. User protected with tokens</li>
</ul>

<h2>Library Data/Router</h2>
<ul>
<li><b>/library</b> - creates a new library with a unique id</li>
<li><b>/addSong/id</b> - adds a song to the library database</li>
<li><b>.get /library</b> - gets/calls the library database with songs listed within an array</li>
</ul>

<h2>Playlist/Router</h2>
<ul>
<li><b>user/playlist</b> - creates a new playlist with name of playlist created by the user</li>
<li><b>user/playlist/addSong/id</b> - adds a song to the playlist via id of playlist created</li>
<li><b>.get /playlist/id</b> - gets the playlist via id</li>
</ul>

<h1>Schemas</h1>
<h2>User Route Schema:</h2>
<ul>
<li><b>username:</b> <b>type:</b> String, <b>required:</b> true,</li>
<li><b>email:</b> <b>type:</b> String, <b>required:</b> true,</li>
<li><b>birthday:</b> <b>type:</b> Data, <b>required:</b> true,</li>
<li><b>age:</b> <b>type:</b> Number, <b>required:</b> true,</li>
<li><b>password:</b> <b>type:</b> String, <b>required:</b> true,</li>
<li><b>createdat:</b> <b>type:</b> Data, Default</li>
</ul>
<br>
<h2>Library Schema (data library)</h2>
<b>songs:</b>
<ul>
<li><b>songTitle:</b> <b>type:</b> String, <b>required:</b> true,</li>
<li><b>artist:</b> <b>type:</b> Sring, <b>required:</b> true,</li>
<li><b>year:</b> <b>type:</b> Number, <b>required:</b> true,</li>
<li><b>genre:</b> <b>type:</b> String, <b>required:</b> true,</li>
<li><b>duration:</b> <b>type:</b> Number, <b>required:</b> false,</li>
<li><b>fileType:</b> <b>type:</b> String, <b>required:</b> true</li>
</ul>
<br>
<h2>Playlist Schema</h2>
<b>PlayList Name:</b>
<b>songs:</b>
<ul>
<li><b>songTitle:</b> <b>type:</b> String, <b>required:</b> true,</li>
<li><b>artist:</b> <b>type:</b> Sring, <b>required:</b> true,</li>
<li><b>year:</b> <b>type:</b> Number, <b>required:</b> true,</li>
<li><b>genre:</b> <b>type:</b> String, <b>required:</b> true,</li>
<li><b>duration:</b> <b>type:</b> Number, <b>required:</b> false,</li>
<li><b>fileType:</b> <b>type:</b> String, <b>required:</b> true,</li>
<li><b>private:</b> <b>type:</b> Boolean, <b>required:</b> false,</li>
<li><b>createdat:</b> <b>type:</b> Data, Default</li>
</ul>
<br>
<h1>Middeware</h1>
<b>jwtverify:</b> gets token from <b>Header</b> in <b>Postman</b> and matches token sent.
<br>
<b>authrouter:</b> uses login fuction to verify user is logged in order to post/create playlist. If password/username do not match, a 400 error will be sent.

<h2>Upcoming Features</h2>
<ul>
<li>More Routes</li>
<li>Swagger</li>
</ul>
