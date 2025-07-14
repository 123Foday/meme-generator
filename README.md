# Meme Generator App

A full-stack meme generator web application that allows users to upload, search, like, and customize memes with text overlays and color pickers.

---

## ✨ Features

- 🔍 **Search memes** by tags
- ⬆️ **Upload memes** to ImageKit
- ❤️ **Like/favorite memes** and see counts
- 🖍️ **Customize memes** with text overlays and color
- ⚡ **Fast image loading** via ImageKit CDN
- 🌙 **Dark mode support** with `next-themes`

---

## 🔧 Tech Stack

- **Frontend**: React + Next.js (App Router)
- **Styling**: Tailwind CSS
- **Image Storage**: ImageKit + imagekitio-next
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **UI Components**: Radix UI, class-variance-authority
- **Color Picker**: react-color

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/123Foday/meme-generator.git
cd meme-generator
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create Environment Variables
Create a `.env.local` file in the root and add:
```env
NEXT_PUBLIC_PUBLIC_KEY=your_imagekit_public_key
PRIVATE_KEY=your_imagekit_private_key
NEXT_PUBLIC_URL_ENDPOINT=your_imagekit_url_endpoint
```

### 4. Run the App
```bash
npm run dev
```
Visit `http://localhost:3000`

---

## 📁 Folder Structure
```
.
├── src
│   ├── app
│   │   ├── search           # Search logic and ResultsList
│   │   ├── customize        # Meme editor
│   │   └── lib              # imagekit-server setup
│   └── components
│       └── ui               # Reusable UI components
└── .env.local               # Environment variables
```

---

## 🧠 Core Components

- `imagekit-server.ts` – Initializes ImageKit instance securely
- `SearchPage.tsx` – Handles querying images with `listFiles()`
- `ResultsList.tsx` – Maps meme files to UI cards and like counts
- `UploadMemeButton.tsx` – Uploads new memes with metadata
- `TextOverlay.tsx` – Applies custom text with color

---

## 📸 Screenshots

**[Placeholder for screenshots: Home, Upload, Customize]**

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [ImageKit](https://imagekit.io/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Drizzle ORM](https://orm.drizzle.team)
- [Radix UI](https://www.radix-ui.com/)

---
