var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <nav>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
        <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink>
        <IndexLink to="/Examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</IndexLink>
      </nav>
    )
  }
})

module.exports = Nav;
