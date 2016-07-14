var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();

    var location = this.refs.headerSearch.value;
    var headerSearch = this.refs.headerSearch.value;
    var encodedLocation = encodeURIComponent(location);
    if (location.length > 0){
      this.refs.headerSearch.value = "";
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function () {
    return (
      <nav className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink></li>
            <li><IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink></li>
            <li><IndexLink to="/Examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</IndexLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input ref="headerSearch" type="search" placeholder="Search Weather by city"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    )
  }
})

module.exports = Nav;
