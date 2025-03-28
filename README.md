# acss

## Table of Contents

1. [Description](#description)
2. [Installation Guide](#installation-guide)
   - [Prerequisites](#prerequisites)
   - [Steps (fresh)](#steps-fresh-install)
   - [Steps (update)](#steps-update)

## Description
Aston Computer Science Society created using Laravel &amp; React

## Installation Guide

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) - Used for running JavaScript on the server and managing frontend dependencies.
- [PHP](https://www.php.net/) - Used for the backend of the application.
- [Composer](https://getcomposer.org/) - Dependency manager for PHP, used to install and manage libraries.

### Steps (fresh install)

1. Clone the repository:

    ```bash
    git clone git@github.com:BenSnaith/acss.git
    cd acss
    ```

2. Install dependencies:

    ```bash
    npm install
    composer install
    ```

3. Set up environment file and generate `APP_KEY`:

    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4. Build assets and start the application:

    ```bash
    php artisan migrate
    php artisan db:seed
   
    composer run dev
    ```

The website should now be running locally.

### Steps (update)

1. Update dependencies:

    ```bash
    npm install
    composer install
    ```

2. Update database and views:

   ```bash
   php artisan migrate:fresh
   php artisan db:seed
   ```

3. Build assets and start the application:

   ```bash
    composer run dev
    ```

The website should now be updated and running locally.
