var React = require("React");
module.exports = React.createClass({displayName: 'Slider',
  render: function() {
    return (
      <input type="range" min="0" max="50" value="25" step="5"></input>
    );
  }
});