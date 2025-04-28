import React, { useRef, createRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({
  activeSection,
  setActiveSection,
  darkMode,
  setDarkMode,
  lang,
  setLang,
}) {
  // ใช้ ref สำหรับแต่ละเมนู เพื่อคำนวณตำแหน่ง highlight
  const navRefs = useRef({
    home: createRef(),
    education: createRef(),
    experience: createRef(),
    skills: createRef(),
  });

  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  // อัปเดต highlight เมื่อมีการเปลี่ยน activeSection
  useEffect(() => {
    const el = navRefs.current[activeSection]?.current;
    if (el) {
      setHighlightStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeSection]);

  // ฟังก์ชันสลับภาษาระหว่าง 'en' ↔ 'th'
  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'th' : 'en'));
  };

  // สำหรับกำหนดสไตล์ปุ่มเมนูหลัก (Home, Education, ...)
  const getButtonClass = (section) =>
    `relative px-4 py-1 font-medium transition z-10 ${
      activeSection === section
        ? 'text-black'
        : darkMode
        ? 'text-white hover:text-blue-400'
        : 'text-gray-800 hover:text-blue-600'
    }`;

  // สีพื้นหลังของกล่องเมนู และสี highlight
  const navBgClass = darkMode ? 'bg-[#1e293b]' : 'bg-gray-300';
  const highlightColor = darkMode ? 'bg-yellow-400' : 'bg-blue-300';

  return (
    <nav className="relative flex justify-center items-center px-6 py-4 sticky top-0 z-50 backdrop-blur-md">
      {/* กล่องเมนูหลัก */}
      <div
        className={`relative flex gap-4 sm:gap-8 ${navBgClass} px-6 py-2 rounded-full shadow-lg text-sm sm:text-base`}
      >
        <motion.div
          className={`absolute top-0 bottom-0 ${highlightColor} rounded-full`}
          style={{ ...highlightStyle }}
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />

        <button
          ref={navRefs.current.home}
          onClick={() => setActiveSection('home')}
          className={getButtonClass('home')}
        >
          Home
        </button>
        <button
          ref={navRefs.current.education}
          onClick={() => setActiveSection('education')}
          className={getButtonClass('education')}
        >
          Education
        </button>
        <button
          ref={navRefs.current.experience}
          onClick={() => setActiveSection('experience')}
          className={getButtonClass('experience')}
        >
          Experience
        </button>
        <button
          ref={navRefs.current.skills}
          onClick={() => setActiveSection('skills')}
          className={getButtonClass('skills')}
        >
          Skills
        </button>
      </div>

      {/* กล่องปุ่ม Toggle ภาษา + ปุ่ม Dark/Light Mode */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center gap-3">
        {/* Toggle ภาษา */}
        <div
          onClick={toggleLang}
          className={`
            relative w-28 h-10 flex items-center justify-center
            rounded-full cursor-pointer select-none
            transition-colors duration-300
            ${lang === 'en' ? 'bg-green-500' : 'bg-red-500'}
          `}
        >
          {/* ข้อความ EN / TH ตรงกลาง */}
          <span className="z-10 text-white font-bold">
            {lang === 'en' ? 'EN' : 'TH'}
          </span>

          {/* Knob (วงกลมที่มีธง) */}
          <div
            className={`
              absolute top-1 w-8 h-8 bg-white rounded-full
              border border-gray-300 transition-all duration-300 ease-in-out
              flex items-center justify-center
              ${lang === 'en' ? 'right-1' : 'left-1'}
            `}
          >
            <img
              src={lang === 'en' ? '/flags/en.png' : '/flags/th.png'}
              alt={lang === 'en' ? 'English' : 'Thai'}
              className="w-8 h-6 object-cover rounded-full"
            />
          </div>
        </div>

        {/* ปุ่ม Dark/Light Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`
            w-28 h-10 flex items-center justify-center gap-2
            rounded-full text-sm font-bold
            transition-colors duration-300
            ${darkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-gray-300 text-black hover:bg-gray-400'}
          `}
        >
          <span>{darkMode ? '☀️' : '🌙'}</span>
          <span>{darkMode ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </nav>
  );
}
