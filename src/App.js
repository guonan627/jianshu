import React, { Component } from 'react'; 
import { Fragment } from 'react';
import { GlobalStyle } from './style';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <div>
          hello
        </div>
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
