var React = require('react');

var Weathermessage = ({temp, message}) => {
  return (
    <p>{message}{temp}</p>
  )
}

module.exports = Weathermessage;
