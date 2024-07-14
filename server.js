const express = require('express');
app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
   res.render('index'); 
});


app.listen(3000, () => {
    console.log('listening on port 3000');
})