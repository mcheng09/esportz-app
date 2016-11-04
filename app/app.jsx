var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Overview = require('Overview');
var Overwatch = require('Overwatch');
var LeagueOfLegends = require('LeagueOfLegends');

// Load Foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/leagueoflegends" component={LeagueOfLegends}/>
      <Route path="/overwatch" component={Overwatch}/>
      <IndexRoute component={Overview} />
    </Route>
  </Router>,
  document.getElementById('app')
);
