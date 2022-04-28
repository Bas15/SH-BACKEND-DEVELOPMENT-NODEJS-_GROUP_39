# SH-BACKEND-DEVELOPMENT-NODEJS-_GROUP_39

Build a static file server
first Capstone
ï»¿Build a static file server that satisfies the following:

1. The project should be initialized with npm and have one package to help monitor the development environment for file changes. This should have two automated npm scripts start which starts the project with node and start:dev which starts the project with nodemon.

2. Apart from the files and folders bootstrapped with npm, your folder structure should have a file named server.js and a sub-folder named pages.

3. The sub-folder pages should contain three HTML files namely index.html, about.html, and 404.html

Below are the contents of each file

index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="http://fonts.googleapis.com/css?family=Crete+Round"
      rel="stylesheet"
      type="text/css"
    />
    <title>Home</title>
    <style>
      body {
        background-color: #fff;
        color: #777;
        font: normal 15px "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
      }
      h1 {
    font-family: 'Crete Round', serif;
    font-weight: bold;
    color: #444;
    font-size: 45px;
    margin-bottom: 20px;
}
h2 {
    font-weight: 300;
    color: #444;
    font-size: 55px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
}
a {
    text-decoration: none;
    color: #444;
}
a:hover {
    color: #02b8dd;
}
strong {
    font-weight: bold;
}

.wrapper {
    margin: 0 auto;
    padding: 0 10px;
    width: 940px;
}

header h1 .color {
    color: #02b8dd;
}

#hero h2 {
    margin: 180px 0 40px 0;
}
.btn {
    display: block;
    text-align: center;
    background: #444;
    border-radius: 3px;
    color: #fff;
    width: 180px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    margin: 0 auto;
}
.btn:hover {
    background-color: #02b8dd;
    color: #fff;
}      
    </style>
  </head>
  <body>
    <header>
      <div class="wrapper">
        <h1>SH - NODEJS<span class="color">.</span></h1>
      </div>
    </header>

    <div id="hero">
      <div class="wrapper">
        <h2>
          <strong>A First, clean</strong><br />
          Capstone Project.
        </h2>
        <a href="#" class="btn">Get Started</a>
      </div>
    </div>
  </body>
</html>

```

about.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="http://fonts.googleapis.com/css?family=Crete+Round"
      rel="stylesheet"
      type="text/css"
    />
    <title>About</title>
    <style>
      body {
        background-color: #fff;
        color: #777;
        font: normal 15px "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
      }
      h1 {
    font-family: 'Crete Round', serif;
    font-weight: bold;
    color: #444;
    font-size: 45px;
    margin-bottom: 20px;
}
h2 {
    font-weight: 300;
    color: #444;
    font-size: 55px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
}
a {
    text-decoration: none;
    color: #444;
}
a:hover {
    color: #02b8dd;
}
strong {
    font-weight: bold;
}

.wrapper {
    margin: 0 auto;
    padding: 0 10px;
    width: 940px;
}

header h1 .color {
    color: #02b8dd;
}

#hero h2 {
    margin: 180px 0 40px 0;
}
.btn {
    display: block;
    text-align: center;
    background: #444;
    border-radius: 3px;
    color: #fff;
    width: 180px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    margin: 0 auto;
}
.btn:hover {
    background-color: #02b8dd;
    color: #fff;
}      
    </style>
  </head>
  <body>
    <header>
      <div class="wrapper">
        <h1>SH - NODEJS<span class="color">.</span></h1>
      </div>
    </header>

    <div id="hero">
      <div class="wrapper">
        <h2>
          <strong>About the first</strong><br />
          Capstone Project.
        </h2>
      </div>
    </div>
  </body>
</html>

```

404.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="http://fonts.googleapis.com/css?family=Crete+Round"
      rel="stylesheet"
      type="text/css"
    />
    <title>404</title>
    <style>
      body {
        background-color: #fff;
        color: #777;
        font: normal 15px "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
      }
      h1 {
    font-family: 'Crete Round', serif;
    font-weight: bold;
    color: #444;
    font-size: 45px;
    margin-bottom: 20px;
}
h2 {
    font-weight: 300;
    color: #444;
    font-size: 55px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
}
a {
    text-decoration: none;
    color: #444;
}
a:hover {
    color: #02b8dd;
}
strong {
    font-weight: bold;
}

.wrapper {
    margin: 0 auto;
    padding: 0 10px;
    width: 940px;
}

header h1 .color {
    color: #02b8dd;
}

#hero h2 {
    margin: 180px 0 40px 0;
}
.btn {
    display: block;
    text-align: center;
    background: #444;
    border-radius: 3px;
    color: #fff;
    width: 180px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    margin: 0 auto;
}
.btn:hover {
    background-color: #02b8dd;
    color: #fff;
}      
    </style>
  </head>
  <body>
    <header>
      <div class="wrapper">
        <h1>SH - NODEJS<span class="color">.</span></h1>
      </div>
    </header>

    <div id="hero">
      <div class="wrapper">
        <h2>
          <strong>Route not found!</strong><br />
        </h2>
      </div>
    </div>
  </body>
</html>

```

Routing

The server should fulfill the below routes

/ : Home route
/about : About route
/sys : System route
1. When hitting the home route, the server should serve back the index.html page with the status code set to 200 and the content type to text/html

2. When hitting the about route, the server should serve back the about.html page with the status code set to 200 and the content type to text/html

3. When hitting the system route, the server should save information about the os in a file named osinfo.json with the status code set to 201, the content type to text/plain with the message "Your OS info has been saved successfully!" written back to the user. The osinfo.json file should contain the following attributes:

hostname: the os host name,
platform: the os platform,
architecture: the os architecture,
numberOfCPUS: the os number of cores,
networkInterfaces: os network interfaces,
uptime: os uptime


4. Hitting any other route which is not known by our server, we should be able to serve back the 404.html page with the status code set to 404

5. The logic should be under server.js

Note: Make use of the right modules and packages
