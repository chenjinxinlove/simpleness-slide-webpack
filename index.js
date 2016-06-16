var $ = require('jquery');
var data = require('./data.json');

var View = require('./view');
var Control = require('./control');
var view = new View();
view.scView(data);
var Control = new Control();
Control.show(0);
Control.dj();
Control.left();
Control.right();
Control.xh();
