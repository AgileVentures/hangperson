var React = require("React");

module.exports = React.createClass({displayName: 'Slider',
	getInitialState: function() {
    return {value: '10'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  },
  render: function() {
    const text = this.state.value+" "+ "pieces of gold!";
    return (
      <div>
      <h5>{text}</h5>
      <input type="range" min="0" max="50" name="points" defaultValue="10" step="5" onChange={this.handleChange}></input>
      </div>   
    );
  }
});
