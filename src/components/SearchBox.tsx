import { BiSearch} from "react-icons/bi";
function SearchBox() {
  return (
    <div className="flex justify-between border border-slate-400 lg:w-80 w-full p-4 my-6 rounded bg-white">
            <BiSearch className="w-8 h-8 m-2 text-slate-400" />
            <input className="w-full border-0 focus:outline-none" type="text" />
    </div>
  )
}

export default SearchBox