import HeroSection from "@/components/home/HeroSection";
import PorqueElegirnos from "@/components/home/PorqueElegirnos";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <HeroSection />
      <PorqueElegirnos/>
    </main>
  );
}
