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
  shortIntro: `Results-driven Full Stack Developer with 4+ years of experience architecting and delivering Java/Spring Boot microservices and enterprise Angular applications at scale.`,
  tagline: "Focused on modernizing systems, improving performance, and building reliable AI-enabled product experiences.",
  resumeUrl: "Gaurav_Kumar_Resume.pdf",
  contact: {
    email: "gauravkumar.en@gmail.com",
    phone: "+91 7273826351",
    location: "Hyderabad, India",
    links: [
      { label: "GitHub", url: "https://github.com/gauravkumar98" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/gauravkumarroy/" },
      { label: "Hackerrank", url: "https://www.hackerrank.com/profile/gauravkumarroy" }
    ]
  },
  skills: [
    "Java 11/17/21",
    "Spring",
    "Spring Boot 3",
    "Spring MVC",
    "Spring Security",
    "Spring Data JPA",
    "Hibernate 6",
    "HikariCP",
    "RESTful APIs",
    "OAuth2/JWT",
    "Microservices",
    "AWS Cloud Map",
    "Amazon API Gateway",
    "Application Load Balancer",
    "Feign Client",
    "Resilience4j",
    "Kafka",
    "Angular 14/21",
    "Node.js 14/22",
    "TypeScript",
    "JavaScript",
    "RxJS",
    "Reactive Forms",
    "Ag-Grid",
    "Highcharts",
    "SCSS/CSS",
    "Jasmine",
    "Karma",
    "Jest",
    "AWS ECS",
    "Lambda",
    "EventBridge",
    "SSM",
    "S3",
    "Spring AI",
    "Agentic AI",
    "Prompt Engineering",
    "GitHub Copilot",
    "Amazon Q",
    "Kiro",
    "AI-DLC",
    "SpecKit",
    "PostgreSQL",
    "Oracle",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "CI/CD",
    "Git",
    "Splunk",
    "JUnit",
    "Mockito",
    "TDD",
    "System Design",
    "Design Patterns",
    "SOLID Principles",
    "OOP",
    "API Design",
    "Event-Driven Architecture",
    "Scalability & Fault Tolerance"
  ],
  skillGroups: [
    {
      category: "Backend",
      skills: [
        "Java 11/17/21",
        "Spring",
        "Spring Boot 3",
        "Spring MVC",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate 6",
        "HikariCP",
        "RESTful APIs",
        "OAuth2/JWT",
        "Microservices",
        "Feign Client",
        "Resilience4j",
        "Kafka",
        "API Design",
        "System Design",
        "Design Patterns",
        "SOLID Principles",
        "OOP"
      ]
    },
    {
      category: "Frontend",
      skills: [
        "Angular 14/21",
        "Node.js 14/22",
        "TypeScript",
        "JavaScript",
        "RxJS",
        "Reactive Forms",
        "Ag-Grid",
        "Highcharts",
        "SCSS/CSS",
        "Jasmine",
        "Karma",
        "Jest"
      ]
    },
    {
      category: "Cloud & AI",
      skills: [
        "AWS Cloud Map",
        "Amazon API Gateway",
        "Application Load Balancer",
        "AWS ECS",
        "Lambda",
        "EventBridge",
        "SSM",
        "S3",
        "Spring AI",
        "Agentic AI",
        "Prompt Engineering",
        "GitHub Copilot",
        "Amazon Q",
        "Kiro",
        "AI-DLC",
        "SpecKit",
        "ChatGPT integration",
        "LLM Integration"
      ]
    },
    {
      category: "Data & DevOps",
      skills: [
        "PostgreSQL",
        "Oracle",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "CI/CD",
        "Git",
        "Splunk",
        "JUnit",
        "Mockito",
        "TDD",
        "Event-Driven Architecture",
        "Scalability & Fault Tolerance"
      ]
    }
  ],
  experiences: [
    {
      company: "ADP Private Limited",
      link: "https://www.adp.com/",
      role: "Senior Software Developer",
      period: "July 2022 – Present",
      location: "Hyderabad, India",
      summary: "Architected and delivered distributed microservices and enterprise Angular applications for ACA compliance and onboarding platforms, leveraging modern Java/Spring Boot, Angular, and AWS technologies.",
      projects: [
        {
          name: "ACA — Health Compliance & Distributed Systems Modernization",
          summary: "Built and modernized a distributed microservices platform for ACA compliance processing and production support.",
          details: [
            "Architected a distributed microservices ecosystem on AWS ECS with AWS Cloud Map for dynamic service discovery and Amazon API Gateway / ALB for centralized request routing and rate limiting.",
            "Used GitHub Copilot, Amazon Q, Kiro, AI-DLC, and SpecKit to drive Java 11→17 and 17→21 and Spring / Spring Boot 3 modernization, reducing manual effort in code analysis, refactoring, and dependency upgrades.",
            "Diagnosed and resolved critical multithreading, synchronization, and concurrency defects in distributed services to improve system stability and eliminate race-condition-driven production issues.",
            "Re-architected database connectivity from C3P0 to HikariCP, reducing connection overhead and increasing PostgreSQL throughput by 25%.",
            "Owned production and QA issue resolution end-to-end by tracing failures across UI, REST APIs, services, and logs and delivering permanent fixes.",
            "Built enterprise Angular screens integrated with Spring Boot REST APIs using Reactive Forms, reusable components, and RxJS-based async workflows.",
            "Delivered interactive dashboards with ag-Grid Master-Detail and Highcharts for performance-focused compliance reporting and usability.",
            "Used AWS EventBridge and Kafka to decouple high-volume compliance processing services and ensure resilience during peak loads.",
            "Designed an Agentic AI framework on Spring AI to automate IRS Form 1095-C validation using structured LLM instructions and prompt engineering, creating reusable skills, instructions, and agents across the team."
          ]
        },
        {
          name: "NHR / PRWORA — Greenfield Reporting Platform",
          summary: "Led the full-stack design and delivery of an enterprise onboarding application that automated client onboarding and reporting workflows.",
          details: [
            "Led greenfield development of an enterprise onboarding application, integrating Spring Boot 3 microservices with a reactive Angular frontend from architecture through delivery.",
            "Architected automated onboarding workflows for Workday, Mosaic, and CDN integrations using Feign Client for sync data exchange and Kafka for async orchestration.",
            "Built JasperReports-based monthly PDF reporting and scheduled billing batch jobs with automated email notifications, reducing manual bottlenecks and strengthening error handling and retry logic.",
            "Used AWS SSM for centralized secrets and configuration management and deployed services on AWS ECS across Dev, QA, and Prod.",
            "Designed service boundaries and sync vs async flows across Workday, Mosaic, and CDN integrations to balance consistency, scalability, and fault tolerance."
          ]
        }
      ]
    },
    {
      company: "Calsoft Inc",
      link: "https://www.calsoftinc.com/",
      role: "Trainee Software Engineer",
      period: "Jan 2022 – May 2022",
      location: "Pune, India",
      summary: "Worked on the NETAPP project, developing Angular-based UI solutions for testing infrastructure and QA automation workflows.",
      projects: [
        {
          name: "NetApp Testing Infrastructure — Angular UI Development",
          summary: "Developed custom front-end workflows for NetApp testing infrastructure with automated reporting and verification support.",
          details: [
            "Developed a custom UI for NetApp testing infrastructure using Angular and TypeScript to automate report generation and QA verification.",
            "Collaborated in an Agile/Scrum environment and ensured code quality with JUnit and Mockito unit testing.",
            "Improved front-end and QA workflows through reusable components, automation, and strong testing practices."
          ]
        }
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      school: "JNTU Kakinada, Andhra Pradesh",
      period: "2018 – 2022",
      percentage: "7.39 CGPA"
    },
    {
      degree: "Senior Secondary (PCM)",
      school: "St. Kabir College, Patna",
      period: "2018",
      percentage: "63.0%"
    }
  ],
  additional: [
    "Early adopter of AI-assisted software development using GitHub Copilot, Amazon Q, Kiro, AI-DLC, and SpecKit.",
    "Open to relocation and remote opportunities.",
    "Passionate about clean code, system design, modernization, and AI-enabled engineering."
  ]
};