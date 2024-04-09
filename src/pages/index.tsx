import Navbar from "@/components/layouts/navbar";
import React from "react";
import HeroSection from "@/components/heroSection";
import Popular from "@/components/popular";
import Newest from "@/components/newest";

const index = () => {
  return (
    <main className="w-full">
      <Navbar />
      <div className="flex flex-col gap-10">
        <HeroSection />
        <Popular />
        <Newest/>
      </div>
    </main>
  );
};

export default index;

