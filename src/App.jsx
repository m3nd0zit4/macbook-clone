import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductViewer from "./components/ProductViewer";
import Showcase from "./components/Showcase";
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
        </main>
     );
}
 
export default App;
