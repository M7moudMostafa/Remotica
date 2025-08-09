import { Flex } from 'antd';
import SideBar from './SideBar';
import Content from './Content'

const MainLayout = () => {
  return (
    <Flex gap="middle" style={{ height: "100vh" }}>
        <SideBar />
        <Content />
    </Flex>
  )
}

export default MainLayout
