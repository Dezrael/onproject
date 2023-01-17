import React, { FC, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    isAuthenticated: boolean;
    children: React.ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ isAuthenticated, children }) => {
    return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
