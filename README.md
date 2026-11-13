# Demo Commerce

A small storefront built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS** and **Zustand**: browse products by category, open a product page, and manage a cart with quantities and an order summary.

**[Live demo →](https://demo-commerce-psi.vercel.app/)**

## Features

- Category menu driven by the URL (`/?category=jewelery`), rendered on the server
- Product pages pre-rendered at build time with `generateStaticParams`
- Cart with quantity picker, per-item and order totals, kept in a Zustand store
- Mobile-first layout with Tailwind CSS

## How it is organized

```
src/
├── actions/     data access (products, categories)
├── app/         routes: /, /product/[productId], /cart
├── components/  shared UI (Header, MenuCategories, CardProduct, NumberPicker…)
├── data/        product catalog snapshot
├── entities/    Product, Category, Order types
├── helpers/     price formatting
└── stores/      cart store (Zustand)
```

Product data comes from [FakeStoreAPI](https://fakestoreapi.com/). The API rejects requests from Vercel's servers, so the catalog and its images are stored in the repo (`src/data/products.json`, `public/products/`) and the actions read from that snapshot. Swapping back to a live API only touches `src/actions`.

## Running locally

Requires Node.js 18.18+.

```bash
git clone https://github.com/hitaloose/demo-commerce.git
cd demo-commerce
npm install
npm run dev     # http://localhost:3000
```

`npm run build && npm start` runs the production build; `npm run lint` runs ESLint.

## License

[MIT](LICENSE)
