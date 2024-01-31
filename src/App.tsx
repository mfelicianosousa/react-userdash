import React from "react";
import { Users } from "./components/Users";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import './styles/global.scss'
import { UserContextProvider } from "./contexts/UserContext";

function App() {

  return (
    <div>
      <Header />
      <UserContextProvider>
        <main>
          <Filter />     
          <Users />
        </main>
      </UserContextProvider>
     
    </div>
  );
}

export default App;