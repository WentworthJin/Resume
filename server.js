const express = require('express');
const app = express()

const expressLayouts = require('express-ejs-layouts')


// Set View engine, Static File etc
app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layouts')
app.use(expressLayouts)
app.use(express.static(__dirname + '/public'));


// Router Manage
const indexRouter = require('./routes/index');
const projectRouter = require('./routes/project');

app.use('/',indexRouter);
app.use('/project', projectRouter);


app.listen(process.env.PORT || 3000,()=>{
  console.log("Server is up and listening to 3000 now")
});
