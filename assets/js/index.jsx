var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./commentbox');
// React-bootstrap.
var Col = require('react-bootstrap').Col;
var Jumbotron = require('react-bootstrap').Jumbotron;
var PageHeader = require('react-bootstrap').PageHeader;
var Row = require('react-bootstrap').Row;

ReactDOM.render(
  (
  <Row><Col xs={10} xsOffset={1}>
    <Jumbotron id='top-banner'>
      <h3>Connecting-Love</h3>
      <p>This is a simple demo App using React + Django on GAE -- check out <a href='https://github.com/shunpochang/connect_love_demo' target='_blank'> my Git (@shunpochang) </a> for the code.</p>
    </Jumbotron>
    <PageHeader>Please share who you are <small>if you had fun playing with the demo code!</small></PageHeader>
    <CommentBox url='/comment/list/' />
  </Col></Row>
  ),
  document.getElementById('content')
);
