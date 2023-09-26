import { Avatar, Card, Divider, Space, Tag, Typography } from "antd";
import "./App.css";
import discord from "./assets/discord.svg";
import logo from "./assets/logo.jpg";
import vcbqr from "./assets/vcbqr.jpeg";
import yt from "./assets/yt.svg";
import bg from "./assets/waallpaper.webp";

import { useState } from "react";
import pld from "./assets/pld.png";
import vcb from "./assets/vcb.png";
import ModalDonate from "./components/ModalDonate";

function App() {
  const { Text, Link, Paragraph } = Typography;
  const [modalDonate, setModalDonate] = useState<boolean>(false);

  const handlePreviewDonate = () => {
    setModalDonate(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        height: "calc(100vh - 200px)",
      }}
    >
      <Card
        style={{
          minWidth: "20wh",
          maxWidth: "40wh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${bg})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          // backgroundPositionX: 30,
          // filter: "blur",
        }}
      >
        <Space
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar size={120} src={logo}></Avatar>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tag color={"gold"}>PHAT SAY GAME</Tag>
            <Tag color={"cyan"}>STREAMER</Tag>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Avatar size={30} src={discord} />
            <Link
              target={"_blank"}
              href="https://discord.com/invite/Cu4Wvdm8GX"
            >
              <Tag color={"blue-inverse"}>Discord</Tag>
            </Link>
            <Avatar size={30} src={yt} />
            <Link
              href="https://www.youtube.com/@phatsaygame?sub_confirmation=1"
              target={"_blank"}
              strong
              code
              type="danger"
            >
              YOUTUBE CHANNEL
            </Link>
          </div>
          <div>
            <Divider
              dashed
              style={{
                width: "100%",
              }}
            />
            <Text
              strong
              keyboard
              // mark
              style={{
                fontSize: 20,
              }}
            >
              KÊNH DONATE
            </Text>
          </div>
          <Space>
            <Avatar size={30} src={pld} />
            <Link
              href="https://playerduo.net/phatsaygame"
              target={"_blank"}
              strong
              code
              type="danger"
            >
              PLAYER DUO
            </Link>

            <Avatar size={30} src={vcb} />
            <Link
              onClick={handlePreviewDonate}
              style={{
                cursor: "pointer",
              }}
              type="success"
              strong
              code
            >
              VIETCOMBANK QR
            </Link>
          </Space>

          <Text strong>Ngân Hàng VCB</Text>
          <Paragraph type="secondary" code copyable>
            0791000060184
          </Paragraph>
        </Space>
        <Divider dashed />
      </Card>
      <ModalDonate
        imgSrc={vcbqr}
        onCancel={() => setModalDonate(false)}
        open={modalDonate}
      />
    </div>
  );
}

export default App;
