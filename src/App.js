import logo from './logo.svg';
import './App.css';
import Tasks from './components/tasks/Tasks';
import Navbar from './components/navigation/Navbar';
import Divider from '@mui/material/Divider'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Divider />
      <Tasks />
    </div>
  );
}

export default App;
