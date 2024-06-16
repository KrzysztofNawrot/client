import { useSelector } from 'react-redux';
import './index.css';
import { AppState } from './store';


const App = () => {
  const isMetroWorking = useSelector((state: AppState) => state.data.metro.isWorking);
  const welcomeMessage = "gownoooo";
  
  return (
    <>
      <div className='flex items-center justify-center pt-10 text-white'>
        <div className='flex flex-col bg-pink3 rounded-xl items-center justify-center w-1/3 text-5xl'>
          <div className='py-2'>
            {isMetroWorking ? <div> tAK </div> : <div> nie </div>}
          </div>
          <div className='py-2'>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
