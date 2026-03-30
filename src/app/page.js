
import BrowseDress from "@/components/home/BrowseDress";
import Hero from "@/components/home/Hero";
import MarqueeCompany from "@/components/home/MarqueeCompany";
import NewArrivals from "@/components/home/NewArrivals";
import TopSelling from "@/components/home/TopSelling";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <MarqueeCompany />
      <NewArrivals />
      <TopSelling />
      <BrowseDress />
    </div>
  );
}
