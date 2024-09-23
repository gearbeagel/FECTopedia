import React, { useState } from "react";
import { X, List } from "react-bootstrap-icons";

const Sidebar = ({ sections = [], handleClick, activeSection }) => {
  const [openSections, setOpenSections] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSection = (idx) => {
    setOpenSections((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed left-4 z-20 p-2 rounded-md bg-purple-500 hover:bg-purple-600 text-white transition duration-300 block md:hidden transition-transform duration-300 ease-in-out "
          style={{ top: "16px" }}
        >
          <List size={24} />
        </button>
      )}

      <div
        className={`fixed top-0 left-0 h-screen w-3/4 p-4 z-10 transform transition-transform duration-300 ease-in-out 
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-1/4 md:block sidebar`}
      >
        {/* Close button for mobile only - placed in the top right of the sidebar */}
        <button
          onClick={toggleSidebar}
          className="absolute top-20 right-4 text-white md:hidden"
        >
          <X size={24} />
        </button>

        <ul className="mt-16">
          {sections.map((section, idx) => (
            <li key={idx} className="mb-2">
              <button
                onClick={() => toggleSection(idx)}
                className="text-blue-500 font-semibold flex items-center"
              >
                <span className="mr-2">{openSections[idx] ? "▼" : "►"}</span>
                {section.title}
              </button>
              {openSections[idx] && (
                <ul className="ml-4 mt-2">
                  {section.subsections.map((sub, subIdx) => (
                    <li key={subIdx} className="mb-2">
                      <button
                        onClick={() => handleClick(idx, subIdx)}
                        className={`text-blue-300 ${
                          activeSection.subsectionIdx === subIdx &&
                          activeSection.sectionIdx === idx
                            ? "highlight"
                            : ""
                        }`}
                      >
                        {sub.section}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-0 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
