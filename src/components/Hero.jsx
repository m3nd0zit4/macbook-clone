import { useEffect, useRef } from "react";
const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return ( 
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>                
                <img src="/title.png" alt="MacBook Title" />
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

            <button>Comprar</button>

            <p>Desde $1599 ó $133/mes por 12 meses </p>
        </section>
     );
}
 
export default Hero;
