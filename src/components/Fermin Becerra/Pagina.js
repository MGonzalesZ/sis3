import Titulo from "@/components/Tittle";
import Doubleb from "@/components/DobleButton";
import Card1 from "@/components/Tarjeta1";
import Paraf from "@/components/Paraf";
import C2r from "@/components/Tarjeta2r";
import C2l from "@/components/Tarjeta2l";
import ConCar from "@/components/ConjuntoCartas";
import Footer from "@/components/Footer";
import Navbarra from "@/components/NavBarra";


function Principal() {
    const fstyle = {
        fontSize: "60px",
        fontWeight: "bold",
        fontFamily: "Lucida Console, Courier New, monospace",
      };
      const fstyle2 = {
        fontSize: "40px",
        fontWeight: "bold",
        fontFamily: "Lucida Console, Courier New, monospace",
      };
      
      const links = [
        { url: './', text: 'Inicio' },
        { url: './', text: 'Acerca de' },
        { url: './', text: 'Contacto' },
      ];
    return(
        <div>

            <Navbarra title="Plataforma de atencion" links={links} />

            <Titulo titulo="Registrate o inicia sesion" fontstyle={fstyle}/>
            <Doubleb/>

            <Card1  titulo="Bienvenido" desc="Estamos encantados de darte la bienvenida a nuestro espacio virtual diseñado exclusivamente para satisfacer tus necesidades académicas y brindarte el apoyo que necesitas durante tu trayecto educativo."
                nombre="Ir al siu" src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/>
            
            <C2l titulo="Plan de Pagos" desc="Descubre nuestro flexible plan de pagos universitarios. ¡Educa sin preocupaciones!" nombre="Ver mas" image="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/>
            <C2r titulo="Inscripciones" desc="Inscripciones abiertas: ¡Prepárate para tu futuro académico en Univalle" nombre="Ver mas" image="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/>
            <C2l titulo="Carreras" desc="Explora nuestras emocionantes carreras universitarias. ¡Elige tu camino!" nombre="Ver mas" image="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/>
            <C2r titulo="Credenciales" desc="Consigue tus credenciales de entrada a Univalle hoy mismo." nombre="Ver mas" image="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/>
            <C2l titulo="Solvencia" desc="Asegura tu solvencia en Univalle Tu inversión en el futuro." nombre="Ver mas" image="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/>
            <C2r titulo="Horarios" desc="Revisa los horarios para visitarnos." nombre="Ver mas" image="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/>

            <Titulo titulo="Contactos" fontstyle={fstyle2}/>
            <Paraf desc="¿Necesitas ayuda o información? Contáctanos para asistencia personalizada en Univalle. Estamos aquí para ayudarte."/>

            <ConCar/>

            <Footer texto="Sistema de Informacion 2023." derechos="Todos los derechos reservados" />
                
        </div>
    );
}

export default Principal;