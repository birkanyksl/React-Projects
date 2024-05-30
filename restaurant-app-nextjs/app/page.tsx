import Featured from "@/components/Featured";
import Landing from "@/components/Landing";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="">
      <Landing />
      <Offer />
      <Slider />
      {/* <Featured /> */}
    </main>
  );
}
