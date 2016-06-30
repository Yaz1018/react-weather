var React = require('react');
var Weatherheader = require('Weatherheader');
var Weatherform = require('Weatherform');
var Weathermessage = require('Weathermessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getDefaultProps: function () {
	return{
		isLoading: false
	};
},
	getInitialState: function () {
		return {
			message: '',
			temp: ''
		};
	},
	handleSearch: function (message) {
		var that = this;
		debugger;
		this.setState({isLoading: true})
		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				message: 'The temp in ' + message + ' is ',
				temp: temp + ' degrees !',
				isLoading:false
			});
		}, function (errorMessage) {
			alert(errorMessage)
			that.setState({
				isLoading:false
			})
		})
	},
  render: function () {
		var {isLoading, temp, message} = this.state;

		function renderMessage() {
			if(isLoading){
				return <h3>Fetching Weather...</h3>
			}else if (temp && message){
				return <Weathermessage message={message} temp={temp}/>
			}
		}

    return (
      <section>
        <Weatherheader/>
        <Weatherform onSearch = {this.handleSearch}/>
        {renderMessage()}
      </section>
    )
  }
})

module.exports = Weather;
