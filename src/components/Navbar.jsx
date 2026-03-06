function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Ayansh Automation</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* <button className="btn-primary">Get a Quote</button> */}
    </nav>
  );
}

export default Navbar;