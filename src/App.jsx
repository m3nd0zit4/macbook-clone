import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Features  from "./components/Features";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return ( 
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Features />
        </main>
     );
}
 
export default App;
