
const express = require('express');
const app=express();
const hbs=require('hbs');
const port =process.env.PORT || 8000;
const path=require('path');

staticPath=path.join(__dirname,'../public');
template_path=path.join(__dirname,'../templates/views');
console.log(template_path);
partials_path=path.join(__dirname,'../templates/partials');


console.log(partials_path);

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("*",(req,res)=>{
    res.render('404error',{
        errormsg:"OOps,Page not Found"
    });
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
});