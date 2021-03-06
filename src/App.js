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
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Complited from './components/Complited';
import Calender from './components/Calender';

function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/complete" element={<Complited />}></Route>
        <Route path="/calender" element={<Calender />}></Route>

        <Route path='/addtask' element={
          <RequreAuth>
            <AddTask></AddTask>
          </RequreAuth>
        }></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="*" element={<NotFound />}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>


  );
}

export default App;
