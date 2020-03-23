const express = require('express');
const app = express();
let options = {
    dotfiles: "ignore",
    etag: true,
    extensions: ["htm", "html"],
    index: false,
    maxAge: "7d",
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set("x-timestamp", Date.now());
    }
  };
  
app.use(express.static("./", options));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home.ejs');
});

app.listen(process.env.PORT, console.log('listening on port 5000'));
