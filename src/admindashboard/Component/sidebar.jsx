import  { useState } from 'react';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      {/* Sidebar Toggle Button */}
      <button
        className={`sidebar-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
      >
        <svg
          className={`toggle-icon ${isOpen ? 'rotate' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar Content */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-title">
          <h3>Hey Sahwaz</h3>
          <p>sahwazalam768@gmail.com</p>
          </div>
          <nav>
            <ul className="nav-list">
              <li>
                <a href="#" className="nav-link">
                  Slot Request
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Create Companion Profile
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                 Ticket raised
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar} />}
    </div>
  );
};

export default Sidebar;
