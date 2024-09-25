import React, { useState, useEffect } from "react";
import { X, List } from "react-bootstrap-icons";

const Sidebar = ({ sections = [], handleClick, activeSection }) => {
  const [openSections, setOpenSections] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const toggleSection = (idx) => {
    setOpenSections((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSectionClick = (sectionIdx, subsectionIdx, subsubsectionIdx) => {
    handleClick(sectionIdx, subsectionIdx, subsubsectionIdx);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed left-4 z-20 p-2 rounded-md bg-purple-500 hover:bg-purple-600 text-white transition duration-300 block md:hidden"
          style={{ top: "16px" }}
        >
          <List size={24} />
        </button>
      )}

      <div
        className={`fixed top-0 left-0 h-screen w-5/6 p-4 z-10 transform transition-transform duration-300 ease-in-out overflow-y-auto 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-1/4 md:block sidebar`}
        style={{ textAlign: "left" }}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-20 right-4 dark:text-white light:text-black md:hidden"
        >
          <X size={24} />
        </button>

        <ul className="mt-16">
          {sections.map((section, idx) => (
            <li key={idx} className="mb-2">
              <button
                onClick={() => toggleSection(idx)}
                className="text-blue-500 font-bold block text-left"
              >
                <span className="mr-2">{openSections[idx] ? "▼" : "►"}</span>
                {section.title}
              </button>
              {openSections[idx] && (
                <ul className="ml-4 mt-2">
                  {section.subsections.map((sub, subIdx) => (
                    <li key={subIdx} className="mb-2 font-semibold">
                      <button
                        onClick={() => handleSectionClick(idx, subIdx)}
                        className={`text-blue-300 block text-left ${
                          activeSection.subsectionIdx === subIdx &&
                          activeSection.sectionIdx === idx
                            ? "highlight"
                            : ""
                        }`}
                      >
                        {sub.section}
                      </button>
                      <ul className="ml-4 mt-2 list-disc text-blue-200">
                        {sub.subsections.map((subsub, subsubIdx) => (
                          <li key={subsubIdx} className="mb-2 font-normal">
                            <button
                              onClick={() =>
                                handleSectionClick(idx, subIdx, subsubIdx)
                              }
                              className={`text-blue-200 block text-left ${
                                activeSection.subsubsectionIdx === subsubIdx &&
                                activeSection.subsectionIdx === subIdx &&
                                activeSection.sectionIdx === idx
                                  ? "highlight"
                                  : ""
                              }`}
                            >
                              {subsub.subsection}
                            </button>
                          </li>
                        ))}
                      </ul>
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
