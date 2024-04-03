import { Navigate } from "react-router-dom";
import { ComponentType } from "react";
import { useAtomValue } from "jotai";
import { UserInfoProps, userForm } from "../../store/authStore";

const DashGuard = <P extends object>(Component: ComponentType<P>): ComponentType<P> => {
    const Wrapper: ComponentType<P> = (props) => {
        const storageData: string = localStorage.getItem("userInfo") || '';
        const parsStorageData: UserInfoProps | null = storageData ? JSON.parse(storageData) : null;
        const userData = useAtomValue(userForm);
        return (userData?.name || parsStorageData?.name) || (userData?.password || parsStorageData?.password) ? <Component {...props} /> : <Navigate to="/" />;
    };
    return Wrapper;
};

export default DashGuard;
