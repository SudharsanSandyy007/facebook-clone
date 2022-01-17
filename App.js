import "./App.css";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <NavBar />
          <div className="app__body">
            <SideBar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
