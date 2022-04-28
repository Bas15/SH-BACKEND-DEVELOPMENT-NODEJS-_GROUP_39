const express = require ("express");
const path = require("path");
const {writeFile} = require ("fs");
const os = require ("os");

const app= express();  

app.use(express.static(path.join(__dirname,"./pages")));
app.set('views', path.join(__dirname,"pages"));
app.engine('html', require('ejs').renderFile);
app.set("view engine",'html'); 

//Homepage route
app.get('/', (req,res) =>{
    res.status(200).set("content-Type","text/html").render("index");
})


//about page route
app.get('/about',(req,res) =>{
    res.status(200).set("content-Type","text/html").render("about");
})

// system route
app.get('/sys',(req,res) =>{
    const sysinfo = {
        "hostname": os.hostname(),
        "platform": os.platform(),
        "architecture": os.arch(),
        "numberOfCPUS": os.cpus(),
        "networkInterfaces": os.networkInterfaces(),
        "uptime": os.uptime()
    }

    // writing osinfo into osinfo.json file
    const osinfo = JSON.stringify(sysinfo, null, 2);
    writeFile('./pages/osinfo.json',`${osinfo}`,(err,result) => {
        if (err){
            console.log(err);
        }
        console.log(result);
    })

    // status code and user response 
        res.status(201).set('content-type','text/plain').send("Your osinfo has been saved successfully!"); 
   
})

// error page route, for routes not available
app.get('/*',(req,res) =>{
    res.status(404).set("content-Type","text/html").render("404");
})


app.listen(4000, () => {
    console.log("Running on port 4000");
})