/**
 * Profile Configuration for Ankit
 * Technical Lead & Full-Stack / SaaS Engineer
 */

const PROFILE = {
  // Personal & Brand Information
  name: "Ankit",
  brandName: "ANKIT",
  currentRole: "Technical Lead / Full-Stack Architect",
  title: "Team Lead | Full-Stack & Backend Architect | Java • Spring Boot • Angular • Docker",
  headline: "Hi, I'm Ankit.",
  heroStatement: "Technical Lead building scalable end-to-end enterprise systems, multi-tenant SaaS platforms, and secure payment ecosystems.",
  heroSupportingText: "I lead engineering teams and architect complete enterprise software from frontend to backend to deployment — specializing in Java 21 (LTS), Spring Boot, Angular, MySQL, Docker, Linux, Nginx, and multi-gateway payment processing (CCAvenue, Razorpay, EasyPay, SmartHub, Paytm).",
  availabilityBadge: "Open to Technical Leadership & Product Opportunities",

  // Contact & Social Details
  email: "ac957423@gmail.com",
  githubUrl: "https://github.com/Ankitchauhan9574",
  linkedinUrl: "https://www.linkedin.com/in/ankit-chauhan-553173235/",
  resumeUrl: "assets/resume/Ankit-Resume.pdf",

  // 100% FREE Contact Form Email Service (Web3Forms Activated)
  formEndpoint: "https://api.web3forms.com/submit",
  web3formsAccessKey: "33f076bd-3f9c-423c-a762-2ef9488bd521",

  // Core Hero Stack
  heroStack: [
    { name: "Java 21 (LTS)", icon: "devicon-java-plain" },
    { name: "Spring Boot", icon: "devicon-spring-plain" },
    { name: "Angular", icon: "devicon-angularjs-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "Linux / Nginx", icon: "devicon-linux-plain" },
    { name: "Payment Gateways", icon: "devicon-creditcard" }
  ],

  // Technology Focus Cards (Hero Stats Replacement)
  focusAreas: [
    { category: "Leadership & Architecture", tech: "Team Lead • System Design", desc: "End-to-end delivery & SaaS architecture" },
    { category: "Backend & Microservices", tech: "Java 21 + Spring Boot", desc: "Robust REST APIs & enterprise integrations" },
    { category: "Payments & Security", tech: "CCAvenue • Razorpay • SmartHub", desc: "Multi-gateway checkout & AES/RSA crypto" },
    { category: "DevOps & Containers", tech: "Docker + Linux + Nginx", desc: "Containerized environments & automated deployments" }
  ],

  // What I Build (Engineering Capabilities)
  services: [
    {
      id: "end-to-end-systems",
      title: "End-to-End Enterprise Systems",
      description: "Lead and execute complete system lifecycles — from Angular SPAs and Spring Boot microservices to database design, Dockerized environments, and cloud infrastructure.",
      icon: "layers",
      tags: ["Full-Stack", "Team Leadership", "Architecture", "Microservices"]
    },
    {
      id: "payment-management",
      title: "Payment Gateway Ecosystems",
      description: "Design and implement secure multi-gateway payment routing with CCAvenue, Razorpay, EasyPay, HDFC SmartHub, and Paytm, including webhook verification and reconciliation.",
      icon: "credit-card",
      tags: ["CCAvenue", "Razorpay", "EasyPay", "SmartHub", "Paytm"]
    },
    {
      id: "saas-applications",
      title: "Multi-Tenant SaaS Platforms",
      description: "Build tenant-aware, scalable e-procurement and SaaS engines with secure role-based access, dynamic workflow execution, and schema isolation.",
      icon: "server",
      tags: ["Multi-Tenant", "Procurement Tech", "RBAC", "SaaS Arch"]
    },
    {
      id: "devops-infrastructure",
      title: "Docker & Production DevOps",
      description: "Deploy and manage resilient production environments using Docker containerization, Linux servers, Nginx reverse proxies, Tomcat, HTTPS SSL, and automated CI/CD pipelines.",
      icon: "cpu",
      tags: ["Docker", "Linux", "Nginx", "Tomcat", "GitLab CI"]
    }
  ],

  // Technical Skills
  skills: {
    leadership: [
      "Technical Team Leadership", "System Architecture", "End-to-End Delivery",
      "Sprint Planning", "Code Reviews", "Technical Mentorship", "Release Management"
    ],
    backend: [
      "Java", "Java 21 (LTS)", "Spring Boot", "Spring MVC", "Spring Data JPA",
      "Hibernate", "REST APIs", "WebSocket", "Spring Mail", "Maven"
    ],
    payments: [
      "CCAvenue", "Razorpay", "EasyPay (ICICI)", "SmartHub (HDFC)",
      "Paytm Gateway", "Payment Webhooks", "Checksum / Hash Validation", "Transaction Reconciliation"
    ],
    frontend: [
      "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3",
      "SCSS", "JSP", "JSTL", "Bootstrap"
    ],
    database: [
      "MySQL", "SQL", "Stored Procedures", "Transactions (ACID)",
      "Indexing", "Database Design", "Query Optimization"
    ],
    devops: [
      "Docker", "Linux (Ubuntu/CentOS)", "Nginx", "Apache Tomcat",
      "Git", "GitLab CI/CD", "SSH", "SSL / HTTPS", "Reverse Proxy", "Server Troubleshooting"
    ],
    security: [
      "RSA", "AES", "Encryption / Decryption", "JWT Authentication",
      "RBAC", "Secure API Communication", "HMAC Signatures"
    ],
    documentProcessing: [
      "Apache POI", "PDFBox", "Tess4J", "OCR Data Extraction"
    ]
  },

  // Selected Engineering Experience & Products
  engineeringProjects: [
    {
      id: "procurement-platforms",
      title: "Enterprise SaaS & Procurement Core Platform",
      badge: "High-Traffic Production SaaS Engine",
      description: "Leading technical architecture and end-to-end engineering for high-traffic procurement and tendering SaaS platforms handling thousands of transactions, bids, and enterprise vendors.",
      technologies: [
        "Java 21 (LTS)", "Spring Boot", "Angular", "MySQL", "Docker",
        "Linux", "Nginx", "REST APIs", "WebSocket", "JPA"
      ],
      highlights: [
        "Architected scalable backend microservices and responsive Angular frontends",
        "Engineered multi-tenant isolation, dynamic document generation, and role-based workflows",
        "Streamlined production deployments with Docker containerization and Nginx reverse proxies",
        "Led engineering team across sprint planning, code quality, and production support"
      ]
    },
    {
      id: "payment-gateway-engine",
      title: "Multi-Gateway Payment Integration Engine",
      badge: "Financial & Transaction Infrastructure",
      description: "Unified payment processing system supporting multi-aggregator routing, automated checksum/signature validation, callback webhooks, and ledger reconciliation.",
      technologies: [
        "CCAvenue", "Razorpay", "EasyPay", "SmartHub", "Paytm",
        "Java 21", "Spring Boot", "REST APIs", "MySQL", "HMAC/AES"
      ],
      highlights: [
        "Seamless integration with CCAvenue, Razorpay, ICICI EasyPay, HDFC SmartHub & Paytm",
        "Idempotent webhook handlers and automatic payment status polling",
        "Cryptographic checksum verification and audit logging",
        "High-reliability failover and automated reconciliation workflows"
      ]
    },
    {
      id: "ebg-platform",
      title: "Enterprise eBG Management Platform",
      badge: "Enterprise Fintech & Guarantee Workflows",
      description: "Enterprise platform for managing electronic bank guarantee workflows with external system integrations, document processing, secure communication and notification workflows.",
      technologies: [
        "Java 21", "Spring Boot", "Angular / JSP", "MySQL", "JPA",
        "Hibernate", "REST APIs", "RSA", "AES", "WebSocket", "Docker", "Linux"
      ],
      highlights: [
        "End-to-end electronic bank guarantee lifecycle management",
        "Document parsing & generation via PDFBox and Apache POI",
        "Encrypted payload exchange utilizing RSA and AES algorithms",
        "Real-time status updates via WebSocket channels"
      ]
    }
  ],

  // Personal Projects (Building in Public - Coming Soon)
  personalProjects: [
    {
      title: "Universal Payment Gateway Orchestrator",
      status: "Coming Soon",
      tag: "Fintech / Payment Architecture",
      description: "A lightweight Java/Spring Boot framework providing unified API abstractions for CCAvenue, Razorpay, SmartHub, and Paytm with automated webhook verification."
    },
    {
      title: "Dockerized Multi-Tenant SaaS Starter Kit",
      status: "Coming Soon",
      tag: "SaaS Architecture",
      description: "Production-ready Docker compose stack with Java 21, Spring Boot 3, Angular 17, Nginx proxy, and isolated MySQL schemas."
    }
  ],

  // About Section Details
  about: {
    headline: "I am a Technical Lead who architects, builds, and deploys complete systems end-to-end.",
    paragraphs: [
      "Serving as Team Lead for enterprise SaaS and procurement tech, where I lead the engineering of mission-critical platforms handling heavy traffic and enterprise transactions.",
      "I don't just write backend code — I drive the entire product engineering lifecycle: from Angular UI design and Spring Boot microservices to multi-gateway payment processing (CCAvenue, Razorpay, EasyPay, SmartHub, Paytm), database schemas, Docker containerization, and production Linux/Nginx infrastructure.",
      "I take pride in mentoring engineers, enforcing clean architecture standards, ensuring robust security with RSA/AES, and maintaining high-availability production environments."
    ]
  },

  // Engineering Approach
  approach: [
    {
      title: "End-to-End Ownership",
      description: "Architecting the full stack from Angular UI and Spring Boot APIs to Docker containers, databases, and Linux servers.",
      icon: "layers"
    },
    {
      title: "Reliable Payments",
      description: "Designing fault-tolerant payment flows across CCAvenue, Razorpay, SmartHub, and Paytm with secure checksums and webhooks.",
      icon: "credit-card"
    },
    {
      title: "Clean Code & Design",
      description: "Readable, modular, and maintainable architecture with clear separation of concerns.",
      icon: "code"
    },
    {
      title: "Security & Encryption",
      description: "Enterprise-grade security using RSA, AES, HMAC verification, JWT, and role-based access control.",
      icon: "shield"
    },
    {
      title: "Production & DevOps",
      description: "Containerized deployments with Docker, Nginx reverse proxy tuning, and proactive telemetry.",
      icon: "cpu"
    }
  ],

  // Professional Experience Timeline
  experience: [
    {
      role: "Team Lead / Technical Lead",
      company: "Enterprise Software & SaaS Platforms",
      period: "Present",
      location: "Enterprise SaaS & Procurement Tech",
      type: "Full-time",
      responsibilities: [
        "Leading end-to-end engineering and technical architecture for high-volume enterprise platforms",
        "Architecting full-stack enterprise solutions using Java 21 (LTS), Spring Boot, Angular, and MySQL",
        "Integrating and managing comprehensive multi-payment gateways: CCAvenue, Razorpay, ICICI EasyPay, HDFC SmartHub, and Paytm",
        "Managing Docker containerization, Linux servers, Nginx reverse proxies, Tomcat, and production deployments",
        "Implementing cryptographic security using RSA, AES encryption, and HMAC checksums",
        "Document processing and automated extraction with Apache POI, PDFBox, and Tess4J OCR",
        "Guiding engineering team members, conducting code reviews, and managing GitLab CI/CD pipelines",
        "Maintaining high availability, database query tuning, and zero-downtime production releases"
      ]
    }
  ]
};

// Export for browser or module environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROFILE;
}
