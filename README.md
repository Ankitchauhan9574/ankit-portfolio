# Ankit Portfolio

A personal developer portfolio showcasing my experience, technical skills, software engineering work, and professional background as a **Team Lead & Full-Stack Architect**.

---

## 🚀 Project Overview

This portfolio is an enterprise-grade, responsive single-page application built to present technical capabilities across:
- **Full-Stack & Backend Systems:** Java 17, Spring Boot, Angular, REST APIs, Microservices, WebSocket
- **Payment Gateway Ecosystems:** CCAvenue, Razorpay, ICICI EasyPay, HDFC SmartHub, Paytm
- **DevOps & Containers:** Docker, Linux (Ubuntu/CentOS), Nginx, Apache Tomcat, GitLab CI/CD
- **Persistence & Architecture:** MySQL (ACID, Indexing), Multi-Tenant SaaS Architecture, RSA/AES Cryptography

---

## 🛠️ Tech Stack

* **Structure:** HTML5 & Semantic Web Elements
* **Styling:** Tailwind CSS (via CDN) with tailored dark theme, animations & glassmorphism
* **Interactivity & State:** Alpine.js (Reactive controllers, sticky navigation, form handling)
* **Fonts:** Google Fonts (`PT Sans`, `DM Sans`, `JetBrains Mono`)
* **Form & Inquiries:** Web3Forms API (100% Free instant email delivery directly to inbox)
* **Version Control:** Git
* **Deployment & CI/CD:** GitHub Pages & GitHub Actions

---

## 📂 Repository Structure

```text
├── index.html                  # Main single-page portfolio application
├── favicon.svg                 # Developer monogram favicon
├── robots.txt                  # Search engine crawling rules
├── sitemap.xml                 # XML sitemap for SEO indexing
├── .gitignore                  # Git ignore definitions
├── .github/
│   └── workflows/
│       ├── deploy.yml          # Automated GitHub Pages CI/CD workflow
│       └── release.yml         # GitHub release workflow
├── assets/
│   └── resume/
│       ├── Ankit-Resume.pdf    # PDF resume asset
│       └── README.md
├── src/
│   └── data/
│       └── profile.js          # Centralized configuration for all details
└── README.md
```

---

## 💻 Local Development Instructions

Because this portfolio uses clean, standard web technologies (HTML5, Tailwind CSS, Alpine.js), no heavy node compilation is required.

### 1. Direct Browser Preview
Double-click `index.html` or open it in any modern browser.

### 2. Local HTTP Server (Recommended)
Using Python (built into Windows/Linux/macOS):
```bash
python -m http.server 8080
```
Or using Node/npx:
```bash
npx serve .
```

Visit: `http://localhost:8080`

---

## 🌐 Free Deployment (GitHub Pages)

This repository includes automated CI/CD deployment via GitHub Actions:

1. Push your code to the `main` branch.
2. In your GitHub repository, go to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy the website.
5. Your live portfolio will be available at:
   `https://Ankitchauhan9574.github.io/ankit-portfolio/`

---

## ⚙️ Customization Guide

All personal links, skills, roles, and services are centralized in:

👉 `src/data/profile.js`

Edit this file to update any information across the portfolio instantly.

---

## 📄 License

Licensed under the [MIT License](LICENSE).
