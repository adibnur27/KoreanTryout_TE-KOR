import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./features/auth/authSlice";
import AppRouter from "./router/AppRouter";

const App = () => {
  const dispatch = useDispatch();
  const isInitialized = useSelector((state) => state.auth.isInitialized);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      dispatch(setUser(JSON.parse(userData)));
    } else {
      dispatch(setUser(null)); // tetap panggil biar isInitialized = true
    }
  }, [dispatch]);

  if (!isInitialized) {
    return <div>Loading...</div>; // ⏳ bisa diganti loader keren
  }

  return <AppRouter />;
};

export default App;
