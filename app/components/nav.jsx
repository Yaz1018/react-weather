var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <nav>
        <Link to="/">Get Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/Examples">Examples</Link>
      </nav>
    )
  }
})

module.exports = Nav;
