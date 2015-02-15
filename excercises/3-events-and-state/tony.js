var React = require('react');

var ContentToggle = React.createClass({
  // creating state here
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
    });
  },

  render () {
    var summaryClassName = 'ContentToggle__Summary';
    if (this.state.showDetails)
      summaryClassName += ' ContentToggle__Summary--open';
    return (
      <div className='ContentToggle'>
        <div onClick={this.toggle} className={summaryClassName}>
          {this.props.summary}
        </div>
        <div className='ContentToggle__Details'>
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
        <ContentToggle summary='Jerked Chicken'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ContentToggle>
      </div>
    );
  }
});

React.render(<App/>, document.body);
