# Laravel 11 with Inertia.js and React Implementation

This repository contains an implementation of a modern web application using Laravel 11, Inertia.js, and React. It provides a complete user authentication system with the following features:

-   **Login**
-   **Signup**
-   **Email Verification**
-   **Login/Signup with Google**
-   **SMS OTP**

## Features

### 1. **Login**

Users can securely log in to the application using their registered credentials.

### 2. **Signup**

New users can sign up by providing their information, including email, password, and basic user details.

### 3. **Email Verification**

After signing up, users will receive an email containing a verification link to confirm their email address.

### 4. **Login/Signup with Google**

Users can log in or sign up using their Google account through OAuth2 integration for a smoother experience.

### 5. **SMS OTP (One Time Password)**

Users will be prompted to verify their identity through an SMS OTP to enhance the security of login and registration processes.

## Tech Stack

-   **Backend:** Laravel 11
-   **Frontend:** Inertia.js & React
-   **Authentication:** Laravel's built-in authentication system, Google OAuth, and SMS OTP.
-   **Database:** MySQL (or any other database supported by Laravel)
-   **SMS OTP:** Integration with SMS services like Twilio (or similar).

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

-   PHP (preferably the latest stable version)
-   Composer
-   Node.js and npm
-   MySQL (or any compatible database)

### 1. Clone the repository

````bash
git clone https://github.com/yourusername/your-repository.git
cd your-repository


Here's the entire README.md content in one block for easy copy-pasting:

markdown
Copy code
# Laravel 11 with Inertia.js and React Implementation

This repository contains an implementation of a modern web application using Laravel 11, Inertia.js, and React. It provides a complete user authentication system with the following features:

- **Login**
- **Signup**
- **Email Verification**
- **Login/Signup with Google**
- **SMS OTP**

## Features

### 1. **Login**
   Users can securely log in to the application using their registered credentials.

### 2. **Signup**
   New users can sign up by providing their information, including email, password, and basic user details.

### 3. **Email Verification**
   After signing up, users will receive an email containing a verification link to confirm their email address.

### 4. **Login/Signup with Google**
   Users can log in or sign up using their Google account through OAuth2 integration for a smoother experience.

### 5. **SMS OTP (One Time Password)**
   Users will be prompted to verify their identity through an SMS OTP to enhance the security of login and registration processes.

## Tech Stack

- **Backend:** Laravel 11
- **Frontend:** Inertia.js & React
- **Authentication:** Laravel's built-in authentication system, Google OAuth, and SMS OTP.
- **Database:** MySQL (or any other database supported by Laravel)
- **SMS OTP:** Integration with SMS services like Twilio (or similar).

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- PHP (preferably the latest stable version)
- Composer
- Node.js and npm
- MySQL (or any compatible database)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repository.git
cd your-repository

### 2. Install dependencies
Backend :

```bash
composer install

Frontend :

```bash
npm install
````

### 3. Set up environment variables

Copy the .env.example file to .env:

```bash
cp .env.example .env
```

Update the .env file with your database, Google OAuth, and SMS service credentials.

### 4. Generate the application key

```bash
php artisan key:generate
```

5. Run the migrations

```bash
php artisan migrate
```
