import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {UserController} from "./controllers/usercontroller";
import Knex = require("knex");
import {Model} from "objection";
import bodyParser = require("body-parser");
const knexConfig = require("./../knexfile");


// Initialize knex.
const knex = Knex(knexConfig.development);

Model.knex(knex);

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
    controllers: [UserController] // we specify controllers we want to use
});
app.use(bodyParser.json());
// run express application on port 3000
app.listen(3000);
process.on('exit', function () {
    console.log("error", "Process Exit Goodbye!");
});
console.log("Application listening on port 3000!");
