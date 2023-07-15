
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import {app} from './firebaseconfig'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Register';
import HomeLayout from './Layouts/HomeLayout';

function App() {
  const router=createBrowserRouter([
    {path:'' , element:<Login/>},
    {path:'/register' , element:<Register/>},
    {path:'/home' , element:<HomeLayout/>}
  ])
  return (
    <>
    <RouterProvider router={router}>
    
    </RouterProvider>
      <ToastContainer/></>
  );
}

export default App;
