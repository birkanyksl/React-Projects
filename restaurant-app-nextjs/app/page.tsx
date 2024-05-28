import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="mx-6 ">
      <Offer />
      <Slider />
      {/* <Featured /> */}
    </main>
  );
}
