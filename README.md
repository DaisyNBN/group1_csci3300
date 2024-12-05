ShareRecipe
ShareRecipe is a web-based platform designed to help users find recipes based on the ingredients they already have at home. The application is built with Node.js for the backend, HTML/CSS/JavaScript for the frontend, and CSV files as the data source.

Features
Search recipes by ingredients.
Browse categorized recipes (breakfast, lunch, dinner, etc.).
Lightweight and fast with a simple CSV-based data source.
Folder Structure
perl
Copy code
group1_csci3300/
├── data/                  # Contains CSV files storing recipe data
├── node_modules/          # Stores project dependencies
├── public/                # Frontend assets (HTML, CSS, JS, images)
│   ├── about.html         # About page
│   ├── index.html         # Homepage
│   ├── recipes.html       # Recipes listing page
│   ├── script.js          # Handles frontend interactions
│   ├── style.css          # CSS styles
│   └── images/            # Images used in the UI
├── tests/                 # Test scripts for validation
├── server.js              # Backend server file
├── package.json           # Node.js dependencies and scripts
├── package-lock.json      # Dependency lock file
└── README.md              # Project documentation
System Requirements
Operating System: Windows, macOS, or Linux
Memory: Minimum 4GB
Storage: 200MB for the application + data storage
Node.js Version: 16 or later
Setup and Installation
Prerequisites
Node.js (Version 16 or later)
npm (Node Package Manager)
Steps to Run
Clone the repository:
bash
Copy code
git clone <repo-url>
Navigate to the project directory:
bash
Copy code
cd group1_csci3300
Install dependencies:
Copy code
npm install
Start the server:
Copy code
node server.js
Open http://localhost:3000 in your browser to access the application.
Application Architecture
Frontend
Built using HTML, CSS, and JavaScript.
Pages include:
index.html: The homepage with a search bar for ingredients.
about.html: Information about the platform.
recipes.html: Displays filtered recipes.
Backend
Developed with Node.js and Express.js.
Key functionality:
Reads and processes data from the recipes.csv file in the data/ folder.
Handles routes:
/: Serves the homepage.
/recipes: Fetches recipes based on user-provided ingredients.
Database
CSV File (data/recipes.csv):
Stores recipe data including:
Recipe name
Ingredients
Cooking instructions
Category (e.g., breakfast, lunch, dinner)
Workflow
Request Flow
User inputs ingredients on the homepage.
The input is sent to the backend via a GET request.
The backend reads the recipes.csv file, filters the recipes, and returns matching results as JSON.
The frontend dynamically displays the recipes to the user.
Diagrams
1. Folder Structure
kotlin
Copy code
group1_csci3300/
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── images/
├── data/
│   ├── recipes.csv
├── server.js
2. System Architecture
rust
Copy code
User -> Browser [Frontend (HTML/JS/CSS)] -> Backend (Node.js Server) -> Data (recipes.csv)
3. Request Flow
rust
Copy code
User -> Browser -> GET /recipes?ingredients=<ingredients> -> Server -> CSV -> Server -> Browser -> User
Future Enhancements
Migrate data storage from CSV files to a relational database (e.g., MySQL).
Add user authentication for saving favorite recipes.
Expand search capabilities with filtering by preparation time and dietary preferences.
