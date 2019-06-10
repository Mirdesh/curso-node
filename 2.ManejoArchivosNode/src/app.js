const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs');

const directoriopublico = path.join(__dirname,'../public');
const directoriopartials = path.join(__dirname,'../partials');
const dirNode_modules = path.join(__dirname , '../node_modules')

app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/crearCurso', (req, res) =>{
  res.render('crearCurso');
});
 
app.listen(3000, () => {
  console.log("Servidor on")
});