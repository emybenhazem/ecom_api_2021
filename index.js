const express = require('express');
const app = express();
app.use(express.json())
    //structure de base d'un API  req manipulation de donne eli jeine men frant mel formulaire 
app.get("/user", (req, res) => {
    res.send("hello api ")
        // res tab3the lel front , objet howa el res , appi iraj3 el majoud west el sent 
})

app.get("/product/:id", (req, res) => {
    let productId = req.params.id
    console.log("product id :" + productId)
    res.send("api work ")
})

app.post("/user/register", (req, res) => {
    let data = req.body
    console.log(data)
    res.send("api works ")

})


app.listen(3000, () => {
    console.log("server started amira")
})