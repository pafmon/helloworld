var express= require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Hello world from server');
});


app.listen(3000);
console.log('Magic on 3000');
