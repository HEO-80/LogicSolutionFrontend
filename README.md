<div align="center">

# 🚚 LogicSolution Frontend — Logistics Management Platform

<img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>

**🌍 [English](#-english-version) · 🇪🇸 [Español](#-versión-en-español)**

<br/>

*Plataforma web de gestión logística — contratación de transportes y seguimiento en tiempo real con Google Maps.*

</div>

---

## 🇪🇸 Versión en Español

### 📝 Descripción

**LogicSolution Frontend** es una aplicación web desarrollada con **Angular 13** orientada a la gestión logística. Permite contratar servicios de transporte (camiones, furgonetas) y realizar el seguimiento en tiempo real de los envíos mediante integración con la **API de Google Maps**.

> 🔗 **Proyecto completo:** este frontend se comunica con [LogicSolutionBackend](https://github.com/HEO-80/LogicSolutionBackend) — API REST en .NET 5.0 / C#.

---

### ✨ Características Principales

- 🚛 **Contratación de transporte** — interfaz intuitiva para seleccionar y contratar vehículos logísticos
- 🗺️ **Seguimiento en tiempo real** — Google Maps API para geolocalización y monitorización de rutas
- 📊 **Panel de gestión** — dashboard centralizado para control de envíos y operativas
- 🔷 **TypeScript estricto** — interfaces tipadas para vehículos, rutas y usuarios
- 📱 **Responsive** — diseñado para cualquier dispositivo

---

### 🛠️ Tech Stack

| Área | Tecnología |
|:---|:---|
| Framework | Angular 13.3.1 |
| Lenguaje | TypeScript |
| Mapas | Google Maps API |
| Estilos | HTML5 / CSS3 |
| Backend | .NET 5.0 REST API |

---

### 🏗️ Estructura del Proyecto
```
LogicSolutions/
└── src/
    └── app/
        ├── components/     # Componentes visuales reutilizables
        │                   # (formularios de contratación, visores de mapas)
        ├── services/       # Comunicación con el backend y lógica de negocio
        └── models/         # Interfaces TypeScript — vehículos, rutas, usuarios
```

---

### 🚀 Instalación y Ejecución Local

**Prerrequisitos**
- [Node.js](https://nodejs.org/) + npm
- Angular CLI 13.x → `npm install -g @angular/cli@13`
- API Key de Google Maps *(opcional — necesaria para el módulo de seguimiento)*

**1. Clonar el repositorio**
```bash
git clone https://github.com/HEO-80/LogicSolutionFrontend.git
cd LogicSolutions
```

**2. Instalar dependencias**
```bash
npm install
```

**3. Configurar Google Maps** *(opcional)*

Añade tu API Key en el archivo de entorno correspondiente:
```typescript
// src/environments/environment.ts
export const environment = {
  googleMapsApiKey: 'TU_API_KEY_AQUI'
};
```

**4. Levantar el servidor de desarrollo**
```bash
ng serve
```

Abre `http://localhost:4200/` en tu navegador.

---

### 🔗 Proyecto Completo (Fullstack)

| Repo | Rol | Tech |
|:---|:---|:---|
| [`LogicSolutionFrontend`](https://github.com/HEO-80/LogicSolutionFrontend) *(este)* | 🖥️ Cliente web — UI e integración de mapas | Angular 13 / TypeScript |
| [`LogicSolutionBackend`](https://github.com/HEO-80/LogicSolutionBackend) | 🔧 REST API — lógica de negocio y datos | .NET 5.0 / C# |

---

### 🧑‍💻 Autor

**Héctor Oviedo** — Fullstack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hectorob/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/HEO-80)

---
---

## 🇬🇧 English Version

### 📝 Description

**LogicSolution Frontend** is a web application built with **Angular 13** focused on logistics management. It allows users to hire transport services (trucks, vans) and perform real-time shipment tracking through **Google Maps API** integration.

> 🔗 **Full project:** this frontend communicates with [LogicSolutionBackend](https://github.com/HEO-80/LogicSolutionBackend) — REST API in .NET 5.0 / C#.

---

### ✨ Key Features

- 🚛 **Transport hiring** — intuitive interface to select and hire logistics vehicles
- 🗺️ **Real-time tracking** — Google Maps API for geolocation and route monitoring
- 📊 **Management dashboard** — centralized control of shipments and operations
- 🔷 **Strict TypeScript** — typed interfaces for vehicles, routes and users
- 📱 **Responsive** — designed for any device

---

### 🛠️ Tech Stack

| Area | Technology |
|:---|:---|
| Framework | Angular 13.3.1 |
| Language | TypeScript |
| Maps | Google Maps API |
| Styling | HTML5 / CSS3 |
| Backend | .NET 5.0 REST API |

---

### 🚀 Local Setup

**Prerequisites**
- [Node.js](https://nodejs.org/) + npm
- Angular CLI 13.x → `npm install -g @angular/cli@13`
- Google Maps API Key *(optional — required for tracking module)*

**1. Clone the repository**
```bash
git clone https://github.com/HEO-80/LogicSolutionFrontend.git
cd LogicSolutions
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure Google Maps** *(optional)*
```typescript
// src/environments/environment.ts
export const environment = {
  googleMapsApiKey: 'YOUR_API_KEY_HERE'
};
```

**4. Start development server**
```bash
ng serve
```

Open `http://localhost:4200/` in your browser.

---

### 🔗 Full Stack Project

| Repo | Role | Tech |
|:---|:---|:---|
| [`LogicSolutionFrontend`](https://github.com/HEO-80/LogicSolutionFrontend) *(this)* | 🖥️ Web client — UI & maps integration | Angular 13 / TypeScript |
| [`LogicSolutionBackend`](https://github.com/HEO-80/LogicSolutionBackend) | 🔧 REST API — business logic & data | .NET 5.0 / C# |

---

### 🧑‍💻 Author

**Héctor Oviedo** — Fullstack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hectorob/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/HEO-80)

---

<div align="center">
  <sub>Proyecto Final de Ciclo · <strong>Héctor Oviedo</strong> · Zaragoza, España</sub>
</div>
