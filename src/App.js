import Content from "./components/Profile/Content";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import "./styles/App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/Dialogs/*" element={<DialogsContainer />} />
            <Route path="/Profile" element={<Content  />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
