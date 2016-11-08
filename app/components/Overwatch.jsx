var React = require('react');
var TeamsList = require('TeamsList');

var Overwatch = React.createClass({
  getInitialState: function() {
    return {
      teams: [
        {
          id: 1,
          game: 'overwatch',
          name: 'EnVyUs',
          rank: 1,
          rating: 1421,
          region: "USA"
        }, {
          id: 2,
          game: 'overwatch',
          name: 'MisfitsGG',
          rank: 2,
          rating: 1355,
          region: "Europe"
        }, {
          id: 3,
          game: 'overwatch',
          name: 'rogue',
          rank: 3,
          rating: 1353,
          region: "Europe"
        }
      ]
    };
  },
  render: function() {
    var {teams} = this.state;

    return (
      <div>
        <h3 className="page-title">Overwatch</h3>
        <TeamsList teams={teams} />
      </div>
    )
  }
});

module.exports = Overwatch;
