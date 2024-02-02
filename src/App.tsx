import React from "react";
import { Users } from "./components/Users";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { UserContextProvider } from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import './styles/global.scss'

function App() {

  return (
    <div>
      <Header />
      <main>
        <UserContextProvider>
            <Filter />     
            <Users />
        </UserContextProvider>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
