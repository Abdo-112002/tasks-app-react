import { NotFound } from "../common";
import { AuthLayout } from "../components";
import { SignIn } from "../pages";


export const RootRoutes = {
    path: "/",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
        {
            index: true,
            element: <SignIn />,
        },
    ],
};