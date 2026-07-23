<div align="center">
  <img src="screenshots/logo.svg" alt="Notebook+ Logo" width="120" />
</div>

# Notebook+

A modern, lightweight note-taking application built with React and Tailwind CSS.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

Live Application: [notebookplus.vercel.app](https://notebookplus.vercel.app)

---

## Table of Contents

- [Notebook+](#notebook)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Tech Stack](#tech-stack)
  - [Architecture](#architecture)
    - [Data Flow](#data-flow)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Roadmap](#roadmap)
  - [Contributing](#contributing)
  - [License](#license)
  - [Author](#author)

---

## About

Notebook+ is a note management application designed to provide a clean, fast, and distraction-free writing experience. It allows users to create, edit, organize, delete, and restore notes, backed by persistent local browser storage. No account or external database is required. All notes are stored locally in the user's browser.

The project follows a component-driven architecture with an emphasis on maintainability, responsive design, and efficient client-side rendering.

---

## Features

**Note Management**
- Create notes instantly
- Edit existing notes
- Preserve original creation timestamps
- Delete notes using a safe trash system
- Restore deleted notes
- Permanently remove unwanted notes

**Data Persistence**
- Browser-based Local Storage integration
- Notes persist across page refreshes
- No backend dependency required
- Offline-friendly by design

**User Experience**
- Dark-themed interface
- Fully responsive layout
- Modal-based interactions
- Real-time input validation

**Performance**
- Optimized WebP image assets
- Priority loading for key visual elements
- Lightweight component architecture
- Efficient state management

---

## Screenshots

**Home Dashboard**

![Notebook+ Dashboard](screenshots/home.png)

**Note Editor**

![Notebook+ Editor](screenshots/editor.png)

**Trash Management**

![Notebook+ Trash](screenshots/trash.png)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | Component-based UI development |
| Vite | Development server and build tooling |
| Tailwind CSS | Utility-first styling framework |
| JavaScript (ES6+) | Application logic |
| Local Storage API | Persistent client-side data storage |

---

## Architecture

The application follows a modular React component structure, with each component responsible for a single, well-defined concern.

| Component | Responsibility |
|---|---|
| `Navbar` | Application navigation |
| `Banner` | Hero section and note creation entry point |
| `Noteform` | Creation of new notes |
| `Notecontainer` | Display of saved notes |
| `Noteopen` | Editing of existing notes |
| `Trashopen` | Management of deleted notes |
| `Footer` | Application footer |

### Data Flow

```
User Action
     │
     ▼
React State Update
     │
     ▼
Local Storage Sync
     │
     ▼
Persistent Notes
```

State changes are reflected immediately in the UI and synchronized to Local Storage, ensuring data persists across sessions without requiring a backend service.

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mdalbakiakon/notebook-plus.git
   ```

2. Navigate to the client directory:

   ```bash
   cd client
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the application in a browser at:

   ```
   http://localhost:5173
   ```

---

## Roadmap

- [ ] User authentication
- [ ] Cloud synchronization
- [ ] Markdown editor support
- [ ] Note search functionality
- [ ] Categories and tags
- [ ] Backend database integration
- [ ] Multi-device synchronization

---

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/new-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add new feature"
   ```

4. Push the branch:

   ```bash
   git push origin feature/new-feature
   ```

5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

**Md. Al Baki Akon**

- GitHub: [mdalbakiakon](https://github.com/mdalbakiakon)
- LinkedIn: [Md. Al Baki Akon](https://www.linkedin.com/in/md-al-baki-akon-352989362/)
