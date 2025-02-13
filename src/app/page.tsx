import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <div id="home" className="hero-section bg-gradient-to-b from-primary via-primary to-secondary h-[100vh]"></div>
      <div id="funcionalidades" className="Funcionalidades bg-background h-[100vh]">funcionalidades</div>
      <div id="sobre" className="Sobre bg-background h-[100vh]">sobre</div>
      <div id="integrantes" className="Integrantes bg-background h-[100vh]">Integrantes</div>
    </div>
  );
}
