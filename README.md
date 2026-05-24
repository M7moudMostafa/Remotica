# Remotica 🎬📺

A high-performance, TV-optimized media browsing experience built with **React 19** and **Vite**. **Remotica** features a sophisticated spatial navigation system designed specifically for Smart TVs and set-top boxes, providing a seamless "Lean-back" experience.

## ✨ Core Features

- 🎮 **Spatial Navigation**: Fully optimized for D-pad/Remote control (Arrow keys) via Norigin Spatial Navigation.
- 🎞️ **IMDb Integration**: Real-time media discovery using the IMDb API with advanced sorting (Popularity, User Ratings).
- 📺 **TV Layout**: Fixed-focus UI with horizontal rails and high-contrast visuals optimized for large displays.
- 🌍 **i18n Ready**: Multi-language support infrastructure integrated using `i18next`.
- ⚡ **Ultra Fast**: Powered by Vite and React 19 for instantaneous transitions and minimal overhead.

## 🛠 Tech Stack

- **Frontend**: [React 19](https://reactjs.org/), [Styled Components](https://styled-components.com/)
- **Navigation**: [@noriginmedia/norigin-spatial-navigation](https://github.com/noriginmedia/norigin-spatial-navigation)
- **State Management**: [Jotai](https://jotai.org/)
- **API Client**: [Axios](https://axios-http.com/) with centralized interceptors and error handling
- **Internationalization**: [i18next](https://www.i18next.com/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)

## 📂 Project Structure

```text
src/
├── api/             # Axios instance, interceptors, and endpoint wrappers
├── components/      # Atomic UI components and feature-based modules
│   ├── Content/     # Scrollable media rails
│   ├── Header/      # Navigation and branding
│   └── Home/        # Main landing orchestration
├── config/          # i18n and global configurations
└── utils/           # Shared helpers and menu definitions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:M7moudMostafa/Remotica.git
   cd Remotica
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root:
   ```env
   VITE_API_URL=https://api.imdbapi.dev
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

