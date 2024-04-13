
import { Outlet } from 'react-router-dom';
import LoginGuard from '../../../hooks/global/LoginGuard';

const AuthLayout = () => {
    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-400 to-slate-800 py-3">
                <div className="container flex size-full items-center justify-center">
                    <Outlet />
                </div>
            </div>
        </>
    );
};



const AuthLayoutGuard = LoginGuard(AuthLayout);
export default AuthLayoutGuard;