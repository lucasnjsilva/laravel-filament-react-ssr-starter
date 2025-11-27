# Starter Kit

Laravel application with Filament PHP for the admin panel and Inertia.js (React) for the frontend, featuring Server-Side Rendering (SSR).

## Prerequisites

- PHP 8.2+
- Composer
- Node.js & NPM

## Getting Started

1.  **Install Dependencies**

    ```bash
    composer install
    npm install
    ```

2.  **Environment Setup**

    ```bash
    cp .env.example .env
    php artisan key:generate
    php artisan migrate
    ```

3.  **Generate App Key**

    ```bash
    php artisan key:generate
    ```

4.  **Start Development Server**

    This script starts Laravel, Vite, and the SSR server concurrently.

    ```bash
    ./start.sh
    ```
    *Note: If you encounter permission errors, run `chmod +x start.sh` first.*

5.  **Create Admin User**

    ```bash
    php artisan make:filament-user
    ```

## Building for Production

To build the assets for production (Client and SSR bundles):

```bash
npm run build
```

## Admin Panel

Access the Filament admin panel at `/admin`.
