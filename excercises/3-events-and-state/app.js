////////////////////////////////////////////////////////////////////////////////
// Excercise:
// - make these tabs work when you click them
////////////////////////////////////////////////////////////////////////////////

var React = require('react');
var App = React.createClass({
  render () {
    return (
      <di>
        don't want more words I can't spell like exercise.
      </div>
    );
  }
});

=======
var React = require('react');

var ContentToggle = React.createClass({
  getInitialState () {
    return {
      showDetails: true
    };
  },

  renderDetails () {
  var showStuff = this.state.showDetails;
    if (showStuff)
      return this.props.children;
    else
      return null;
  },

  toggle () {
    this.setState({
      showDetails: !this.state.showDetails
    })
  },

  render () {
    return (
      <div className="ContentToggle">
        <div onClick={this.toggle} className="ContentToggle__Summary">
          {this.props.summary}
        </div>
        <div className="ContentToggle__Details">
          {this.renderDetails()}
        </div>
      </div>
    );
  }
});

var App = React.createClass({
  render () {
    return (
      <div>
        <ContentToggle summary="Jerked chicken">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </ContentToggle>
      </div>
    );
  }
});

React.render(<App />, document.body);

/*
 *
 * here we are add alert stuf
 * as a method to our App class
 */

//var alertStuff = (msg) => {
//  alert(msg)
//};

//var App = React.createClass({
//  alertStuff (msg) {
//    alert(msg);
//  },
//
//    render () {
//      return (
//        <div>
//          <button onClick={this.alertStuff.bind(this, 'hello')}>Hello</button>
//          <button onClick={this.alertStuff.bind(this, 'goodbye')}>Bye</button>
//        </div>
//      );
//    }
//});


/*
 * Make a button with React.js
 * and bind it to an event handler
 *
 * */

//var App = React.createClass({
//  render() {
//    return (
//      <div>
//        <button onClick = {alertStuff.bind(this, 'hello')}>Hello</button>
//        <button onClick = {alertStuff.bind(this, 'goodbye')}>goodbye</button>
//      </div>
//    );
//  }
//});

//React.render(<App />, document.body);
//
// make a button and append it to the DOM
// with vanilla JavaScript
//var btn = document.createElement('button');
//btn.onclick = () => alert('hello, easy peasy wasn\'t it?');
//document.body.appendChild(btn);


//var React = require('react');
//var assign = require('react/lib/Object.assign');
//
//var DATA = [
//  { name: 'USA', description: 'Land of the Free, Home of the brave' },
//  { name: 'China', description: 'Lots of concrete' },
//  { name: 'Russia', description: 'World Cup 2018!' },
//];
//
//var App = React.createClass({
//
//  getInitialState () {
//    return {
//      activeTabIndex: 0
//    };
//  },
//
//  renderTabs () {
//    var activeTabIndex = this.state.activeTabIndex;
//    return this.props.countries.map((country, index) => {
//      return (
//        <div
//          onClick = {() => { this.setState({ activeTabIndex: index }) }}
//          style={index === activeTabIndex ? styles.activeTab : styles.tab}>
//          {country.name}
//        </div>
//      );
//    });
//  },
//
//  renderPanel () {
//    var activeTabIndex = this.state.activeTabIndex;
//    var country = this.props.countries[activeTabIndex];
//    return (
//      <div>
//        <p>{country.description}</p>
//      </div>
//    );
//  },
//
//  render () {
//    return (
//      <div style={styles.app}>
//        <div style={styles.tabs}>
//          {this.renderTabs()}
//        </div>
//        <div style={styles.tabPanels}>
//          {this.renderPanel()}
//        </div>
//      </div>
//    );
//
//  }
//});
//
//var styles = {};
//
//styles.tab = {
//  display: 'inline-block',
//  padding: 10,
//  margin: 10,
//  borderBottom: '4px solid',
//  borderBottomColor: '#ccc',
//  cursor: 'pointer'
//};
//
//styles.activeTab = assign({}, styles.tab, {
//  borderBottomColor: '#000'
//});
//
//styles.tabPanels = {
//  padding: 10
//};
//
//React.render(<App countries={DATA}/>, document.body);

