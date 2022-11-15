import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../store";

const GetUserInfo = () => {
  const { user } = useUserStore((state) => state);

  return user != null ? <Outlet /> : <Navigate to="/" />;
};

export default GetUserInfo;
