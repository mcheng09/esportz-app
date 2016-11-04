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
                <a href="/">eSportz</a>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li>
                <Link to="/overwatch" activeClassName="active-link">Overwatch</Link>
              </li>
              <li>
                <Link to="/leagueoflegends" activeClassName="active-link">League of Legends</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Nav;
