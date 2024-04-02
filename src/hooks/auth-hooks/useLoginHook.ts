import { useNavigate } from "react-router-dom";
import { UserInfoProps } from "../../store/authStore";

interface SetLoadingFunction {
    setLoading: (loading: boolean) => void;
    setUserData: (data: UserInfoProps) => void;
}

const useLoginHook = ({ setLoading, setUserData }: SetLoadingFunction) => {
    const navigation = useNavigate();
    let loginTime: number | undefined;

    const login = (data: UserInfoProps) => {
        clearTimeout(loginTime);
        setLoading(true);
        loginTime = setTimeout(() => {
            setUserData(data);
            navigation("/dashboard");
            setLoading(false);
        }, 1500);
    };

    return {
        login,
    };
};

export default useLoginHook;
