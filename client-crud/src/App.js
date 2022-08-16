
import './App.css';
import AddUser from './components/addUsers.js/AddUser';
import AllUsers from './components/allUsers/AllUsers';
import CodeForInteview from './components/codeForInterview/CodeForInteview';
import Navbar from './components/navbar/Navbar'
import{Route,Routes}  from"react-router-dom"


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={ <CodeForInteview/>}></Route>
       <Route path='/all' element={  <AllUsers/> }></Route>
       <Route path='/add' element={<AddUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
