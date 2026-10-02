import { Suspense } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import type { ITechnologyTypes } from "./components/types/technologiesTypes";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/Footer";



const technologiesFetch = async (): Promise<ITechnologyTypes[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const technologiesPromise = technologiesFetch();

const App = () => {

  return (
    <div>
      <Nav />
      <Hero />

      <Suspense fallback={<div className="flex min-h-[300px] items-center justify-center">
        <h2 className=" text-slate-500 text-lg font-semibold">Loading Technologies...</h2>
      </div>
      }>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>

      <Footer />

    </div>
  );
};

export default App;