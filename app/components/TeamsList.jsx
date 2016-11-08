var React = require('react');

var Team = require('Team');

var TeamsList = React.createClass({
  render: function() {
    var {teams} = this.props;
    var renderTeams = () => {
      return teams.map((team) => {
        return (
          <Team key={team.id} {...team}/>
        );
      });
    }
    return (
      <div>
        <h5>This is the TeamsList component</h5>
        <table className="hover">
          <thead>
            <tr>
              <th>Game</th>
              <th>Name</th>
              <th>Rank</th>
              <th>Rating</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            {renderTeams()}
          </tbody>
        </table>
      </div>
    )
  }
});

module.exports = TeamsList;
