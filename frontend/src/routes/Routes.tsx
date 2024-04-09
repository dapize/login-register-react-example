import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Layout } from "@components/Layout";
import { Home } from "@pages/Home";
import { Contact } from "@pages/Contact";
import { Profile } from "@pages/Profile";
import { NotFound } from "@pages/NotFound";
import { Login } from "@pages/Login";
import { Register } from "@pages/Register";
import { About } from "@pages/About";
import { Private } from "./Private";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<Private />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
