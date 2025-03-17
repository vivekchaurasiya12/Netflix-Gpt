# Netflix-GPT 🎥

Netflix-GPT is a React-based web application that mimics Netflix's functionality while integrating GPT-powered movie suggestions. The app allows users to browse movies, watch trailers, and get AI-powered movie recommendations. It is built with React, Vite, TailwindCSS, Firebase, and TMDB API.

---

## Features

### Authentication
- **Login/Sign Up**: Users can create an account or log in using Firebase Authentication.
- **Form Validation**: Validates user input during sign-up and login.
- **Redirects**: After successful login, users are redirected to the Browse page.
- **Sign Out**: Users can securely log out of their accounts.

### Browse Page (After Authentication)
- **Header**: Includes a logo, language selector, and sign-out button.
- **Main Movie Section**:
  - Displays a featured movie with a trailer playing in the background.
  - Shows the movie's title and description.
- **Movie Suggestions**:
  - Multiple movie lists (e.g., Now Playing, Popular, Top Rated).
  - Each list contains clickable movie cards that navigate to detailed movie pages.

### Movie Details Page
- **Dynamic Background**: Displays the movie's backdrop or poster as the page background.
- **Movie Information**:
  - Title, tagline, overview, release date, runtime, genres, languages, popularity, and rating.
  - Link to the movie's homepage (if available).
- **Responsive Design**: Adjusts layout for small and large screens.

### Netflix-GPT
- **Search Bar**: Allows users to search for movies using AI-powered suggestions.
- **Movie Suggestions**:
  - Fetches movie suggestions from TMDB based on GEMINI input.
  - Displays results in a reusable movie list component.
- **Multi-Language Support**: Users can select their preferred language for the app.

---

## Tech Stack

### Frontend
- **React**: Component-based architecture for building the UI.
- **Vite**: Fast development environment for React.
- **TailwindCSS**: Utility-first CSS framework for styling.

### Backend
- **Firebase**: Used for authentication and user management.
- **TMDB API**: Fetches movie data, trailers, and suggestions.
- **GEMINI AI**: Provides AI-powered movie suggestions.

---

## Project Flow

1. **Authentication**:
   - Users sign up or log in.
   - Redirect to the Browse page after successful authentication.

2. **Browse Page**:
   - Header with navigation and user options.
   - Main movie section with a trailer playing in the background.
   - Movie suggestions displayed in categorized lists.

3. **Movie Details Page**:
   - Displays detailed information about the selected movie.
   - Includes a dynamic background and responsive layout.

4. **Netflix-GPT**:
   - Users can search for movies using the AI-powered search bar.
   - Displays AI-powered movie suggestions.

---

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your system.
- TMDB API key and GEMINI API key.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/netflix-gpt.git
   cd netflix-gpt

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev
