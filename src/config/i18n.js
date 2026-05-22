import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navigation: {
        home: "Home",
        movie: "Movie",
        tvShows: "TV Shows",
        tvMiniSeries: "TV Mini Series",
        tvSpecial: "TV Special",
        tvMovie: "TV Movie",
        tvShort: "TV Short",
        video: "Video",
        videoGame: "Video Game"
      }
    }
  },
  es: {
    translation: {
      navigation: {
        home: "Inicio",
        movie: "Peliculas",
        tvShows: "Series TV",
        tvMiniSeries: "Mini Series TV",
        tvSpecial: "Especial TV",
        tvMovie: "Pelicula TV",
        tvShort: "Corto TV",
        video: "Video",
        videoGame: "Videojuego"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
