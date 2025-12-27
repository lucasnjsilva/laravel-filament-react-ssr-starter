# Starter Kit

A robust boilerplate for Laravel applications featuring **Filament PHP** for the admin dashboard and **Inertia.js (React)** with **Server-Side Rendering (SSR)** for the frontend.

## Prerequisites

Before you begin, ensure you have the following installed:

* **PHP:** 8.2 or higher
* **Composer:** Latest version
* **Node.js & NPM:** (LTS recommended)
* **Database:** A supported database engine (SQLite, MySQL, or PostgreSQL)

## Getting Started

Follow these steps to get your development environment up and running:

### 1. Install Dependencies

First, install the backend and frontend dependencies:

```bash
composer install
npm install
```

### 2. Environment Configuration

Copy the example environment file and configure your database settings:

```bash
cp .env.example .env
```

> **Note:** Open the `.env` file and update the `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD` fields to match your local setup.

### 3. Application Setup

Generate the application key and run the database migrations:

```bash
php artisan key:generate
php artisan migrate
```

### 4. Create Admin Access

To access the Filament admin panel, create your administrative user:

```bash
php artisan make:filament-user
```

## Development

This project includes a helper script to run the Laravel server, Vite, and the SSR server concurrently.

```bash
# Ensure the script is executable (only needed once)
chmod +x start.sh

# Start the development environment
./start.sh
```

* **Frontend:** [http://localhost:8000](https://www.google.com/search?q=http://localhost:8000)
* **Admin Panel:** [http://localhost:8000/admin](https://www.google.com/search?q=http://localhost:8000/admin)

---

## Building for Production

To compile assets and prepare the SSR bundle for production environments:

```bash
npm run build
```
