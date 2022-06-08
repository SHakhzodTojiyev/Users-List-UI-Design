type NavLinksProps = {
    NavLinks : string[]
}

function NavItems({NavLinks} : NavLinksProps) {
  return (
    <ul className="flex lg:flex-row flex-col lg:items-center">
        {
            NavLinks.map(item => (
            <li key={item} className="lg:w-32  p-4 transition ease-in-out delay-150 cursor-pointer hover:bg-indigo-400 rounded-2xl h-16 text-center font-sans hover:text-white">
              <a href="#">{item}</a>
            </li>
            ))
        }   
    </ul>
  )
}

export default NavItems