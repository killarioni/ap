import  NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/single";
import Write from "./pages/wrirte/Write";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from "react-router-dom";


function App() {            
  const user = false;
  return (
    <Router>
    <NavBar />
    <Switch>
      <Route exact  path="/">
        <Home/>
      </Route>
      <Route path="/register">{user ? <Home/> : <Register/>}</Route>     
      <Route path="/login">{user ? <Home/> : <Login/>}</Route> 
      <Route path="/write">{user ? <Write/> : <Register/>}</Route>     
      <Route path="/settings">{user ? <Settings/> : <Register/>}</Route>
      <Route path="/post/:postId">
        <Single/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
