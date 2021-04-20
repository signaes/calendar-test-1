import logo from './logo.svg';
import './App.css';
import { Month } from './components/Month';

function App() {
  const now = new Date();

  return (
    <div className="App">

      <Month
        year={now.getFullYear()}
        monthIndex={now.getMonth()}
        className="bg-red-100 grid grid-cols-7"
      />

      <Month
        year={now.getFullYear()}
        monthIndex={now.getMonth() + 1}
        className="bg-red-100 grid grid-cols-7"
      />
    </div>
  );
}

export default App;
