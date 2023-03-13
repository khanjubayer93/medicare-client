import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';

function App({ children }) {
  return (
    <div className=''>
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
