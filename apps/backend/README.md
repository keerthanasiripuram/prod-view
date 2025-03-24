# Express Server API & Database

This is a **Node.js Express** server that provides API endpoints for managing products using **PostgreSQL** with `pg-promise`. It includes error handling, static file serving, and a secure CORS configuration.

## 📌 API Endpoints

### Get Products

```http
GET /products/v1/get-products
```

#### Response:

```json
{
  "success": true,
  "products": [
    {
      "id": 1,
      "name": "Product A",
      "price": 10,
      "description": "A sample product"
    },
    {
      "id": 2,
      "name": "Product B",
      "price": 20,
      "description": "Another sample product"
    }
  ]
}
```

## 🛢️ Database Tables

### `products` Table

- `id` (int) - Primary Key
- `name` (varchar) - Product Name
- `price` (float) - Product Price
- `description` (text) - Product Description


## 🚀 Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/keerthana/backend.git
    ```
2. Install dependencies:
    ```bash
    pnpm install
    ```
3. Configure environment variables in a `.env` file. Ensure you provide values for all necessary variables:
    
    **Database Environment Variables:**
    ```env
    DB_USER=<your_db_user>
    DB_HOST=<your_db_host>
    DB_NAME=<your_db_name>
    DB_PASSWORD=<your_db_password>
    DB_PORT=<your_db_port>
    DB_MAX=<max_connections>
    DB_IDLE_TIMEOUT=<idle_timeout_ms>
    DB_CONNECTION_TIMEOUT=<connection_timeout_ms>
    ```

    **Server Environment Variables:**
    ```env
    SERVER_PORT=<your_server_port>
    ```

    **Allowed Origins:**
    ```env
    ALLOWED_ORIGINS=<origin1>,<origin2>
    ```

4. Start the server:
    ```bash
    pnpm start
    ```

## 🎯 Technologies Used

- **Node.js & Express** (Backend Framework)
- **PostgreSQL & pg-promise** (Database Management)
- **Nodemon** (Development Server Management)
- **CORS** (Cross-Origin Resource Sharing)







