const TheNavBar = () => {
  return (
    <>
      <nav className="bg-blue-500 py-5 px-10 text-white flex justify-between items-center">
        <h2 className="font-semibold text-xl">Deva</h2>
        <ul className="flex space-x-4 cursor-pointer">
          <li className="bg-black min-w-20 text-center px-2 py-1 rounded hover:bg-transparent hover:font-semibold">
            Home
          </li>
          <li className="bg-black min-w-20 text-center px-2 py-1 rounded hover:bg-transparent hover:font-semibold">
            About
          </li>
          <li className="bg-black min-w-20 text-center px-2 py-1 rounded hover:bg-transparent hover:font-semibold">
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TheNavBar;
