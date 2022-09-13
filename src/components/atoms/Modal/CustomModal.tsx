import { Button, Modal, Row, Space } from "antd";
import React, { useState } from "react";
interface ModalType {
    visible?: boolean | undefined;
    modalTitle?: string;
    open?: boolean | undefined;
    onOk?: ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onCancel?:
        | ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void)
        | undefined;
}

function CustomModal({ visible, modalTitle, onOk, onCancel, open }: ModalType) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal
                open={open}
                onOk={onOk}
                onCancel={handleCancel}
                footer={false}
                visible={visible}
            >
                <Space style={{ width: "100%", padding: "25%" }}>
                    {modalTitle}
                </Space>
            </Modal>
        </>
    );
}
export default CustomModal;
