import { useSelector } from 'react-redux';
import './App.css';
import AccountStatus from './components/AccountStatus';
import Auth from './components/Auth';
import Balance from './components/Balance';
import Banking from './components/Banking';

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <div className="App">
      
      <Auth />
      {isLoggedIn ? (
        <div>
          <Balance />
          <Banking />
          <AccountStatus />
        </div>
      ):"Please log in to countinue"}
      
    </div>
  );
}

export default App;
