import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Private } from "./Private";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Profile } from "../pages/Profile";
import { Layout } from "../components/Layout";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Private />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
