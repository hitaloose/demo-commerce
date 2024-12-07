## README: Demo Commerce

# Demo Commerce

**Demo Commerce** is a modern e-commerce application built with **Next.js** and **TypeScript**, featuring responsive design, dynamic routing, and state management using **Zustand**. It connects to the **FakeStore API** to showcase products, manage categories, and simulate a shopping cart experience.

---

## Features

- **Dynamic Product Management**: Browse products by categories and view detailed product descriptions.
- **Responsive Design**: Styled with **Tailwind CSS**, providing a seamless experience across devices.
- **Shopping Cart**: Add items to the cart, adjust quantities, and view order summaries.
- **State Management**: Powered by **Zustand** for efficient and reactive global state management.
- **Server-Side Rendering**: Efficient data fetching and pre-rendering using Next.js's latest capabilities.

---

## Tech Stack

### Frontend

- **Next.js** (v15.0.4): Framework for server-rendered React applications.
- **React** (v19.0.0): Library for building user interfaces.
- **Tailwind CSS** (v3.4.1): Utility-first CSS framework.
- **Zustand** (v5.0.2): State management library.

### Tools & Utilities

- **TypeScript**: Strict typing for better development experience.
- **FakeStore API**: Public API for simulating e-commerce data.
- **React Icons**: Prebuilt icon components for UI enhancements.

---

## Project Structure

```
├── src
│   ├── actions         # API calls and data-fetching logic
│   ├── app             # Application routing and layout components
│   ├── components      # Reusable UI components
│   ├── entities        # Type definitions for products, categories, and orders
│   ├── helpers         # Utility functions
│   ├── stores          # Zustand-based global state management
│   └── styles          # Global and modular CSS
├── public              # Static assets
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

---

## Getting Started

### Prerequisites

- Node.js >= 16
- npm or yarn

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/demo-commerce.git
   cd demo-commerce
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run Development Server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code linting.

---

## Key Components

### `Header`

- Provides navigation with a "Back" button and cart icon.
- Dynamically displays the number of items in the cart.

### `MenuCategories`

- Fetches and displays categories from the FakeStore API.
- Enables filtering of products by category.

### `CardProduct`

- Displays individual product details like image, title, and price.
- Navigates to a detailed product page on click.

### `NumberPicker`

- Allows users to adjust item quantities in the cart.

---

## APIs Used

- **FakeStore API**:
  - `https://fakestoreapi.com/products/categories`: Fetches product categories.
  - `https://fakestoreapi.com/products/category/:category`: Fetches products by category.
  - `https://fakestoreapi.com/products/:productId`: Fetches details of a single product.

---

## Development Notes

### File Structure

- Components are modular and colocated with related styles and logic.
- Actions handle API interactions, ensuring separation of concerns.

### State Management

- Zustands efficiently manages the cart state, providing methods to add, remove, and update cart items.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [FakeStore API](https://fakestoreapi.com): For providing free e-commerce data.
- [Next.js](https://nextjs.org): For powering this project with server-rendering capabilities.
- [Tailwind CSS](https://tailwindcss.com): For modern and responsive styling.

Feel free to contribute or suggest improvements! 🚀
