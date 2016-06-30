var React = require('react');

var Weatherform = React.createClass({
  onFormSubmit: function (e) {
		e.preventDefault();

		var message = this.refs.message.value;
		if(message.length > 0){
			this.refs.message.value = "";
      this.props.onSearch(message);
		}
	},
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input ref="message"></input>
        <button>Get Weather</button>
      </form>
    )
  }
})

module.exports = Weatherform;
