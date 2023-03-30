import './App.css';
import Nav from './Components/Nav'
// npm i redux-devtools-extension --save-dev

import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import EditUser from './Components/EditUser';
import Registration from './Components/Registration';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <Nav/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/edit-user/:id' element={<EditUser/>} />
        <Route path='/registration' element={<Registration/>} />
        
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
