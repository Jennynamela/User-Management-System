# User Management System

![PHP](https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)
![Status](https://img.shields.io/badge/status-in%20development-orange)

## Overview

A full-stack learning project exploring user administration, account lifecycle management and communication between a browser-based frontend and a PHP backend.

## Project status

This project is under development. The user model, controller methods, frontend component skeletons and HTTP client are present. Database persistence, HTTP routing and complete forms are not yet implemented. The application is not ready for production use.

## Features and roadmap

- [x] User model with username, email and role attributes
- [x] Frontend and backend separation
- [x] HTTP client methods for user CRUD operations
- [x] Initial password recovery controller logic and mail utility
- [ ] Database schema and persistence with prepared statements
- [ ] REST API routing and request validation
- [ ] Complete user creation, editing and listing interfaces
- [ ] Password hashing and secure password reset tokens
- [ ] Authentication and role-based authorization
- [ ] Automated tests and reproducible local setup

## Technology stack

| Layer | Technologies |
| --- | --- |
| Frontend | HTML, CSS, JavaScript, TypeScript, Bootstrap 5 |
| Backend | PHP |
| Development server | lite-server (Node.js/npm) |
| Database | Not yet connected |

## Project structure

```text
backend/
  config/db_config.php
  controllers/UserController.php
  models/User.php
  utils/mail.php
frontend/
  public/index.html
  src/
    components/
    services/api.ts
    App.js
    bs-config.json
    package.json
  styles.css
```

## Getting started

Clone the repository:

```bash
git clone https://github.com/Jennynamela/User-Management-System.git
cd User-Management-System
```

PHP and Node.js/npm are required for further development. The frontend development dependency can be installed with `cd frontend/src && npm install`. A complete startup procedure is not available yet: the TypeScript build, static asset paths, backend routing and database initialization still need to be configured.

## Security

Use only fictional test data. Never commit real database credentials or mail secrets. Authentication, authorization, password hashing and secure reset-token handling must be completed before deployment.

## Author

[Jennynamela](https://github.com/Jennynamela)
