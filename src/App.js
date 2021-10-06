import React, { Component, Fragment } from 'react'; 
import { GlobalStyle } from './style';
import Header from './common/header';
import store from './store';
import  { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        {/* store= {store} 代表Provider把store里的数据都提供给了它内部的组件 */}
        <Provider store={store}>
          <Header />
        </Provider>
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
