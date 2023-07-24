import { BiSearch, BiCaretDown } from "react-icons/bi";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="left-container">
          <a className="sitename" href="#">
            EDYODA
          </a>

          <ul>
            <li>
              <a className="list" href="#">
                Courses <BiCaretDown></BiCaretDown>
              </a>
            </li>
            <li>
              <a className="list" href="#">
                Programs <BiCaretDown></BiCaretDown>
              </a>
            </li>
          </ul>
        </div>

        <div className="right-container">
          <i>
            <BiSearch></BiSearch>
          </i>
          <a href="#">Log in</a>
          <button>JOIN NOW</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
