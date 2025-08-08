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
  { focusKey: "Main", title: "Main", icon: <HomeOutlined /> },
  { focusKey: "MOVIE", title: "Movie", icon: <VideoCameraOutlined /> },
  { focusKey: "TV_SERIES", title: "TV Series", icon: <DesktopOutlined /> },
  {
    focusKey: "TV_MINI_SERIES",
    title: "TV Mini-Series",
    icon: <DesktopOutlined />,
  },
  { focusKey: "TV_SPECIAL", title: "TV Special", icon: <StarOutlined /> },
  { focusKey: "TV_MOVIE", title: "TV Movie", icon: <PlayCircleOutlined /> },
  { focusKey: "SHORT", title: "Short", icon: <ScissorOutlined /> },
  { focusKey: "VIDEO", title: "Video", icon: <YoutubeOutlined /> },
  { focusKey: "VIDEO_GAME", title: "Video Game", icon: <PlaySquareOutlined /> },
];
