import { useState } from "react";

import { BiMenuAltLeft, BiX } from "react-icons/bi";
import Navbar from "./components/Navbar";
import UserCards from "./components/UserCards";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="w-full min-w-full min-h-screen bg-red-50 lg:p-24 p-4">
      <div className="container mx-auto">
        <h1 className="font-mono font-black text-3xl">Users</h1>
        <div onClick={() => setShowMenu(!showMenu)} className="w-10 h-10 cursor-pointer lg:hidden p-px">
          {showMenu ? <BiX className="w-9 h-9 " /> : <BiMenuAltLeft className="w-9 h-9" />}
        </div>
        <Navbar showMenu = {showMenu} />
        <UserCards />
      </div>
    </section>
  );
}

export default App;
