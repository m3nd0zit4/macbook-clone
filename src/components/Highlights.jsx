import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
    const isMobile = useMediaQuery({  query: '(max-width: 1024px)' });

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top center'
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <section id="highlights">
            <h2>Nunca ha habido mejor momento para actualizar.</h2>
            <h3>Esto es lo que obtienes con el nuevo MacBook Pro.</h3>

            <div className="masonry">
                <div className="left-column">
                    <div>
                        <img src="/laptop.png" alt="Laptop" />
                        <p>Realiza tareas exigentes hasta 9,8 veces más rápido.</p>
                    </div>
                    <div>
                        <img src="/sun.png" alt="Sun" />
                        <p>Una impresionante <br />
                            Retina líquida XDR <br/>
                        </p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="apple-gradient">
                        <img src="/ai.png" alt="AI" />
                        <p>Construye con <br />
                            <span>Apple Intelligence.</span></p>
                    </div>
                    <div>
                        <img src="/battery.png" alt="Battery" />
                        <p>Mejorado con
                            <span className="green-gradient">{' '}mas de 14 horas{' '}</span>
                            de vida de bateria.
                            <span className="text-dark-100">{' '}(Para un total de 24 horas.)
                            </span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights