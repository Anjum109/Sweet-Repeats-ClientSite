
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto bg-zinc-100'>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
