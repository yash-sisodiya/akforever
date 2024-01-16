import logo from './logo.svg';
import './App.css';
import CaurosalComponent from './Caurosal';
import { HeartIcon } from '@heroicons/react/24/outline';
import { CountdownTimer } from './Countdown';
import Timeline from './Timeline';

function App() {
  const targetDate = new Date('2024-02-19T09:00:00');
  return (
    <div className="App">
      <CaurosalComponent />
      <div className='p-4'>
        <div className='text-[#b7636f] text-xl text-center py-2 font-bold tracking-wider'>Keerti & Abhinandan</div>
        {/* Invitation block */}
        <div className='text-[#b7636f] text-xl text-center py-2 font-bold tracking-wider'>Invitation to our wedding
        </div>
        <div className='flex items-center gap-x-3'>
          <div className='h-[2px] bg-gray-300 w-full' />
          <HeartIcon className="h-8 w-8 min-w-8 text-gray-300" />
          <div className='h-[2px] bg-gray-300 w-full' />
        </div>
        <div>
          Dear guests,<br />
          we cordially invite you to our wedding on Feb 19, 2024 at Shrilok Resort.<br />
          Best wishes,<br />
          Keerti and Abhinandan <br />
          <div className='text-[#b7636f] text-xl text-center py-2 font-bold tracking-wider'>
            Love<br />
            Sisodiya's & Dugger's</div>
        </div>
        <CountdownTimer targetDate={targetDate}/>
        <Timeline/>
      </div>
    </div>
  );
}

export default App;
