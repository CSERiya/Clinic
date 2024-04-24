import './App.css';
import Body from './Body/Body';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Profile></Profile>
      <Body/>
    </div>
  );
}

export default App;
