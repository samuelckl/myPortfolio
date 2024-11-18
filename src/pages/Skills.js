import SkillCard from "../pages/components/SkillCard";
import {
  FaLaptopCode,
  FaCogs,
  FaCloud,
  FaDatabase,
  FaApple,
  FaChalkboardTeacher,
  FaDrawPolygon,
  FaPenFancy,
  FaTools,
} from "react-icons/fa";

export default function Skills() {
  return (
    <div className="flex mt-16 justify-center items-top min-h-screen bg-gradient-to-r from-orange-50 to-orange-200 select-none">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mx-8">
        <SkillCard
          logo={FaLaptopCode}
          title="Front-end Development"
          description="Proficient in building responsive and dynamic UIs using React, Swift, TailwindCSS, and Material UI"
        />
        <SkillCard
          logo={FaApple}
          title="iOS Development"
          description="Experienced in building iOS applications using Swift, including deployment and UI/UX design"
        />
        <SkillCard
          logo={FaCogs}
          title="Back-end Development"
          description="Skilled in REST API development using Node.js, Express, and integrating with cloud services"
        />
        <SkillCard
          logo={FaCloud}
          title="Cloud Computing"
          description="Experience with AWS services like S3 and Lambda for deploying and managing cloud-based applications"
        />
        <SkillCard
          logo={FaDatabase}
          title="Database Management"
          description="Proficient in MySQL, MongoDB, and database schema design for modern applications"
        />
        <SkillCard
          logo={FaChalkboardTeacher}
          title="Software Engineering"
          description="Strong foundation in software engineering principles, agile methodologies, and collaborative development"
        />
        <SkillCard
          logo={FaDrawPolygon}
          title="System Design"
          description="Capable of designing scalable and efficient systems with a focus on maintainability and performance"
        />
        <SkillCard
          logo={FaTools}
          title="DevOps & Collaboration Tools"
          description="Proficient in Docker, Terraform, GitHub for version control, and experienced with collaboration tools like Miro, Trello, and Jira"
        />

        <SkillCard
          logo={FaPenFancy}
          title="Design Tools"
          description="Proficient in using Adobe Illustrator, Photoshop, and Figma for creating visually appealing designs and prototypes"
        />
      </div>
    </div>
  );
}
