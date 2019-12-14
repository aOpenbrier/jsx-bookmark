const express = require('express')
const path = require('path')
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: true })) // allow complex json (objects nested in objects
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', __dirname + '/views');	// directory for the jsx files
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.get('/', (req, res) => res.render('index.jsx'))
require('./routes/htmlRoutes')(app)
require('./routes/apiRoutes')(app);

app.listen(PORT, _ => console.log('listening at: ' + PORT))