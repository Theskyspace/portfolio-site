import React, { useState } from 'react'
import "./othernoteworth.css"
export default function Othernoteworth() {
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredElement(id);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };



  return (
    <div className='OtherNoteWorthy-content'>
      <h4 className='center-heading'>Other Noteworthy Projects</h4>
      <p>Projects made from 💚</p>
      <div className="note-grid">
        <div className={hoveredElement === 'element1' ? 'note-item hovered' : 'note-item'} onMouseEnter={() => handleMouseEnter('element1')}
          onMouseLeave={handleMouseLeave}>
        </div>
        <div className={hoveredElement === 'element2' ? 'note-item hovered' : 'note-item'} onMouseEnter={() => handleMouseEnter('element2')}
          onMouseLeave={handleMouseLeave}>
        </div>
        <div className={hoveredElement === 'element3' ? 'note-item hovered' : 'note-item'} onMouseEnter={() => handleMouseEnter('element3')}
          onMouseLeave={handleMouseLeave}>
        </div>
        <div className={hoveredElement === 'element4' ? 'note-item hovered' : 'note-item'} onMouseEnter={() => handleMouseEnter('element4')}
          onMouseLeave={handleMouseLeave}>
        </div>
        <div className={hoveredElement === 'element5' ? 'note-item hovered' : 'note-item'} onMouseEnter={() => handleMouseEnter('element5')}
          onMouseLeave={handleMouseLeave}></div>
        <div className={hoveredElement === 'element6' ? 'note-item hovered' : 'note-item'} onMouseEnter={() => handleMouseEnter('element6')}
          onMouseLeave={handleMouseLeave}></div>

      </div>
    </div>

  )
}
