import React from 'react';
import { motion } from 'framer-motion';

const textContent = {
  en: {
    title: 'Education',
    degree: 'Bachelor of Engineering in Computer and Information Engineering',
    university: 'Kasetsart University, Sriracha Campus',
    note: 'Expected to graduate and receive the degree by the end of 2025',
    relevantCourses: 'Relevant Courses:',
    courses: [
      'Programming Fundamentals (Python, Java)',
      'Database Systems',
      'Abstract Data Types and Problem Solving',
      'Algorithm Design and Analysis',
    ],
  },
  th: {
    title: 'ประวัติการศึกษา',
    degree: 'วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์และสารสนเทศ',
    university: 'มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา',
    note: 'คาดว่าจะสำเร็จการศึกษาในช่วงสิ้นปี 2025',
    relevantCourses: 'หลักสูตรที่เกี่ยวข้อง:',
    courses: [
      'พื้นฐานการเขียนโปรแกรม (ไพธอน, จาวา)',
      'ระบบฐานข้อมูล',
      'ชนิดข้อมูลเชิงนามธรรมและการแก้ปัญหา',
      'การออกแบบอัลกอริธึมและการวิเคราะห์',
    ],
  },
};

function EducationSection({
  lang,
  sectionVariants,
  textPrimaryClass,
  textSecondaryClass,
  textMutedClass,
}) {
  const t = textContent[lang] || textContent.en;

  return (
    <motion.section
      key="education"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-3xl mx-auto p-8"
    >
      <h2 className={`text-3xl font-semibold mb-4 border-b pb-2 ${textPrimaryClass}`}>
        {t.title}
      </h2>
      <p className={`text-xl font-medium ${textPrimaryClass}`}>
        {t.degree}
      </p>
      <p className={textSecondaryClass}>
        {t.university}
      </p>
      <p className={`${textMutedClass} italic`}>
        {t.note}
      </p>

      <h3 className={`text-xl font-semibold mt-6 ${textPrimaryClass}`}>
        {t.relevantCourses}
      </h3>
      <ul className={`list-disc list-inside mt-2 ${textSecondaryClass}`}>
        {t.courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </motion.section>
  );
}

export default EducationSection;
