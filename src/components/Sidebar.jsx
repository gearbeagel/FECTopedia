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
    <div className="w-1/4 lg:block bg-gray-200 h-screen fixed overflow-y-auto p-4 sidebar">
      <ul className='mt-16'>
        {sections.map((section, idx) => (
          <li key={idx} className="mb-2">
            <button 
              onClick={() => toggleSection(idx)} 
              className="text-blue-500 font-semibold flex items-center">
              <span className="mr-2">
                {openSections[idx] ? '▼' : '►'}
              </span>
              {section.title}
            </button>
            {openSections[idx] && (
              <ul className="ml-4 mt-2">
                {section.subsections.map((sub, subIdx) => (
                  <li key={subIdx} className="mb-2">
                    <button 
                      onClick={() => handleClick(idx, subIdx)} 
                      className={`text-blue-300 ${activeSection.subsectionIdx === subIdx && activeSection.sectionIdx === idx ? 'highlight' : ''}`}>
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
  );
};

export default Sidebar;
