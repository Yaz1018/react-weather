var React = require('react');
var Weatherheader = require('Weatherheader');
var Weatherform = require('Weatherform');
var Weathermessage = require('Weathermessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getDefaultProps: function () {
	return{
		isLoading: false
	};
},
	getInitialState: function () {
		return {
			location: '',
			temp: '',
			isLoading: false
		};
	},
	handleSearch: function (location) {
		var that = this;
		this.setState({
			isLoading: true,
			errorMessage: undefined
		})
		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: 'The temp in ' + location + ' is ',
				temp: temp + ' degrees !',
				isLoading:false
			});
		}, function (e) {
			that.setState({
				isLoading:false,
				errorMessage: e.message
			})
		})
	},
  render: function () {
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage() {
			if(isLoading){
				return <h3 className="text-center">Fetching Weather...</h3>
			}else if (temp && location){
				return <Weathermessage location={location} temp={temp}/>
			}
		}

		function renderError() {
			if (typeof errorMessage === 'string'){
				return(
					<ErrorModal message={errorMessage}/>
				)
			}
		}

    return (
      <section>
        <Weatherheader/>
        <Weatherform onSearch = {this.handleSearch}/>
        {renderMessage()}
				{renderError()}
      </section>
    )
  }
})

module.exports = Weather;
