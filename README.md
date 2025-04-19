---

<p align="center">
  <img src="https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen" alt="Node ≥14">
  <img src="https://img.shields.io/badge/npm-%3E%3D6.0.0-blue" alt="npm ≥6">
  <img src="https://img.shields.io/badge/license-MIT-lightgrey" alt="License MIT">
</p>

# 📚 Book API

A simple RESTful API for managing a collection of books, built with Node.js, Express, and MongoDB (local or Atlas).

---

## 📋 Table of Contents

1. [Features](#-features)
2. [Demo](#-demo)
3. [Prerequisites](#-prerequisites)
4. [Installation](#-installation)
   - [Clone the repo](#clone-the-repo)
   - [Install dependencies](#install-dependencies)
   - [Configure environment](#configure-environment)
5. [Running the Server](#-running-the-server)
6. [API Reference](#-api-reference)
   - [Endpoints](#endpoints)
   - [Example Usage](#example-usage)
7. [Contributing](#-contributing)
8. [License](#-license)
9. [Contact](#-contact)

---

## 🚀 Features

- **CRUD** operations on books
- Configurable via **environment variables**
- Works with **local MongoDB** or **MongoDB Atlas**
- Lightweight & zero‑config to get started

---

## 🎬 Demo

<!-- If you have a live demo or Swagger UI, link it here. -->

> Coming soon…

---

## 🛠️ Prerequisites

- **Node.js** v14 or later
- **pnpm** _or_ **npm** v6 or later
- **MongoDB** (local) _or_ a **MongoDB Atlas** cluster

---

## 🔧 Installation

### 1. Clone the repo

```bash
git clone https://github.com/jaenudincollege/book-api.git
cd book-api
```

### 2. Install dependencies

<aside>
💡 *Tip:* Click the **Copy** button on the top‑right of each block to quickly grab these commands!
</aside>

**Using pnpm**

```bash
pnpm install
```

**Or using npm**

```bash
npm install
```

### 3. Configure environment

Create a `.env` file in the project root:

<details>
<summary>Example <code>.env</code></summary>

```env
PORT=3000
DB_URI=mongodb://127.0.0.1:27017/books
```

</details>

> **To use MongoDB Atlas**, replace `DB_URI` with your Atlas connection string:
>
> ```env
> DB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/books?retryWrites=true&w=majority
> ```

---

## 🏃‍♂️ Running the Server

Start in development mode (hot‑reload):

```bash
pnpm run dev
# or
npm run dev
```

By default, the API listens on the port in your `.env` (e.g. `http://localhost:3000`).

---

## 📖 API Reference

Base URL: `http://localhost:<PORT>/api/books`

### Endpoints

| Method     | Endpoint | Description                       |
| ---------- | -------- | --------------------------------- |
| **GET**    | `/`      | Retrieve all books                |
| **GET**    | `/:id`   | Retrieve a single book by its ID  |
| **POST**   | `/`      | Create a new book                 |
| **PATCH**  | `/:id`   | Update an existing book by its ID |
| **DELETE** | `/:id`   | Delete a book by its ID           |

_All endpoints are prefixed with_ `/api/books`

---

### Example Usage

#### Create a book

```bash
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "pages": 310,
        "description": "A fantasy novel about Bilbo Baggins’ journey to reclaim treasure from Smaug.",
        "publishedDate": "1937-09-21"
      }'
```

#### Get all books

```bash
curl http://localhost:3000/api/books
```

#### Update a book

```bash
curl -X PATCH http://localhost:3000/api/books/<BOOK_ID> \
  -H "Content-Type: application/json" \
  -d '{"pages": 320}'
```

#### Delete a book

```bash
curl -X DELETE http://localhost:3000/api/books/<BOOK_ID>
```

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add some feature"`)
4. Push to your branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 📫 Contact

**Your Name**

- GitHub: [@jaenudin-college](https://github.com/jaenudincollege)
- Email: jaenudinfirdaus2004@gmail.com

---
