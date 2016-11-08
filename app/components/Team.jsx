var React = require('react');

var Team = React.createClass({
  render: function() {
    var {game, name, rank, rating, region} = this.props;

    return (
      <div className="team-info">
        <tr>
          <td>{game}</td>
          <td>{name}</td>
          <td>{rank}</td>
          <td>{rating}</td>
          <td>{region}</td>
        </tr>
      </div>
    )
  }
});

module.exports = Team;
