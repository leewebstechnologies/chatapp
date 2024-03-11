const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lee Chat</span>
      <div className="user">
        <img
          src="https://newsonair.gov.in/writereaddata/News_Pictures/INT/2023/Sep/NPIC-20239319354.jpg"
          alt=""
        />
        <span>Ali</span>
        <button>Logout</button>
      </div>
    </div>
  );
};
export default Navbar;
