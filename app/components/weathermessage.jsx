var React = require('react');

var Weathermessage = React.createClass({

  render: function () {
    var message = this.props.message;
    var temp = this.props.temp;

    return (
      <p>{message}{temp}</p>
    )
  }
})

module.exports = Weathermessage;
