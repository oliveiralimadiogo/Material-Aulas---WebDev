import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from '../pages/AdminLayout'
import Configuracoes from '../pages/Configuracoes';
import Usuarios from '../pages/Usuarios'
import Relatorios from '../pages/Relatorios'
import Dashboard from '../pages/Dashboard';
import PageNotFound from '../pages/PageNotFound'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AdminLayout/>,
        errorElement: <PageNotFound/>,
        children:  [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: "configuracoes",
                element: <Configuracoes/>
            },
            {
                path: "usuarios",
                element: <Usuarios/>
            },
            {
                path: "relatorios",
                element: <Relatorios/>
            }
        ]
    },
  

])