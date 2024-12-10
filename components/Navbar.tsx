
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white flex items-center justify-between px-6 py-4 shadow-md">
      <div className="flex space-x-6">
        <button className="text-lg font-medium hover:text-orange-400 duration-200">Home</button>
        <button className="text-lg font-medium hover:text-orange-400 duration-200">About</button>
        <button className="text-lg font-medium hover:text-orange-400 duration-200">Contact</button>
      </div>
      <button className="bg-orange-500 text-white font-medium px-8 py-3 rounded-md hover:bg-orange-600 duration-200">
        hello world
      </button>
    </nav>
  )
}

export default Navbar