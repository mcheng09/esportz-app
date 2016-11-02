var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">
                eSportz
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li>
                <a href="http://google.com">Overwatch</a>
              </li>
              <li>
                <a href="http://google.com">League of Legends</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Nav;
