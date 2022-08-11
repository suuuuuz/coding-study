const express = require("express")
const app = express();

app.set("view engine","ejs")

app.use("/static", express.static( "static" ) )

const port = 8000;
// localhost:8000/

app.get("/",(req,res)=>{
    res.render("test");
    //파일을 불러와서 하고싶으면 res.sendFile(__dirname+"/test.html"); 이런식으로 해야됨.
    //그리고 수정해서 서버를 껐다가 다시 서버를 켜야 실행이 됨. 
})

//localhost:8000/test
app.get("/test",(req,res)=>{
    res.render("test1");
})

app.get("/test2",(req,res)=>{
    res.render("test2");
})

app.listen(port,()=>{
    console.log("server open: ", port);
})