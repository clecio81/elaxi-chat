// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Load third party dependencies
const Dialogflow = require('dialogflow');
const express = require('express')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const axios = require("axios");
const ejs = require ("ejs");
// Load our custom classes
const CustomerStore = require('./customerStore.js');
const MessageRouter = require('./messageRouter.js');
const passport = require('passport');
var OAuth2Strategy = require('passport-oauth2');

// Grab the service account credentials path from an environment variable
const keyPath = require("./support-hujo-5714d5e3510a.json")

const auth = require("./autorizado/auth.js")
// Load and instantiate the Dialogflow client library
const CONFIGURATION = {
    credentials: {
        private_key: keyPath.private_key,
        client_email: keyPath.client_email
    }
}
const { SessionsClient } = require('dialogflow');
const dialogflowClient = new SessionsClient(CONFIGURATION);
// Grab the Dialogflow project ID from an environment variable
const projectId = "support-hujo"
app.set("view-engine", "ejs");
app.use(express.static("views"));
// Instantiate our app
const customerStore = new CustomerStore();
const messageRouter = new MessageRouter({
  customerStore: customerStore,
  dialogflowClient: dialogflowClient,
  projectId: projectId,
  customerRoom: io.of('/customer'),
  operatorRoom: io.of('/operator')
});

// Serve static html files for the customer and operator clients
app.get("/up", (req, res) =>{
	
});
app.get("/user", (req, res) =>{
axios.get('https://elaxi-api.web.app/auth')
  .then(function (response){
  	res.send(response.data.displayName)
}).catch(function (error) {
    // handle error
    res.send(error);
  })
});

app.get('/customer', auth.user, (req, res) => {
	axios.get('https://elaxi-api.web.app/auth')
  .then(function (response){
 
  res.render('customer.ejs',{
  user: response.data.displayName
  });
  });
});

app.get('/operator', auth.user, (req, res) => {
  res.sendFile(`${__dirname}/static/operator.html`);
});

// Begin responding to websocket and http requests
messageRouter.handleConnections();
http.listen(3000, () => {
  console.log('Listening on *:3000');
});
