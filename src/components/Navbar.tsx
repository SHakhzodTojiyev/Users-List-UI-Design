
import NavItems from './NavItems'
import SearchBox from './SearchBox'

type ShowMenuProps = {
    showMenu : boolean
}

const NavLinks = ["Reputation", "New users", "Voters", "Editors", "Moderators"]

function Navbar({showMenu} : ShowMenuProps) {
  return (
    <nav
          className={`lg:flex flex-col lg:flex-row justify-between ${
            showMenu ? "" : "hidden"
          }`}
        >
          <SearchBox />
          <NavItems NavLinks={NavLinks} />
        </nav>
  )
}

export default Navbar