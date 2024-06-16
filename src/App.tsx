import { useSelector } from 'react-redux';
import './App.css';
import { AppState } from './store';


const App = () => {
  const isMetroWorking = useSelector((state: AppState) => state.data.metro.isWorking);
  


  return (
    <>
      <h1>
        Czy Metro Działa? 
      </h1>
      <h2>
        {isMetroWorking ? 
          <p className='App-metro-state-green'>Tak</p> 
          : 
          <p className='App-metro-state-red'>Nie</p>
        }
      </h2>
    </>
  );
};

export default App;
