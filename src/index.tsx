import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import 'typeface-poppins';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
