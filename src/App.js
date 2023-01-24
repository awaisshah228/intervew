import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li><Link to='/ch1/people' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'> Go to /ch1/people</Link></li>
          <li><Link to='/ch2/people' className='nderline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Go to /ch2/people</Link></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
