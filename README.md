# 📸 Picsum Photo App

A dynamic image gallery application built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. The app allows users to browse, paginate, and edit images fetched from the [Lorem Picsum API](https://picsum.photos/).

[**Live Demo**](https://picsum-photo-app.vercel.app/)

---

## 🚀 Features

- 🌐 **Dynamic Gallery**: Browse through a collection of images with smooth pagination.
- 🔄 **Image Editing**: Edit image dimensions, apply greyscale, and blur effects with real-time preview.
- ⚡ **Debounced Image Updates**: Efficient image fetching with debounced state updates.
- ✅ **Persistent State**: Edited states persist through URL parameters, even after page refresh.
- ♿ **Accessible UI**: Built with accessibility in mind, ensuring better user experience.
- 🔄 **Smooth Navigation**: Intuitive navigation experience, including a reliable back button behavior.
- 🧪 **Unit Tested**: Components are tested using **Vitest** and **React Testing Library**.
- ⚙️ **Automated CI**: GitHub Actions set up for linting, formatting, type-checking, and running unit tests.

---

## 📄 Project Links

- 🌐 **Live App**: [https://picsum-photo-app.vercel.app/](https://picsum-photo-app.vercel.app/)
- 💻 **GitHub Repository**: [https://github.com/sedatbasar/picsum-photo-app](https://github.com/sedatbasar/picsum-photo-app)
- 🚀 **GitHub Project Board**: [https://github.com/users/sedatbasar/projects/2](https://github.com/users/sedatbasar/projects/2)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sedatbasar/picsum-photo-app.git
cd picsum-photo-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### 4. Run Tests

```bash
npm run test
```

---

## 🧪 Testing

- Tests are written using **Vitest** and **React Testing Library**.
- Run tests with:

```bash
npm run test
```

Or watch for changes:

```bash
npm run test:watch
```

---

## ⚙️ Continuous Integration

- The following GitHub Actions are set up for automated CI:
  - ✅ **Linting** with ESLint
  - 🎨 **Formatting** with Prettier
  - 📦 **Type Checking** with TypeScript
  - 🧪 **Unit Testing** with Vitest

### ESLint Custom Rules

- 🚀 **no-unnecessary-condition**: Prevents unnecessary condition checks, ensuring cleaner and more efficient code.
- 📦 **import/order**: Enforces a consistent order for imports, improving code readability.

### Run locally:

- Lint:

```bash
npm run lint
```

- Format:

```bash
npm run format
```

- Type-check:

```bash
npm run type-check
```

- Test:

```bash
npm run test
```

---

## 🧱 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn
- **Testing**: Vitest, React Testing Library, Jest-DOM
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel

---

> Built with ❤️ by [Sedat Basar](https://github.com/sedatbasar)
