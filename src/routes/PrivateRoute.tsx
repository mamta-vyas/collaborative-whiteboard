import type { ReactNode } from 'react';
import { useKeycloak } from '@react-keycloak/web';

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    keycloak.login();
    return null;
  }

  return <>{children}</>;
};
