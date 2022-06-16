import { useState } from "react";

import { BiMenuAltLeft, BiX } from "react-icons/bi";
import Navbar from "./components/Navbar";
import UserCards from "./components/UserCards";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const UserList = [
    {
      user: "Lelah Nichols",
      location: "Troy, MI",
      tags: ["clothes", "stem"],
      avatar: "https://i.ibb.co/g7Dfv29/image.png"
    },
    {
      user: "Jesus Weiss",
      location: "Fort Worth, TX",
      tags: ["headset", "gadget", "speed", "winter"],
      avatar: "https://i.ibb.co/x12N79J/image.png"
    },
    {
      user: "Annie Rice",
      location: "Austin, TX",
      tags: ["road", "mountain", "trip", "earth", "nature"],
      avatar: "https://i.ibb.co/fx6hd9S/image.png"
    },
    {
      user: "Robert Brower",
      location: "Cincinnati, OH",
      tags: ["Maintenance", "gears", "frames", "repair"],
      avatar: "https://i.ibb.co/BNT5Z2V/image.png"
    },
    {
      user: "Amy Campbell",
      location: "Warrior, AL",
      tags: ["music", "disks"],
      avatar: "https://i.ibb.co/cX6Rvzg/image.png"
    },
    {
      user: "Anthony S. Morin",
      location: "Lyndhurst, NJ",
      tags: ["vintage", "electric"],
      avatar: "https://i.ibb.co/nqytswt/image.png"
    }
  ];

  return (
    <section className="w-full min-w-full min-h-screen bg-red-50 lg:p-24 p-4">
      <div className="container mx-auto">
        <h1 className="font-mono font-black text-3xl">Users</h1>
        <div onClick={() => setShowMenu(!showMenu)} className="w-10 h-10 cursor-pointer lg:hidden p-px">
          {showMenu ? <BiX className="w-9 h-9 " /> : <BiMenuAltLeft className="w-9 h-9" />}
        </div>
        <Navbar showMenu = {showMenu} />
        <UserCards UserList={UserList} />
      </div>
    </section>
  );
}

export default App;
