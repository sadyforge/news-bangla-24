````md
# 📰 Bangla News 24

A modern and responsive news website built with **Next.js**.  
Users can browse news by category, view news articles, create an account, sign in, and manage their profile.

---

## 🚀 Live Project

🔗 **Live Website:** https://bangla-news-24-b1rrax2me-dark-horizon.vercel.app/

---

## 📌 About The Project

**Bangla News 24** is a modern news platform designed to provide users with an easy and clean way to explore news from different categories.

The project focuses on:

- 📰 News browsing
- 📂 Category-based news
- 🔐 User authentication
- 👤 User profile
- ✏️ Profile update
- ⚡ Fast page loading
- ❌ Custom 404 page
- ⏳ Loading states
- 📱 Responsive design

---

## ✨ Features

### 📰 News

- Display latest news
- Browse news by category
- News cards with images and descriptions
- Dynamic category pages
- API-based news data

### 🔐 Authentication

- User Sign Up
- User Sign In
- User Sign Out
- Session-based authentication
- User profile information

### 👤 Profile

- View user profile
- Display profile image
- Display name and email
- Email verification status
- Account ID
- Member since information
- Update profile name
- Update profile image

### 🎨 UI

- Responsive design
- Modern card-based layout
- Red-themed interface
- Custom loading page
- Custom 404 Not Found page
- Mobile-friendly layout

---

## 🛠️ Technologies Used

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **DaisyUI**
- **Better Auth**
- **REST API**

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── NewsCard.tsx
│   │   └── ...
│   │
│   ├── category/
│   │   └── [categoryId]/
│   │       └── page.tsx
│   │
│   ├── profile/
│   │   └── page.tsx
│   │
│   ├── signin/
│   │   └── page.tsx
│   │
│   ├── signup/
│   │   └── page.tsx
│   │
│   ├── not-found.tsx
│   ├── loading.tsx
│   └── page.tsx
│
├── lib/
│   └── auth-client.ts
│
└── ...
````

---

## 🔗 API

The project uses a REST API to retrieve news data.

### Category News API

```text
https://news-api-v2.vercel.app/api/category/{categoryId}
```

Example:

```text
https://news-api-v2.vercel.app/api/category/1
```

The API provides category information and related news articles.

---

## 🔐 Authentication

Authentication is implemented using **Better Auth**.

The application provides:

* Sign Up
* Sign In
* Sign Out
* Session management
* Profile information
* Profile updates

User session data is accessed through:

```tsx
authClient.useSession()
```

---

## 👤 Profile Management

Authenticated users can access:

```text
/profile
```

The profile page displays:

* Name
* Email
* Profile image
* Email verification status
* Account ID
* Account creation date

Users can also update their:

* Name
* Profile image

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project directory

```bash
cd your-project-name
```

### 3. Install dependencies

Using pnpm:

```bash
pnpm install
```

Or using npm:

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the root directory.

```env
# Add your environment variables here
```

Add the required authentication and database configuration according to your project setup.

### 5. Start the development server

```bash
pnpm dev
```

The application will run on:

```text
http://localhost:3000
```

---

## 🏗️ Build For Production

To create a production build:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

---

## 📱 Responsive Design

The application is designed to work across different screen sizes:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

Tailwind CSS responsive utilities are used to create the layouts.

---

## ❌ Error Handling

The project includes a custom `not-found.tsx` page for invalid routes and missing pages.

It also includes a custom `loading.tsx` page to provide a loading state while pages are loading.

---

## 🎯 Project Goals

The main goals of this project are:

* Build a real-world Next.js application
* Practice TypeScript
* Work with external APIs
* Implement authentication
* Practice dynamic routes
* Build reusable components
* Create responsive UI
* Improve Next.js App Router skills

---

## 👨‍💻 Author

### Sady Chowdhury

**Web Developer | React & Next.js**

📍 Sylhet, Bangladesh

---

## 📄 License

This project is created for learning and development purposes.

```

এটা **GitHub repository-এর জন্য clean ও professional README** হিসেবে ব্যবহার করতে পারো। `Live Website` আর `git clone`-এর জায়গায় তোমার actual URL বসালেই ready।
```
