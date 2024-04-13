import { NotFound } from '../common';
import { DashLayout } from '../components';
import { TasksPage } from '../pages';


export const DashboardRoutes = {
    path: '/dashboard',
    element: <DashLayout />,
    errorElement: <NotFound />,
    children: [
        {
            index: true,
            element: <TasksPage />,
        },
    ],
};