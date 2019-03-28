var fscontroller=require('../controller/nm');


var express = require('express');

exports.routeApis = function(app){
 app.get('/mail', fscontroller.mail) 


}