# 📝 Daily Todo List Web Application

A modern web application for managing **daily tasks and personal to-do lists**, designed to help users organize, track, and complete tasks efficiently on a day-to-day basis. The application focuses on clarity, usability, and a clean user experience.

---

## ✨ Key Features

* **Quick Task Creation** – Add new tasks instantly via a streamlined input form
* **Task Completion Tracking** – Mark tasks as completed or active
* **Edit Tasks** – Update task titles seamlessly
* **Delete Tasks** – Remove tasks that are no longer needed
* **Search Functionality** – Quickly find tasks by keyword
* **Task Filtering** – View tasks by status:

  * All
  * Active
  * Completed
* **Responsive & Minimal UI** – Optimized for daily use across devices

---

## Application Overview

This project demonstrates a practical **Daily Task Management** workflow, including:

* A quick-add task interface for rapid input
* Search and filter controls for improved productivity
* Clear visual distinction between active and completed tasks

The UI is intentionally minimal to support focused daily task planning.

---

## 🛠️ Technology Stack

* **React 18** – Component-based UI development
* **TypeScript** – Type-safe, scalable codebase
* **Vite** – Fast development server and build tool
* **Tailwind CSS** – Utility-first styling
* **Framer Motion** – Smooth UI animations
* **React Router DOM** – Client-side routing
* **Lucide React** – Icon library

---

## Project Structure

```
newtodo/
├─ src/
│  ├─ components/
│  │  ├─ SearchBar.tsx
│  │  ├─ Header.tsx
│  │  ├─ TodoApp.tsx
│  │  ├─ TodoFilter.tsx
│  │  ├─ TodoForm.tsx
│  │  ├─ TodoItem.tsx
│  │  └─ TodoList.tsx
│  ├─ App.tsx
│  ├─ index.tsx
│  └─ index.css
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ vite.config.ts
└─ README.md
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd newtodo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## Planned Enhancements

* Persistent storage using LocalStorage or a backend database
* Daily-based task grouping and views
* Dark mode support
* Task reminders and notifications
* Unit and integration testing

---

## License

This project is intended for **learning, demonstration, and personal use**.

---

## Author

Developed as a **front-end portfolio project** showcasing modern React, TypeScript, and UI development best practices.
