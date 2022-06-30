import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SingUp';
import Todo from './components/Todo';
import RequreAuth from './components/RequreAuth';
import AddTask from './components/AddTask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path="/todo" element={<Todo />}></Route>

        <Route path='/addtask' element={
          <RequreAuth>
            <AddTask></AddTask>
          </RequreAuth>
        }></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>


  );
}

export default App;
