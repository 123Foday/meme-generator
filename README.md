**MEME GENERATOR APP DOCUMENTATION**

---

## 2. Introduction

### Background of the Topic
Memes have become a powerful form of communication and digital humor across social media. They are used not only for entertainment but also for commentary and marketing. This project aims to provide users with a seamless experience to create, customize, and share memes in real-time.

### Problem Statement
Most meme-generation tools available online are cluttered, lack AI-powered features, and don’t support template libraries, GIFs, or social sharing. Users also face limitations when managing favorites or using cloud image storage.

### Objectives of the Project
- Enable users to upload images and turn them into memes
- Allow users to add and style text overlays
- Let users download and share memes easily
- Support favorites functionality
- Offer a library of templates to choose from
- Add AI-powered meme suggestions
- Support social sharing via Twitter

---

## 3. Requirements Analysis

### Functional Requirements
- Upload Image
- Add Text Overlay
- Customize Text (Color, Font, Position)
- Download Meme
- Share Meme to Twitter
- View and Select Meme Templates
- Mark Meme as Favorite
- View Favorite Counts
- Get AI Meme Text Suggestions

### Non-Functional Requirements
- **Performance:** Load time < 2s for meme preview
- **Usability:** User-friendly interface with intuitive navigation
- **Scalability:** Supports multiple concurrent users
- **Security:** Secrets stored in `.env.local`; GitHub secrets protection enforced

---

## 4. System Design

### Architecture Diagram
![Architecture Diagram](../images/A_flowchart_diagram_visually_represents_the_archit.png)

### Component Diagram
- **Header.tsx:** Navigation bar across pages (hidden on home)
- **UploadMemeButton.tsx:** Upload form for memes
- **TextOverlay.tsx:** Overlay editor with AI text suggestions and Twitter share
- **ResultsList.tsx:** Renders list of meme cards
- **CustomizePage.tsx:** Editor interface for specific meme
- **TemplatesPage.tsx:** Displays available meme templates

### Data Model / Database Schema
![ER Diagram](../images/A_diagram_depicts_the_"favorites"_database_table_a.png)

### UI Wireframes / Mockups
[Placeholder for wireframes to be replaced later]

---

## 5. Implementation

### Tech Stack
- **Frontend:** React with Next.js 14
- **Backend:** Next.js API Routes, Server Components
- **Database:** PostgreSQL (via Drizzle ORM)
- **Cloud Storage:** ImageKit
- **AI:** Simple OpenAI API for text suggestion (optional setup)
- **Styling:** Tailwind CSS, Radix UI, Shadcn UI

### Key Implementation Steps
- Setup Next.js app with Drizzle ORM + PostgreSQL
- Integrate ImageKit for upload, download, and template storage
- Build pages: Search, Customize, Templates, Favorites
- Use ImageKit tags for template categories
- Implement favorite-count tracking via database
- Add Twitter sharing functionality
- AI text suggestion using `fetch` to external AI endpoint (stubbed)

### Critical Screenshots
(Screenshots of Upload, Customize, Templates, and Share Views to be added)

---

## 6. Conclusion

### Summary
This Meme Generator App provides a solid foundation for meme creation with essential features such as upload, download, customization, favorites, templates, and social sharing. With a clean UI and scalable architecture, it offers users a fun and productive meme experience.

### Challenges Faced
- Environment variable leaks on GitHub (solved with push protection)
- ImageKit integration over serverless architecture
- Mapping template categories using tags

### Future Improvements
- Add GIF support
- Enhance AI meme generation with better prompts
- Improve mobile responsiveness and editor UX
- Implement user authentication for tracking personal meme history

---

## 7. References
- Next.js Documentation: https://nextjs.org/docs
- Drizzle ORM Docs: https://orm.drizzle.team/
- ImageKit Docs: https://docs.imagekit.io/
- Twitter Developer API (for future implementation)
- Shadcn UI: https://ui.shadcn.com
- Tailwind CSS Docs: https://tailwindcss.com

---

## 8. Appendices

### Source Code Snippets
- `TextOverlay.tsx` (AI Suggestion + Share)
- `SearchPage.tsx` (File listing with favorites)
- `ImageKit.ts` (Image upload + initialization)

### API Documentation
- `/api/favorite` → Handles GET/POST for meme likes
- `/api/templates` → (Future scope) for dynamic templates

### User Manual
1. Go to Home (redirects to search page)
2. Upload image or choose template
3. Add meme text (or generate using AI)
4. Download or share
5. Favorite memes to track popular ones
