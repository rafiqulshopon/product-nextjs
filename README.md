# Product Catalog - Next.js Application

This project showcases a simple product catalog built with Next.js, demonstrating how to fetch and display products from an API. It utilizes Tailwind CSS for styling.

## Getting Started

Follow these steps to get the project running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

- Node.js (v20.x or higher recommended)
- npm (v10.x or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rafiqulshopon/product-nextjs.git
cd product-nextjs
```

2. Install the required packages:

```bash
npm install
```

3. Rename the `.env.local.sample` file to `.env.local`:

```bash
mv .env.local.sample .env.local
```

Edit the `.env.local` file to add your API domain and any other environment-specific configurations required by the project.

4. Start the development server:

```bash
npm run dev
```

The application will start running on [http://localhost:3000](http://localhost:3000). Navigate to this URL in your browser to view the project.

## Features

- Product listing page displaying a selection of products fetched from an external API.
- Responsive design using Tailwind CSS.
