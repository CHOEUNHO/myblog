import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./state/AuthContext";
import Create from "./components/create/Create";
import Post from "./pages/post/Post";
import Update from "./components/update/Update";



function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />}/>
        <Route path="/login" element={user ? <Navigate to='/' /> : <Login/>}/>
        <Route path="/register" element={user ? <Navigate to='/' /> : <Register/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/post/:_id" element={<Post/>}/>
        <Route path="/update/:postId" element={<Update/>}/>
      </Routes>
    </Router>
    <Router>

    </Router>
    </>
  );
}

export default App;
