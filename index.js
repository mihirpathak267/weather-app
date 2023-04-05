const app = require('./app');
const routes = require('./routes');

app.use('/', routes);

app.listen(3000, (req,res)=>{
    console.log("Server has started on port 3000");
})