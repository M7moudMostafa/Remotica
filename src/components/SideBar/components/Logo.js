import { Flex, Typography } from "antd";

const Logo = () => {
    const { Title } = Typography;
    return (
        <Flex align="center">
            <img
                src="/logo.png"
                alt="logoImage"
                style={{ width: "4rem", height: "4rem", objectFit: "contain" }}
            />
            <Title level={4} style={{ margin: 0, color: "#fff" }}>
                Remotica
            </Title>
        </Flex>
    );
};

export default Logo;
