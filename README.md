<h1>SQL Injection Attack Example</h1>

<p>This will be a repository for a SQL Injection attack example for my information security class</p>

<p>Instructions for getting this set up on your machine:</p>
<ul>
    <li>Install NodeJS and NPM from <a href="https://nodejs.org/en/download/">here</a></li>
    <li>Clone this repository</li>
    <li>Run <strong>npm install</strong> from your console in this directory</li>
    <li>Run <strong>node app.js</strong> to start the server</li>
    <li>Visit <strong>localhost:3000</strong> to access the server</li>
</ul>

<h2>This will require a SQL database set up with the following information:</h2>

<ul>
    <li> host: "localhost" </li>
    <li> port: 3306 </li>
    <li> user: "ExampleUser" </li>
    <li> password: "ExamplePassword" </li>
    <li> database: 'login'</li>
    <li> Tables 'user' and 'product'</li>
</ul>


<h2>Database Table Schemas</h2>

<p>product table</p>
<ul>
    <li> idproduct (INT11, Primary Key, Not Null) </li>
    <li> name (VARCHAR(45)) </li>
    <li> price (DOUBLE) </li>
    <li> quantity (INT11) </li>
</ul>

<p>user table</p>
<ul>
    <li> iduser (INT11, Primary Key, Not Null) </li>
    <li> firstname (VARCHAR(45)) </li>
    <li> lastname (VARCHAR(45)) </li>
    <li> username (VARCHAR(45)) </li>
    <li> ccnum (VARCHAR(45)) </li>
    <li> address (VARCHAR(45)) </li>
    <li> age (INT11) </li>
</ul>