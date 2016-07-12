var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p className="text-center">Welcome to the About page</p>
      <ul className="text-center" style={{listStyleType:'none'}}>
        <li>React weather app</li>
        <li>API appears to be broken for now</li>
        <li>Also webpack was involved</li>
      </ul>
    </div>
  )
};

module.exports = About;
