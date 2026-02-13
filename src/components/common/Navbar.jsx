const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <h1 className="font-bold">BYTBROO</h1>
      <div className="space-x-8 font-bold text-base uppercase">
        <a href="#">Home</a>
        <a href="#">Work</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
