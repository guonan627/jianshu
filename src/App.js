import React, { Component } from 'react'; 
import { Fragment } from 'react';
import { GlobalStyle } from './style';
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <Header />
      </Fragment>
    );
  }
}

// function App() {
//   return (
//     <div className="dell">
//      hello world
//     </div>
//   );
// }

export default App;
