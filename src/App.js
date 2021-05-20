import './App.css';
import { StarwarsProvider } from './context/StarwarsProvider';
import Home from './pages/Home';

function App() {
  return (
    <StarwarsProvider>
      <div className='App'>
        <Home />
      </div>
    </StarwarsProvider>
  );
}

export default App;
