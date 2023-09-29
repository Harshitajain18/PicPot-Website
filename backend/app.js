const express = require ("express");
const  mongoose = require("mongoose");
// const cors =require("cors");
const MyError = require("./model/error");
const location_route = require("./routes/locations_route");
const user_route = require("./routes/users_route");
const app = express();

// app.use(cors());
app.use(express.json());
app.use("/uploads/users",express.static(`${__dirname}\\uploads\\users`));


app.use("/api/locations",location_route);
app.use("/api/users",user_route);

app.use("*",(req,res ,next) =>{
    return next (new MyError("Cannot find path",404));
});


app.use((error, req,res, next) => {
if(res.headerSent) {
    next(error);
}
res.status(error.code || 500);
res.json({
    result: "fail",
    message: error.message || "Something bad happened",
});
});
mongoose
.connect("mongodb+srv://picpotadmin:abhishek2211@cluster0.yijnhrs.mongodb.net/picpot?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000, () => {
        console.log("server running @ 5000");
    });
})
.catch((error)=>{
    console.log(error);
});





