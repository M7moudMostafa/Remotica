import {
  DesktopOutlined,
  HomeOutlined,
  PlayCircleOutlined,
  PlaySquareOutlined,
  ScissorOutlined,
  StarOutlined,
  VideoCameraOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export const MenuItems = [
  { key: "Main", focusKey: "Main", title: "Main", icon: <HomeOutlined /> },
  { key: "MOVIE", focusKey: "Movie", title: "Movie", icon: <VideoCameraOutlined /> },
  { key: "TV_SERIES", focusKey: "TV Series", title: "TV Series", icon: <DesktopOutlined /> },
  {
    key: "TV_MINI_SERIES",
    focusKey: "TV Mini-Series",
    title: "TV Mini-Series",
    icon: <DesktopOutlined />,
  },
  { key: "TV_SPECIAL", focusKey: "TV Special", title: "TV Special", icon: <StarOutlined /> },
  { key: "TV_MOVIE", focusKey: "TV Movie", title: "TV Movie", icon: <PlayCircleOutlined /> },
  { key: "SHORT", focusKey: "Short", title: "Short", icon: <ScissorOutlined /> },
  { key: "VIDEO", focusKey: "Video", title: "Video", icon: <YoutubeOutlined /> },
  { key: "VIDEO_GAME", focusKey: "Video Game", title: "Video Game", icon: <PlaySquareOutlined /> },
];
