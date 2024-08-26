## Projects Screenshots

![Registration Form](signup.png)
![Login Form](login.png)


# PHP MySQL User Registration and Login System

A user registration and login system built with HTML, CSS, JavaScript, and PHP, with MySQL for database management via phpMyAdmin. Implemented locally using XAMPP, it features client-side validation, responsive design, and secure data handling. Created by Raman Singh.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Database Configuration](#database-configuration)
- [Usage](#usage)
- [Author](#author)

## Features

- **User Registration**: Users can register by filling out a form with their details.
- **User Login**: Registered users can log in using their credentials.
- **Form Validation**: Client-side validation using JavaScript to ensure data integrity.
- **Responsive Design**: The forms are styled using CSS to be responsive and user-friendly.

## Technologies Used

- **Frontend**: 
  - HTML
  - CSS
  - JavaScript
- **Backend**: 
  - PHP
- **Database**: 
  - MySQL (Managed via phpMyAdmin)
- **Server**: 
  - XAMPP (Local Development)

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/your-repository.git
   ```

2. **Move Project Files to XAMPP Directory:**
   ```bash
   # Move the project folder to the `htdocs` directory in your XAMPP installation folder.
   # Example path: C:\xampp\htdocs\your-project-folder
   ```

3. **Start XAMPP:**
   ```bash
   # Open XAMPP Control Panel.
   # Start Apache and MySQL modules.
   ```

4. **Access phpMyAdmin:**
   ```bash
   # Open your web browser and go to http://localhost/phpmyadmin.
   ```

5. **Import the Database:**
   ```bash
   # Create a new database in phpMyAdmin.
   # Import the `database.sql` file located in the project directory into your newly created database.
   ```

6. **Configure Database Connection:**
   ```bash
   # Open the `config.php` file in the project folder.
   # Update the database connection details (hostname, database name, username, and password) according to your XAMPP setup.
   ```

## Database Configuration

- **Database Name**: `your_database_name`
- **Table Structure**: The SQL file provided in the project contains the necessary table structures.
- **Configuration File**: The `config.php` file contains the necessary configuration for connecting to the MySQL database.

## Usage

- Open your web browser and navigate to `http://localhost/your-project-folder`.
- You will see the registration form.
- After registration, use the link provided to navigate to the login form.
- Log in using the credentials you registered with.

## Author

- **Name**: Raman Singh
