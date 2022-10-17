import React, { useEffect, useState } from "react";
import { Layout, Modal } from "antd";
import HeaderLogo from "./HeaderLogo";
import UserProfile from "./UserProfile";
import MainMenuItem from "../../molecules/MainMenuItem";
import mainMenuItems from "./items";
import SubModule from "../SubModule/item";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "Redux/store";
import Profile from "./Profile";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { getAllNotificationsByUserId } from "../../../contents/Notification/ServiceNotification";
import {
    NotificationDetailType,
    setNotification,
} from "../../../features/notificationSlice";
import moment from "moment";

const { Sider } = Layout;
const { confirm } = Modal;

const createData = (data: any) => {
    let convertData = data.map((post: any) => {
        return {
            id: post.id,
            image: "https://picsum.photos/200",
            description: post.description,
            time: moment(post.createdAt).format("DD-MM-YYYY hh:mm a"),
            isRead: post.read,
            message: post.message,
        };
    });

    return convertData;
};

function SideBar() {
    const [submenuItems, setSubmenuItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    const profileOnClickHandler = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const LogoutClickHandler = () => {
        confirm({
            title: "Do you want to Logout?",
            icon: <ExclamationCircleOutlined />,
            okText: "Logout",
            okType: "default",
            cancelButtonProps: { type: "primary" },
            onOk() {
                navigate("/");
            },
        });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        getAllNotification(getUserDetails().user_id);
    }, []);

    const getAllNotification = (userId: number) => {
        getAllNotificationsByUserId(userId).then((res: any) => {
            let data: NotificationDetailType = createData(
                res.results.notification
            ).sort((a: any, b: any) => b.id - a.id);

            dispatch(setNotification(data));
        });
    };

    const notificationData = useSelector(
        (state: RootState) => state.notification.value
    );

    const badgeCount = notificationData.filter((data) => data.isRead == false);

    const homeItems: any = [
        { id: "1", name: "Colombo" },
        { id: "2", name: "b" },
        { id: "3", name: "c" },
        { id: "4", name: "d" },
    ];

    const home: any = [
        { id: "allBranches", name: "All Branches" },
        ...homeItems,
    ];

    const ClickHandler = (item: any) => {
        if (item.id === "home") {
            setSubmenuItems(home);
        } else {
            setSubmenuItems(item.children);
        }
        navigate(item.link);
    };

    return (
        <Sider theme="light" breakpoint="lg" className="main-sidebar">
            <HeaderLogo />
            <div className="menu">
                <div className="main-menu">
                    {mainMenuItems.map((item) => {
                        return (
                            <MainMenuItem
                                key={item.id}
                                icon={item.icon}
                                label={item.name}
                                onClick={() => ClickHandler(item)}
                                badgeCount={badgeCount.length}
                            />
                        );
                    })}
                    <div className="user">
                        <UserProfile
                            onClickProfile={profileOnClickHandler}
                            onClickLogout={LogoutClickHandler}
                            userProfile={"https://picsum.photos/200"}
                        />
                    </div>
                </div>
                <div className="sub-menu">
                    <SubModule data={submenuItems} />
                </div>
            </div>
            {isModalOpen && (
                <Modal
                    open={isModalOpen}
                    title={false}
                    onCancel={handleCancel}
                    closable={false}
                    width={"25%"}
                    footer={false}
                >
                    <Profile closeOnClickHandler={handleCancel} />
                </Modal>
            )}
        </Sider>
    );
}

export default SideBar;
