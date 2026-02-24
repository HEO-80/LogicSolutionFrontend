# LogicSolutions Frontend 🚚🗺️

[ES]
**LogicSolutions** es una plataforma web desarrollada con **Angular** orientada a la gestión logística. La aplicación permite a los usuarios la contratación de servicios de transporte (camiones, furgonetas) y el seguimiento en tiempo real de los envíos mediante la integración de servicios de mapas.

[EN]
**LogicSolutions** is a web platform built with **Angular** focused on logistics management. The application allows users to hire transport services (trucks, vans) and perform real-time tracking of shipments through map services integration.

---

## ✨ Características Principales | Key Features

### [ES]
* **Contratación de Transporte:** Interfaz intuitiva para seleccionar y contratar diferentes tipos de vehículos logísticos.
* **Seguimiento en Tiempo Real:** Integración con la API de Google Maps para la geolocalización y monitorización de rutas de los transportistas.
* **Panel de Gestión:** Dashboard centralizado para el control de estados de envíos y operativas logísticas.
* **Arquitectura Escalable:** Proyecto estructurado con Angular 13, optimizado para rendimiento y mantenibilidad.

### [EN]
* **Transport Hiring:** Intuitive interface to select and hire different types of logistics vehicles.
* **Real-time Tracking:** Google Maps API integration for geolocation and route monitoring of carriers.
* **Management Dashboard:** Centralized dashboard to control shipment statuses and logistics operations.
* **Scalable Architecture:** Project structured with Angular 13, optimized for performance and maintainability.

---

## 🛠️ Tecnologías Utilizadas | Tech Stack
* **Framework:** Angular 13.3.1
* **Language:** TypeScript
* **Maps Integration:** Google Maps API
* **Styling:** HTML5 / CSS (o preprocesadores si los usaste)

---

## 🏗️ Estructura del Proyecto | Project Structure
El código principal de la aplicación reside en la carpeta `src/`:
* `/app/components`: Componentes visuales reutilizables (formularios de contratación, visores de mapas).
* `/app/services`: Servicios inyectables para la comunicación con el backend (API) y la gestión de la lógica de negocio.
* `/app/models`: Interfaces de TypeScript para el tipado estricto de vehículos, rutas y usuarios.

---

## 🚀 Despliegue Local | Local Setup

### Prerrequisitos / Prerequisites
* Node.js y npm instalados.
* Angular CLI versión 13.x.
* (Opcional) Una API Key válida de Google Maps para visualizar el módulo de seguimiento.

### Instalación / Installation
1. Clonar el repositorio:

    git clone https://github.com/HEO-80/LogicSolutionFrontend.git

2. Entrar en el directorio del proyecto (ajusta el nombre si es necesario):

    cd LogicSolutions

3. Instalar las dependencias de Node:

    npm install

4. Levantar el servidor de desarrollo:

    ng serve

5. Navegar a `http://localhost:4200/` en tu navegador.

---

## 🔗 Backend Recomendado | Recommended Backend
Para el funcionamiento completo de la plataforma, incluyendo la persistencia de datos y la lógica de negocio profunda, este frontend se comunica con su respectiva API:
* [LogicSolutionBackend](https://github.com/HEO-80/LogicSolutionBackend)

---

## ✒️ Autor | Author
**HEO-80** - *Frontend Developer* - [LinkedIn](https://www.linkedin.com/in/hectorob)
