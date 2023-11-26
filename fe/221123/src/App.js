import { AboutUs } from "./components/about-us/AboutUs";
import { Features } from "./components/features/Features";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Rent } from "./components/rent/Rent";
import { Service } from "./components/service/Service";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Service />
      <Features />
      <Rent />
    </>
  );
}

export default App;
