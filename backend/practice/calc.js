const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}));   //this is the middleware to read from data
app.use(express.static(`${__dirname}`));
app.get("/", ( req , res ) => {
    res.sendFile(`${__dirname}/calc.html`);
});
app.post("/" , (req , res ,)=>{
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);
    const add = n1 + n2;
    console.log(add);
    
    res.status(200).send(" sum is " + add);
});
app.listen(5000,()=>{
    console.log("server at 5000");
});

