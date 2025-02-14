import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <div
        id="home"
        className="hero-section bg-gradient-to-b from-primary via-primary to-secondary min-h-screen"
      ></div>

      <div className="min-h-screen w-full bg-[url('/assets/background/tortoise-shell.svg')]  ">
        <section
          id="funcionalidades"
          className="min-h-screen flex p-8  justify-center"
        >
          <h2 className="text-[3rem] text-neutral font-bold">
            Funcionalidades
          </h2>
        </section>

        <section id="sobre" className="min-h-screen flex p-8  justify-center">
          <h2 className="text-[3rem] text-neutral font-bold">Sobre</h2>
        </section>

        <div className=" h-[150vh] flex flex-col  justify-center">
          <section
            id="integrantes"
            className=" h-[100vh] flex p-8   justify-center"
          >
            <h2 className="text-[3rem] text-neutral font-bold">Integrantes</h2>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}
