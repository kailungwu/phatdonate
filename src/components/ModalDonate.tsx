import { Modal } from "antd";

type ModalDonateProps = {
  open: boolean;
  imgSrc: string;

  onCancel:
    | ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
};

const ModalDonate: React.FC<ModalDonateProps> = (props) => {
  const { open, imgSrc, onCancel } = props;

  return (
    <div>
      <Modal
        // title={type}
        open={open}
        // onOk={onOk}
        onCancel={onCancel}
        bodyStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        footer
      >
        <img src={imgSrc} alt="" width={"auto"} height={"300px"} />
      </Modal>
    </div>
  );
};

export default ModalDonate;
