# NXTFLIX Movie Discovery Application

NXTFLIX is a responsive, web-based movie streaming discovery application built from scratch. It allows users to authenticate, browse trending and fresh release movies in custom auto-scrolling carousels, filter the complete catalog by genre in a card grid, view rich movie details, and manage a persistent Watch Later list.

## 🚀 Key Features

1. **User Authentication**:
   - Secure sign-in backed by a live REST API endpoint (`https://serverless-api-teal.vercel.app/api/auth/signin`).
   - Session tokens are securely saved in a cookie named `jwt_token` using `js-cookie` with a 7-day expiration.
   - Protected routes check for session existence and redirect unauthenticated users back to the Login page.
   - Clear session cookie upon Logout.

2. **Discover & Browse**:
   - **Hero Section**: Displays the total movie count and guides the user.
   - **Trending Now Carousel**: Top 16 movies sorted by rating in descending order. Features infinite-loop auto-scrolling (moving left).
   - **Fresh Releases Carousel**: Up to 16 movies released in 2015 or later. Features infinite-loop auto-scrolling (moving right).
   - *Note: Both carousels pause scrolling automatically when hovered or focused.*

3. **Genre Filters & Movie Grid**:
   - Dynamic genre filter bar with active states. Supports exact matching for: `All, Action, Drama, Comedy, Thriller, Sci-Fi, Romance, Horror, Fantasy`.
   - Grid renders cards displaying: poster, rating badge with a star icon, bold title, and meta row (`genre · year · duration`).
   - Interactive hover-play overlay on movie cards.

4. **Movie Details Page**:
   - Accessed by clicking any card or carousel item.
   - High-end aesthetics featuring a full-width blurred backdrop background.
   - Displays title, genre tags, year, duration, star rating, and a descriptive overview.
   - Add/remove items from the Watch Later list via an interactive toggle button (`+ Watch Later` / `✓ Added to Watch Later`).
   - Clean navigation back tracking.

5. **Watch Later Persistence**:
   - Custom state manager (`WatchLaterContext`) reading/writing from `localStorage` using the key `nxtflix_watch_later`.
   - Persists the complete movie objects (allowing offline persistence).
   - Header features a live counter badge reflecting the count of saved movies.

6. **Not Found Routing**:
   - Directs unrecognized paths to a dedicated `404 Page Not Found` message.
   - Standard React Router routes logic.

---

## 🛠️ Tech Stack

- **Framework**: React 19
- **Routing**: React Router DOM 7
- **Bundler & Server**: Vite 7/8 (dev port `3000`, build output folder `build`)
- **Cookie Management**: `js-cookie`
- **Styling**: Vanilla CSS (modular stylesheets)

---

## 💻 Local Setup & Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (Node 22 recommended).

### Steps
1. Clone or extract the project submission folder.
2. Open your terminal in the project root directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
   *The server will start on [http://localhost:3000/](http://localhost:3000/).*
5. Build the application for production:
   ```bash
   npm run build
   ```
   *Production bundles will output to the `build/` directory.*

---

## 🔑 Test Credentials
To log in, use the following credentials on the login screen:
- **Email**: `admin@example.com`
- **Password**: `admin123`

---

## 📂 Project Directory Structure

```
├── build/                 # Production build folder (Vite config output)
├── public/                # Static public assets
└── src/
    ├── api/
    │   └── auth.js       # Auth API client calling the signin endpoint
    ├── components/
    │   ├── Header.jsx    # Sticky Navigation Header & watch later badge count
    │   ├── MovieCard.jsx # Grid Movie Card component
    │   ├── Carousel.jsx  # Auto-scrolling infinite loop Carousel
    │   └── ProtectedRoute.jsx # Route guard verifying jwt_token existence
    ├── context/
    │   └── WatchLaterContext.jsx # LocalStorage persistence provider
    ├── data/
    │   └── movies.js     # Static movie data containing 50 items and GENRES
    ├── pages/
    │   ├── Login.jsx     # /login page (split view layout)
    │   ├── Home.jsx      # / page (hero, carousels, genre filters, and card grid)
    │   ├── MovieDetails.jsx # /movies/:id page (backdrop overlay, overview, and toggle)
    │   ├── WatchLater.jsx # /watch-later page (saved movies display)
    │   └── NotFound.jsx  # /not-found & catch-all 404 page (no header)
    ├── App.jsx           # Main router & state context layout wrappers
    ├── index.css         # Global variables, reset styles and custom scrollbar
    └── main.jsx          # React entry mount point
```
