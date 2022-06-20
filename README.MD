<h1>PLAYLIST API</h1>
<br>
<br>
<p>A Playlist API that allows for the owner to create a Database of music collections. Users are able to create an account for themselves. After creating an account, users will then be able to create their own Playlist and then add songs from the database collection.</p>
<br>
<br>
<p>The Playlist API protects users' password via hashing and set requirements of unique emails and usernames when registering and logging in.
<br>
<br>
<h2>Tech Stack</h2>
<br>
<b>Server:</b> Node, Express
<b>Database:</b> Mongo
<b>Tools:</b> Mongo
<br>
<br>
<h2>Envoronment Variables</h2>
<br>
<p>Running this project requires the addition to these environment on your .env file:</p>
<ul>
<li>MONGODB_URI</li>
<li>JWT_SECRET</li>
</ul>
<br>
<br>
<h2>To run my project locally, you must have the following dependencies intstalled.</h2>
<br>
<h3>To install dependencies<h/h3>
<p>npm init -y</p>
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
<br>
<h2>Routes</h2>
<p>server -app.get('/) returns message ""Welcome 'My Songs Crate' where you create your own playlists collections!!!"</p>
<br>
<br>
<h2>Auth Router ('/auth') creates Users and Login</h2>
<ul>
<li>Router.post: Create's a new user</li>
<li>


<h2>User Router</h2>


<h2>Library Data/Router</h2>



<h2>Playlist/Router</h2>


<h1>Schemas</h1>
<br>
<br>
<h2>User Route Schema:</h2>
<ul>
<li>username: type: String, required: true,</li>
<li>email: type: String, required: true,</li>
<li>birthday: type: Data, required: true,</li>
<li>age: type: Number, required: true,</li>
<li>password: type: String, required: true,</li>
<li>createdat: type: Data, Default</li>
</ul>
<br>
<br>
<h2>Library Schema (data library)</h2>
<ul>
<li>songs:</li>
<li>songTitle: type: String, required: true,<li>
<li>artist: type: Sring, required: true,</li>
<li>year: type: Number, required: true,</li>
<li>genre: type: String, required: true,</li>
<li>duration: type: Number, required: false,</li>
<li>fileType: type: String, required: true</li>
</ul>
<br>
<br>
<h2>Playlist Schema</h2>
<ul>
<li>PlayList Name:</li>
<li>songs:</li>
<li><li>songTitle: type: String, required: true,<li>
<li>artist: type: Sring, required: true,</li>
<li>year: type: Number, required: true,</li>
<li>genre: type: String, required: true,</li>
<li>duration: type: Number, required: false,</li>
<li>fileType: type: String, required: true,</li>
<li>private: type: Boolean, required: false,</li>
<li>createdat: type: Data, Default</li>
</ul>
<br>
<br>
<h1>Middeware</h1>
jwtverify: gets token from Header in Postman and matches token sent.
<br>
authrouter: uses login fuction to verify user is logged in order to post/create playlist. If password/username do not match, a 400 error will be sent.
