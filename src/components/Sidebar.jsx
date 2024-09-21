import React, { useState } from 'react';

const Sidebar = ({ sections = [], handleClick, activeSection }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (idx) => {
    setOpenSections((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="w-1/4 lg:block bg-gray-200 h-screen overflow-y-auto p-4 sidebar">
      <h2 className="font-bold mb-4">Зміст</h2>
      <ul>
        {sections.map((section, idx) => (
          <li key={idx} className="mb-2">
            <button 
              onClick={() => toggleSection(idx)} 
              className="text-blue-500 font-semibold flex items-center">
              <span className="mr-2">
                {openSections[idx] ? '▼' : '►'} {/* Стрілка */}
              </span>
              {section.title}
            </button>
            {openSections[idx] && (
              <ul className="ml-4 mt-2">
                {section.subsections.map((sub, subIdx) => (
                  <li key={subIdx} className="mb-2">
                    <button 
                      onClick={() => toggleSection(`${idx}-${subIdx}`)} 
                      className="text-blue-400 flex items-center">
                      <span className="mr-2">
                        {openSections[`${idx}-${subIdx}`] ? '▼' : '►'} {/* Стрілка для підсекцій */}
                      </span>
                      {sub.section}
                    </button>
                    {sub.subsections && sub.subsections.length > 0 && openSections[`${idx}-${subIdx}`] && (
                      <ul className="ml-4 mt-3">
                        {sub.subsections.map((subsub, subsubIdx) => (
                          <li key={subsubIdx} className="text-sm text-align-start">
                            <button 
                              onClick={() => handleClick(idx, subIdx, subsubIdx)} 
                              className={`text-blue-300 ${activeSection.subsubsectionIdx === subsubIdx && activeSection.subsectionIdx === subIdx && activeSection.sectionIdx === idx ? 'highlight' : ''}`}>
                              {subsub.subsection}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
