let express = require('express');
let app = express();
var fs = require('fs');

let routes = require("./api/routes");

routes.routeApis(app);

  
  app.listen(3012);