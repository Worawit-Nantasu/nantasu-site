import React from 'react';
import { motion } from 'framer-motion';

const textContent = {
  en: {
    title: 'Work Experience',
    coopTitle: 'Intern',
    coopCompany: 'Lodash (Thailand) Co., Ltd. | Nov 2024 – Mar 2025',
    coopDetails: [
      'Collaborated with the team to develop and improve the web system',
      'Gained experience using JSON and working with Git/GitHub for code management',
      'Learned to develop basic functions using React and Node.js',
    ],
    nightTitle: 'Night Shift Staff (Full-time)',
    nightCompany: "Lotus's Go Fresh – CP Axtra Public Company Limited | Jun 2024 – Nov 2024",
    nightDetails: [
      'Provided services to over 100 customers per shift with precision and accuracy',
      'Managed cash handling with 0% discrepancies throughout the entire work period',
      'Developed skills to work under pressure and adapted to balancing full-time work with studies',
    ],
  },
  th: {
    title: 'ประสบการณ์ทำงาน',
    coopTitle: 'นักศึกษาฝึกงาน',
    coopCompany: 'บริษัท Lodash (Thailand) จำกัด | พ.ย. 2024 – มี.ค. 2025',
    coopDetails: [
      'ร่วมกับทีมพัฒนาระบบเว็บและปรับปรุงฟังก์ชันต่าง ๆ',
      'ได้เรียนรู้การใช้งาน JSON และการจัดการโค้ดด้วย Git/GitHub',
      'ได้เรียนรู้การพัฒนาฟังก์ชันพื้นฐานโดยใช้ React และ Node.js',
    ],
    nightTitle: 'พนักงานกะดึก (เต็มเวลา)',
    nightCompany: 'Lotus’s Go Fresh – บริษัท ซีพี แอ็กซ์ตร้า จำกัด (มหาชน) | มิ.ย. 2024 – พ.ย. 2024',
    nightDetails: [
      'ให้บริการลูกค้ากว่า 100 คนต่อกะ ด้วยความแม่นยำและรวดเร็ว',
      'บริหารการจัดการเงินสดโดยไม่มีความคลาดเคลื่อนตลอดระยะเวลาการทำงาน',
      'พัฒนาทักษะการทำงานภายใต้ความกดดันและสามารถทำงานควบคู่กับการเรียนได้',
    ],
  },
};

function ExperienceSection({ lang, sectionVariants, textPrimaryClass, textSecondaryClass }) {
  const t = textContent[lang] || textContent.en;

  return (
    <motion.section
      key="experience"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-3xl mx-auto p-8"
    >
      <h2 className={`text-3xl font-semibold mb-4 border-b pb-2 ${textPrimaryClass}`}>
        {t.title}
      </h2>

      <div className="mb-6">
        <h3 className={`text-xl font-bold ${textPrimaryClass}`}>{t.coopTitle}</h3>
        <p className={textSecondaryClass}>{t.coopCompany}</p>
        <ul className={`list-disc list-inside mt-2 ${textSecondaryClass}`}>
          {t.coopDetails.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className={`text-xl font-bold ${textPrimaryClass}`}>{t.nightTitle}</h3>
        <p className={textSecondaryClass}>{t.nightCompany}</p>
        <ul className={`list-disc list-inside mt-2 ${textSecondaryClass}`}>
          {t.nightDetails.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default ExperienceSection;
