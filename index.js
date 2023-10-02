import  express  from "express";
import routes from './routes/routes.js';
import path, { dirname } from 'path';

const __filename = import.meta.url;
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 4000;

//set up static files
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ejs setup
app.set('view engine', 'ejs');
app.set('views', './views');

//create a route
app.use('/', routes);
app.get("/", (req, res) => {
    res.send("Welcome to the Express server");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});