var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./CommentBox');
// Add individual CSS.
require('../css/home.css');
// React-bootstrap.
var Col = require('react-bootstrap').Col;
var Jumbotron = require('react-bootstrap').Jumbotron;
var PageHeader = require('react-bootstrap').PageHeader;
var Row = require('react-bootstrap').Row;

ReactDOM.render(
  (
  // take up full screen on mobile devices, and only take up middle section on desktop.
  <Row>
    <Col xs={12}>
      <Jumbotron id='top-banner'>
        <h3>Connecting-Love</h3>
        <p>This is a simple demo App using React + Django on GAE -- check out <a href='https://github.com/shunpochang/connect_love_demo' target='_blank'> my Git (@shunpochang) </a> for the code.</p>
      </Jumbotron>
    </Col>
    <Col xs={10} xsOffset={1}>
      <PageHeader>Please share who you are <small>if you had fun playing with the demo code!</small></PageHeader>
      <CommentBox url='/comment/list/' />
    </Col>
  </Row>
  ),
  document.getElementById('content')
);
