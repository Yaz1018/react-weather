var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examples to try out</p>
      <ul>
        <li>
          <Link to="/?location=Boston">Boston, MA</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio</Link>
        </li>
      </ul>
    </div>
  )
}

module.exports = Examples;
