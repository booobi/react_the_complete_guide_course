import { Fragment } from 'react';
import Header from './components/Header'
import Auth from './components/Auth'
import Counter from './components/Counter';
import { useSelector } from 'react-redux';


function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn )
  return (
    <Fragment>
      <Header/>
      {!isLoggedIn && <Auth/>}
      {isLoggedIn && <Counter />}
    </Fragment>
  );
}

export default App;
