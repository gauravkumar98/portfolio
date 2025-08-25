const EXPERIENCE_START_DATE = new Date(2022, 6, 11);
function getExperienceDuration(startDate) {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  let result = "";
  if (years > 0) result += years + (years === 1 ? " year" : " years");
  if (months > 0) {
    if (result) result += " ";
    result += months + (months === 1 ? " month" : " months");
  }
  return result;
  
}
const exp_date = getExperienceDuration(EXPERIENCE_START_DATE);
const PROFILE = {
  name: "Gaurav Kumar",
  title: "Full Stack Developer",
  shortIntro: `Versatile and detail-oriented Full Stack Developer with ${exp_date} of experience in building scalable web applications using Java, Spring Boot, and Angular.`,
  tagline: "Passionate about clean, maintainable code and continuous improvement.",
  resumeUrl: "Gaurav_Kumar_Resume.pdf",
  contact: {
    email: "gauravkumar.en@gmail.com",
    phone: "+91-7273826351",
    location: "Hyderabad, India",
    links: [
      { label: "GitHub", url: "https://github.com/gauravkumar98" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/gauravkumarroy/" },
      { label: "Hackerrank", url: "https://www.hackerrank.com/profile/gauravkumarroy" }
    ]
  },
  skills: [
    "Java (8+)", "J2EE", "Spring Boot", "Spring Security", "Hibernate", "RESTful API Design",
    "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Jasmine", "Karma",
    "Oracle", "SQL",
    "Git", "GitHub", "Jenkins", "CI/CD", "SonarQube",
    "JUnit", "Mockito", "TDD", "BDD",
    "Splunk", "Caching strategies",
    "Generative AI", "ChatGPT integration", "Agentic AI",
    "LLM Integration", "System Design"
  ],
  experiences: [
    {
      company: "ADP Private Limited",
      link: "https://www.adp.com/",
      role: "Senior Member Technical",
      period: "July 2022 – Present",
      location: "Hyderabad, India",
      summary: "Worked on Health Compliance (ACA, USA) and New Hire Reporting (PRWORA, USA) projects.",
      details: [
        "Developed scalable REST APIs for filing and furnish workflows.",
        "Designed and built responsive, user-centric Angular UI for ACA compliance tracking.",
        "Created a ChatGPT-powered UI assistant to explain IRS Form 1095-C (Line 14/16), improving support and self-service efficiency.",
        "Integrated with third-party systems including Workday and internal ADP platforms using secure APIs.",
        "Contributed to automation of compliance processing pipelines and workflows.",
        "Created APIs and UI components for various sub-products as part of a strategic 'Land and Expand' initiative to onboard new clients.",
        "Designed and developed a new onboarding experience from scratch for New Hire Reporting.",
        "Developed a responsive UI to manage and verify new hire information.",
        "Implemented secure API integrations to fetch employee data from different sources like Workday, Mosaic, CDN."
      ]
    },
    {
      company: "Calsoft Inc",
      link: "https://www.calsoftinc.com/",
      role: "Trainee Software Engineer",
      period: "Jan 2022 – May 2022",
      location: "Pune, India",
      summary: "Enterprise-grade UI development and software testing.",
      details: [
        "Developed a custom UI for NetApp testing infrastructure.",
        "Improved QA workflows through front-end enhancements and automation.",
        "Gained solid experience in enterprise-grade UI development and software testing best practices."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech), Computer Science Engineering",
      school: "Jawaharlal Nehru Technological University Kakinada, Andhra Pradesh",
      period: "2018 – 2022",
      percentage: "7.39 CGPA"
    },
    {
      degree: "Senior Secondary (PCM)",
      school: "St. Kabir College, Bihar School Examination Board, Patna",
      period: "2018",
      percentage: "63.0%"
    }
  ],
  additional: [
    "Open to relocation and remote opportunities",
    "Passionate about clean code, system design, and emerging tech (e.g., GenAI)"
  ],
};