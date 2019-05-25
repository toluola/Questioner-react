import React from "react";
import Signup from "../forms/Signup";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const SignupPage = () => {
  return (
    <div>
      <Header />
      <Signup />
      <Footer />
    </div>
  );
};
