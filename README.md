# Collaborative Whiteboard - Dendrite.ai Frontend Assignment

A real-time collaborative whiteboard web application built using **React**, **TypeScript**, **Bootstrap 5**, **Keycloak (for authentication)**, and **WebSockets** (for real-time sync).

---

## Features Implemented

###  Authentication
- Secure user authentication with **Keycloak** via Docker container.
- Only authenticated users can access whiteboard sessions.
- Routes protected using a `PrivateRoute` wrapper with `@react-keycloak/web`.

###  Project Setup
- Clean React + TypeScript base.
- Bootstrap 5.0 for modern, responsive, professional UI styling.
- Codebase organized with modular folder structure.
- Type-safe and clean architecture.

---

##  Upcoming Features (In Progress)
-  Drawing on whiteboard with brush tools (Konva.js).
-  Color and brush size selection.
-  Undo/Redo support.
-  Real-time drawing collaboration using WebSockets.
-  Display connected users’ cursors in real time.
-  Export canvas as image or PDF.
-  (Bonus) Live chat while collaborating.
-  (Bonus) Invite others to whiteboard session via email.
-  (Bonus) Export session as drawing playback video.

---

##  Tech Stack

| Layer         | Technology                      |
|---------------|----------------------------------|
| Frontend      | React, TypeScript               |
| Auth          | Keycloak (Docker)               |
| UI Framework  | Bootstrap 5                     |
| Real-Time     | WebSocket / Socket.IO (planned) |
| Canvas Drawing| Konva.js (planned)              |

---

##  How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/your-username/collaborative-whiteboard.git
cd collaborative-whiteboard
2. Install frontend dependencies

npm install
3. Start Keycloak in Docker
Ensure Docker is installed, then run:


docker compose up -d
Keycloak will run at http://localhost:8080

4. Start the React App

npm run dev
Screenshots
Screenshots of the UI are available in the screenshots/ folder.

Folder Structure (Frontend)

src/
│
├── components/         # Reusable components like PrivateRoute
├── pages/              # Page views like Whiteboard, Login
├── App.tsx             # Routing and layout
├── index.tsx           # Entry point

Author
Name: Mamta Vyas

Role: Frontend Developer Applicant

Email: mamtavyas1990@gmail.com
