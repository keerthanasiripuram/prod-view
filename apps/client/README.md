# Product Listing with Pagination using React and Vite

This project implements a product listing page with **pagination** using **React**, **Vite**, **Material-UI**, and **Axios**. The application fetches products from an API and displays them with pagination controls for navigation.

## 🚀 Features

- **Paginated Product Display**
- **Error Handling with Custom ValidationError Class**
- **Material-UI Components for UI**
- **Efficient API Calls using Axios**

## 🛠️ Tech Stack

- **React** (Frontend)
- **Vite** (Build Tool)
- **Material-UI** (UI Components)
- **Axios** (API Requests)
- **Zod** (Validation Management)

## 📦 Project Structure

```
/src
 ├── components
 │   ├── ProductGrid.tsx
 │   ├── Pagination.tsx
 ├── pages
 │   ├── ProductListingPage.tsx
 ├── services
 │   ├── product.services.ts
 ├── types
 │   ├── ProductType.ts
 ├── utils
 │   ├── zod-err-class.ts
```

## 🚀 Installation

First, clone the repository and install dependencies:

```bash
pnpm install
```

## 🏃 Run the Development Server

```bash
pnpm dev
```

## 🔗 API Endpoint

The project fetches products from the following API endpoint:

```bash
GET http://localhost:3000/api/v1/products?page=1&pageSize=2
```

- `page` → Current page number
- `pageSize` → Number of products per page

## 📌 Code Overview

### 🧱 **Fetching Products**
The `getProducts` function fetches products using Axios.

```typescript
getProducts(currentPage, pageSize)
  .then((res) => setProducts(res.products))
  .catch((err) => handleError(err));
```

### 📖 **Pagination Handling**
The `handlePageChange` function updates the page number using `useCallback`.

```typescript
const handlePageChange = useCallback((event, page) => {
  setCurrentPage(page);
}, []);
```

### 🚩 **Error Management**
Errors are handled using a custom `ValidationError` class.

```typescript
if (err instanceof ValidationError) {
  setError(`Validation failed: ${err.validationErrors.map(e => e.message).join(', ')}`);
} else {
  setError(err.response?.data?.error || 'An unknown error occurred');
}
```



