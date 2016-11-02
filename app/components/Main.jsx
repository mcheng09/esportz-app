var React = require('react');

var Nav = require('Nav');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <h3>This is the Main Component!</h3>
      </div>
    )
  }
})

module.exports = Main;
