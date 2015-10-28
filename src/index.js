import './css/xwf.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

const rootInstance = ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: () => {
      // Help React Hot Loader figure out the root component instances on the page:
      // 帮助 React Hot Loader 识别出页面中的根组件
      return [rootInstance];
    },
  });
}
