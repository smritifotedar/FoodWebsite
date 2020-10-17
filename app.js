const express = require("express");
const path=require("path");
const app = express();
const port = 8000;

//express specific stuff

app.use('/static',express.static('static'))//for serving static files
app.use(express.urlencoded())

app.set('view engine','pug')//set temp engine as pug
app.set('views',path.join(__dirname,'views'))//set view directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
})
app.get('/price', (req, res)=>{
    const params = { }
    res.status(200).render('price.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = { }
    res.status(200).render('contact.pug', params);
})




// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});