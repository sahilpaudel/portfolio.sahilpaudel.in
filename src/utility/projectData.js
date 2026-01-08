export const projects = [
  {
    name: "Thyrocare LIMS Migration",
    stack: ["Java", "Spring Boot", "Kafka", "Redis", "MySQL", "AWS"],
    logo: "pharmeasy.png",
    contribution: "Modernized LIMS Platform",
    description:
      "Redesigned and modernized Thyrocare’s legacy LIMS into a modular Spring Boot architecture with an event-driven Kafka workflow. Delivered high-throughput sample ingestion (~80–90k/day) with an ~83% P95 improvement. Built analyzer automation to normalize, process, and auto-release ~2.3M parameters/week, cutting manual involvement by one-third and improving consistency across 500+ labs.",
    year: 2025
  },
  {
    name: "Analyzer PDF Automation",
    stack: ["Java", "Spring Boot", "AWS S3"],
    logo: "pharmeasy.png",
    contribution: "Automated PDF Ingestion",
    description:
      "Architected and deployed a nationwide automated PDF ingestion system that monitors analyzer machines, validates generated PDF reports, parses metadata, and uploads them to AWS S3. Implemented fault-tolerant watchers, deduplication, and checksum validation. Empowered the diagnostics business to launch a premium report­-based SKU, driving additional revenue with zero new operational costs.",
    year: 2025
  },
  {
    name: "Result Release Engine",
    stack: ["Java", "Spring Boot", "Redis", "MySQL"],
    logo: "pharmeasy.png",
    contribution: "Optimized Release Engine",
    description:
      "Replaced a large MySQL stored procedure with a high-performance Spring Boot API and Redis-based caching. Reduced P95 latency by ~69%, increased release capacity from 300 → 700 parameters per request, and supported ~115k releases per day. Improved reliability, observability, and reduced DB load during peak operations.",
    year: 2024
  },
  {
    name: "Catalog API Redesign",
    stack: ["NodeJS", "Koa", "Redis", "Kafka", "MySQL"],
    logo: "pharmeasy.png",
    contribution: "Redesigned Catalog APIs",
    description:
      "Led the modularization of PharmEasy’s Product Display API using KoaJS with layered caching, fallback strategies, and decoupled transformation logic. Achieved ~63% improvement in P95 latency and significantly reduced page-load times across mobile and web surfaces serving millions of users.",
    year: 2022
  },
  {
    name: "Omnicron ES Pipeline",
    stack: ["Python", "Kafka", "NodeJS", "Redis"],
    logo: "pharmeasy.png",
    contribution: "Built ES Pipeline",
    description:
      "Developed the Elasticsearch ingestion pipeline’s consumer component, enriching MySQL data using internal APIs, caching in Redis, and generating pincode-level serviceability documents. Reduced ingestion time from 8–9 hours to ~1.5 hours and enabled near–real-time sync of single SKU updates for improved search accuracy.",
    year: 2022
  },
  {
    name: "Oracle Q&A Platform",
    stack: ["Go", "Kafka", "React", "Ant Design"],
    logo: "pharmeasy.png",
    contribution: "Developed Q&A Platform",
    description:
      "Built Go-based CRUD APIs, integrated SMS workflows, and developed Kafka consumers for async answer processing. Delivered the full React/AntD dashboard used by in-house medical experts to respond efficiently to customer product queries. Also mentored an intern throughout the project lifecycle.",
    year: 2021
  },
  {
    name: "Cull A/B Dashboard",
    stack: ["Go", "MongoDB", "React", "Material-UI"],
    logo: "pharmeasy.png",
    contribution: "Built A/B Dashboard",
    description:
      "Designed and built a full-fledged A/B experimentation dashboard using React and Material UI, with Go-based backend support. Enabled creation, monitoring, and analysis of experiment groups, backed by MongoDB for versioning and variant management. Streamlined product experimentation workflows.",
    year: 2020
  },
  {
    name: "Cyborg Validation Engine",
    stack: ["Spring Boot", "MongoDB", "ReactJS", "Material-UI"],
    logo: "yodlee.png",
    contribution: "Built Validation Engine",
    description:
      "Individually developed a Spring Boot validation engine to analyze financial-institution API responses for Open Banking compliance. Stored versioned specs in MongoDB and created a React dashboard for manual data validation and comparison. Greatly improved onboarding quality and compliance accuracy for partner integrations.",
    year: 2019
  },
  {
    name: "PAR Scraping Technique",
    stack: ["Core Java", "Vanilla JavaScript", "Selenium"],
    logo: "yodlee.png",
    contribution: "Invented PAR Scraping",
    description:
      "Co-invented the Page-As-Response (PAR) approach to bypass heavy web-page loads by directly invoking underlying network requests through JavaScriptExecutor in Selenium. Reduced scraping latency from 200–220 seconds to ~40–45 seconds and significantly reduced failures for banks with complex JS-heavy pages.",
    year: 2019
  }
];
