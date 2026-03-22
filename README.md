# Scholarship Portal

A full-stack application for scholarship management.

## Installation

Ensure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/try/download/community) installed and running.

1. **Install root dependencies:**
   ```bash
   npm install
   ```

2. **Install client and server dependencies:**
   ```bash
   npm run install-all
   ```

## Running the App

### Option 1: VS Code (Recommended)

1. Open the **Run and Debug** panel (`Ctrl+Shift+D`).
2. Select **Launch App** and press **F5**.
3. The app will be available at `http://localhost:5173`.

### Option 2: Terminal

Run the following command in the root directory:
```bash
npm run dev
```

## Troubleshooting

- **MongoDB:** Ensure MongoDB is running locally on `mongodb://127.0.0.1:27017`.
- **Ports:** The server runs on port `5000` and the client on port `5173`.