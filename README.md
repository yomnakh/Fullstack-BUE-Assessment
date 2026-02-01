# Fullstack BUE Assessment

This repository contains a full-stack web application built as part of the Full Stack Developer technical assessment.

The project is divided into two main parts:

- **Backend**: ASP.NET Core Web API with SQL Server
- **Frontend**: React.js application

## Project Structure

```
Fullstack-BUE-Assessment/
│
├── Backend/
│   ├── UserManagement.API/
│   ├── UserManagement.Task.sln
│
├── Frontend/
│   └── user-management-ui/
│
└── README.md
```

## Prerequisites

Make sure you have the following installed on your machine:

### Backend
- .NET SDK (version 3.1 or higher)
- SQL Server (LocalDB or SQL Server Express is sufficient)

### Frontend
- Node.js 
- npm (comes with Node.js)

## Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Fullstack-BUE-Assessment

```
### Running the Backend (ASP.NET Core API)

1. **Configure the Database**

   Open `appsettings.json` inside `UserManagement.API`

   Update the SQL Server connection string if needed:

   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=.;Database=BUE_UserManagement;Trusted_Connection=True;TrustServerCertificate=True;"
   }
   ```
   OR Update it according to your local SQL Server setup.

2. **Apply Migrations**

   From the Backend directory:

   ```bash
   cd Backend/UserManagementAPI
   dotnet ef database update
   ```
  OR use the Package Manager Console - update-database

   This will create the database and required tables.

3. **Run the API**

   ```bash
   dotnet run
   ```
   OR click on ctrl + F5

   The API will start at:

   https://localhost:7018 

   (or the port shown in the console)

## Running the Frontend (React)

1. **Navigate to the Frontend Folder**

   ```bash
   cd Frontend/user-management-ui
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the React App**

   ```bash
   npm start
   ```

   The application will run at:

   http://localhost:3000

## Application Features

- User registration form (Create & Edit)
- Client-side and server-side validation
- List view to display stored users
- Edit existing records from the list
- Responsive UI
- RESTful API with clean architecture

## Notes

- The frontend communicates with the backend via REST API.
- Make sure the backend is running before using the frontend.
- No authentication is required for this task (Yet).
