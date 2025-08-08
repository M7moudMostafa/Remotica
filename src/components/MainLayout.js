import { Flex } from 'antd';
import SideBar from './SideBar'

const MainLayout = () => {
  return (
    <Flex gap="middle" style={{ height: "100vh" }}>
        <SideBar />
        <div>
            Right Side
        </div>
    </Flex>
  )
}

export default MainLayout
