import express from 'express';
import parseUrl from 'body-parser';
const app = express()
app.use(parseUrl.urlencoded({extended:true}));

app.get('/', async (req, res) => {
  res.sendFile(__dirname + '/form/form.html')
})

app.post('/', (req, res) => {
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var result=num1+num2;
    res.send("The result "+result);
})

app.listen(4000, () => {
  console.log("App running with http://localhost:"+ 4000)
});