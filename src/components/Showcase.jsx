import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })

    useGSAP(() => {
        if(!isTablet){
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: '+=160vh', 
                    scrub: true,
                    anticipatePin: 1,
                    pinSpacing: true,
                    invalidateOnRefresh: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)',
                    duration: 0.5
                })
                .to('.content', { 
                    opacity: 1, 
                    y: 0, 
                    ease: 'power1.in',
                    duration: 0.3
                }, "-=0.1"); // Se superpone ligeramente con la animación anterior
        }
    }, [isTablet])

    return ( 
        <section id="showcase" className="relative">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline/>
                <div className="mask">
                    <img src="/mask-logo.svg"/>
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2> Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Precenta {" "}
                                <span className="text-white">
                                    M4, la siguiente generacion de Apple silicon
                                </span>
                                . El poder del M4
                            </p>
                            <p>
                                Estos dispositivos tienen Apple Intelligence en iPad Pro, pudes escribir, crear, y complaserte con eso y mas. Todo esto en un diseño completo con luces y hermosura
                            </p>
                            <p>
                                Una nueva marca de ingenieria de displays, con una refrigeracion precisa, colore que combinan. Todo eso con la nueva generacion de GPU con hardware-acceleration y mucho mas  
                            </p>
                            <p className="text-primary">Conoce mas sobre Apple Intelligence</p>

                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Actualizate</p>
                            <h3>4x faster</h3>
                            <p>Mejor rendimiento y capacidad que el M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Actualizate</p>
                            <h3>1.5x faster</h3>
                            <p>Mejor GPU y rendimiento que el M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Showcase;