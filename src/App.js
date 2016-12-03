// import React from 'react'
// import ReactDOM from 'react-dom'
// import Counter from './components/Counter'
//
// ReactDOM.render(<Counter />,document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import AppBarExampleIcon from './components/AppBarExampleIcon';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <AppBarExampleIcon />
  </MuiThemeProvider>
);

export default App;
