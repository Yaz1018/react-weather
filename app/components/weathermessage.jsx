var React = require('react');

var Weathermessage = ({temp, message}) => {
  return (
    <p className="text-center">{message}{temp}</p>
  )
}

module.exports = Weathermessage;
