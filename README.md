# High-Level Design Document for ShareRecipe

## Introduction
ShareRecipe is a platform for finding recipes based on available ingredients. The goal is to simplify meal preparation for users with limited time and resources. This document outlines the architecture and major components of the system.

---

## Architecture Overview
The ShareRecipe system is built on a client-server model with the following layers:
1. **Frontend (HTML + CSS + JavaScript)**:
   - Provides the user interface for searching and displaying recipes.
   - Includes multiple HTML files, a CSS file for styling, and a JavaScript file for handling user interactions.
2. **Backend (Node.js)**:
   - Processes requests and reads the CSV file containing recipe data.
   - Defines routes to serve data and frontend assets.
3. **Database (CSV File)**:
   - Stores recipe data, including recipe names, ingredients, instructions, and categories.

## How to Run
1. Clone the repository:
   ```bash
   git clone <repo-url>
2. Navigate to the project directory:
    ```bash
   cd group1_csci3300
   
3. Install dependencies:
   ```bash
   npm install
   
4. Start the server:
   ```bash
   node server.js

## Diagrams

### 1. Folder Structure
```mermaid
graph TD
A[Root Directory] --> B[public/]
A --> C[data/]
A --> D[tests/]
A --> E[server.js]
B --> F[index.html]
B --> G[style.css]
B --> H[script.js]
B --> I[images/]
C --> J[recipes.csv]
```


### 2. Request Flow
```mermaid
sequenceDiagram
User->>Browser: Input ingredients
Browser->>Server: Send GET /recipes?ingredients=<ingredients>
Server->>CSV: Read and filter data
CSV-->>Server: Recipe data
Server-->>Browser: Recipe JSON
Browser-->>User: Display recipes
```

### Explanation of Diagrams
1. **Folder Structure Diagram**: Visualizes how files and folders are organized in the project.
2. **System Architecture Diagram**: Illustrates the relationship between the user, frontend, backend, and database.
3. **Request Flow Diagram**: Shows the flow of a user request from the frontend to the backend, including the processing of the CSV file.

These diagrams provide a clear and structured overview of your project. Let me know if you need further modifications or additional details!
