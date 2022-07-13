import React, { memo, FC, useMemo } from "react";
import { Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import { PATH_ROLES } from "src/routes/routes.consts";
import { IRoute, routes } from "src/routes/routes";
import { observer } from "mobx-react";

function Redirect({ to }: { to: string }) {
    const location = useLocation();
    return <Navigate to={to} state={{ from: location }} replace />;
}

const protectedRoute = ({ component, id, to }: IRoute) => {
    const Comp: FC = component as any;
    return <Route key={id} path={to} element={<Comp />} />;
};

const redirectRoute = (key: string, from: string, to: string) => {
    return <Route key={key} path={from} element={<Redirect to={to} />} />;
};

const AppRouterSwitch: FC = observer(() => {
    const location = useLocation();
    const history = useNavigate();

    const renderRoutes = useMemo(() => {
        if (!history || !location) return <></>;
        return (
            <Routes>
                {routes.map((route) => protectedRoute(route))}

                {redirectRoute("redirect_unknown", "*", PATH_ROLES)}
            </Routes>
        );
    }, [history, location]);

    return <>{renderRoutes}</>;
});

export default memo(AppRouterSwitch);
