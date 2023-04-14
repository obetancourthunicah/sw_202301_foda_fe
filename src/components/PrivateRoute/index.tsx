import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectSec } from "@/store/slices/secSlice";
import { PropsWithChildren } from "react";
const PrivateRoute = ({ children, allowedRoles=[] } : PropsWithChildren<{allowedRoles?:string[]}>) => {
  const user = useSelector(selectSec);
  if (user) {
    try {
      const { token } = user;
      if (!token) {
        return <Navigate to="/login" replace />
      }
     // const matchedRoles = user.roles.filter((role:string) => allowedRoles.includes(role));
     // if(matchedRoles.length == 0) {
     //   return <Navigate to="/noauthorized" replace />;
     // }
    } catch (ex) {
      return <Navigate to="/login" replace />
    }
  } else {
    return <Navigate to="/login" replace />
  }
  return children ? <>{children}</> : <Outlet />;
}

export default PrivateRoute;
