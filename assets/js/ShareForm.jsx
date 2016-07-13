var React = require('react');
// React-bootsrap.
var Button = require('react-bootstrap').Button;
var ControlLabel = require('react-bootstrap').ControlLabel;
var Form = require('react-bootstrap').Form;
var FormControl = require('react-bootstrap').FormControl;
var FormGroup = require('react-bootstrap').FormGroup;

//JSX strips whitespace between lines, so we need to manually add spaces.
module.exports = React.createClass({
  getInitialState: function() {
    return {author: '', text: '', errMessage: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  // Validate that input has been filled.
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    if (!author) {
      this.setState({errMessage:'Please let us know who you are!'});
      return;
    }
    var text = this.state.text.trim();
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: '', errMessage:''});
  },  
  render: function() {
    return (
      <Form inline className='commentForm' onSubmit={this.handleSubmit}>
        <FormGroup bsSize='large'>
        <ControlLabel>Name:</ControlLabel>
	{' '}
        <FormControl
          type='text'
          placeholder='Nice to meet you!'
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        </FormGroup>
	{'    '}
        <FormGroup bsSize='large'>
        <ControlLabel>Country:</ControlLabel>
	{' '}
        <FormControl
          type='text'
          placeholder='Where are you from?'
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        </FormGroup>
	{'    '}
        <Button type='submit' value='Post' bsStyle='primary'>
          Share!
	</Button>
        <ControlLabel>{this.state.errMessage}</ControlLabel>
      </Form>
    );
  }
});
