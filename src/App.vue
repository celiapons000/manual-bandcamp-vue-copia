<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import AsideNav from './components/AsideNav.vue'
import Footer from './components/Footer.vue'
import ManualCard from './components/ManualCard.vue'
import colourImage from './assets/images/colour-image.png'
import billboardMockup from './assets/images/billboard-mockup.jpg'
import moduloBase from './assets/images/modulo-base.png'
import cartelUnoMockup from './assets/images/cartel-uno-mockup.jpg'
import sistemaFlexibleEsquema from './assets/images/sistema-flexible-esquema.png'
import patronModulos from './assets/images/patron-modulos.png'
import billboardDosMockup from './assets/images/billboard-dos-mockup.jpg'
import viniloUnoMockup from './assets/images/vinilo-uno-mockup.jpg'
import layoutReticulas from './assets/images/layout-reticulas.png'
import aplicacionReticula from './assets/images/aplicacion-reticula.png'
import identificadorReticula from './assets/images/identificador-reticula.png'

const activeSection = ref('inicio')
const isLightMode = ref(false)

function setActiveSection(sectionId) {
  activeSection.value = sectionId
}

function toggleTheme() {
  isLightMode.value = !isLightMode.value
}
</script>

<template>
  <div class="app" :class="{ 'app--light': isLightMode }">
    <Header
      :active-section="activeSection"
      :is-light-mode="isLightMode"
      @select="setActiveSection"
      @toggle-theme="toggleTheme"
    />

    <AsideNav
      :active-section="activeSection"
      :is-light-mode="isLightMode"
      @select="setActiveSection"
    />

    <header id="inicio" class="hero">
      <p class="eyebrow">Manual de marca web</p>

      <h1>Bandcamp</h1>

      <p class="hero-claim">
        “En Bandcamp damos un giro a tu forma de conectar con la música”
      </p>

      <div class="hero-description">
        <p>
          Somos una plataforma donde escuchar, comprar y apoyar música conviven
          en un mismo lugar.
        </p>

        <p>
          Bandcamp es cultura de nicho, comunidad y apoyo real al artista:
          un lugar donde descubrir no se separa de sostener una escena.
        </p>

        <p>
          El rediseño nace para reforzar esa esencia y convertirla en una
          experiencia más clara, profesional y reconocible, tanto para oyentes
          como para artistas y sellos, manteniendo el carácter humano y distinto
          que define a Bandcamp.
        </p>
      </div>
    </header>

    <main class="main-content">
      <section id="sistema" class="section">
        <p class="section-number">01</p>

        <h2>Sistema</h2>

        <p>
          El sistema visual de Bandcamp se construye desde una lógica flexible,
          modular y reconocible. Su objetivo es ordenar el contenido musical,
          mantener una identidad clara y adaptarse a distintos formatos digitales.
        </p>

        <div class="card-grid">
          <article class="brand-card">
            <p class="brand-card__tag">01</p>
            <h3>Independiente</h3>
            <p>
              La marca parte de una relación directa entre artistas, sellos y oyentes.
            </p>
          </article>

          <article class="brand-card">
            <p class="brand-card__tag">02</p>
            <h3>Flexible</h3>
            <p>
              El sistema visual puede adaptarse a distintos formatos, contenidos y soportes.
            </p>
          </article>

          <article class="brand-card">
            <p class="brand-card__tag">03</p>
            <h3>Reconocible</h3>
            <p>
              El uso del color, la tipografía y la estructura modular refuerza la identidad.
            </p>
          </article>
        </div>
      </section>

      <section id="logo" class="section">
        <p class="section-number">02</p>

        <h2>Logo</h2>

        <p>
          El logotipo de Bandcamp funciona como identificador principal de la marca.
          Su construcción debe mantenerse clara, directa y legible en cualquier soporte.
        </p>
      </section>

      <section id="color" class="section">
  <p class="section-number">03</p>

  <h2>Color</h2>

  <p>
    La paleta principal está pensada para que Bandcamp se sienta como la tienda
    de discos de tu barrio, pero en formato app: un espacio cercano, humano y
    tangible.
  </p>

  <div class="section-image-block">
    <img
      class="section-image-block__image"
      :src="colourImage"
      alt="Aplicación visual de la paleta cromática de Bandcamp"
    />
  </div>

  <p class="section-text-extra">
    A nivel técnico, la paleta convierte ese imaginario físico en un sistema
    usable para interfaz: las bases cálidas y terrosas, como cremas, amarillos
    y marrones, se utilizan como fondos y superficies que aportan cercanía y
    materialidad, mientras el gris actúa como neutro estructural para sostener
    la legibilidad, el orden y las jerarquías en textos, precios y metadatos.
  </p>

  <p class="section-text-extra">
    El naranja funciona como firma y punto de energía: se aplica como acento
    controlado en elementos de alta prioridad para guiar la atención y reforzar
    reconocimiento sin saturar el sistema.
  </p>

  <div class="manual-card-grid manual-card-grid--four">
    <ManualCard
      bgColor="#EB5E28"
      title="Orange"
      text="#EB5E28 · 235 - 94 - 40"
    />

    <ManualCard
      bgColor="#FFEDAC"
      title="Butter"
      text="#FFEDAC · 255 - 237 - 172"
    />

    <ManualCard
      bgColor="#423024"
      title="Dark Coffee"
      text="#423024 · 66 - 48 - 36"
    />

    <ManualCard
      bgColor="#F2EFEB"
      title="Parchement"
      text="#F2EFEB · 242 - 239 - 235"
    />
  </div>

  <p class="section-text-extra">
    Los colores primarios de la identidad son el naranja y el amarillo Butter,
    porque juntos concentran la firma más reconocible del sistema y conectan
    directamente con la esencia de Bandcamp: cálida, humana y de cultura musical.
    El naranja aporta energía, impulso y presencia: es el golpe visual que hace
    que la marca se reconozca a primera vista. El amarillo Butter funciona como
    contrapunto luminoso y cercano, suavizando el conjunto y reforzando la
    sensación de espacio físico.
  </p>

  <p class="section-text-extra">
    A nivel funcional, esta dupla se usa como núcleo de identificación en los
    puntos de mayor visibilidad y representación, permitiendo que Bandcamp sea
    reconocible incluso cuando el sistema modular varía.
  </p>

  <div class="manual-card-grid">
    <ManualCard
      bgColor="#EB5E28"
      title="Orange"
      text="#EB5E28 · 235 - 94 - 40"
    />

    <ManualCard
      bgColor="#FFEDAC"
      title="Butter"
      text="#FFEDAC · 255 - 237 - 172"
    />
  </div>

  <div class="section-image-block section-image-block--wide">
  <img
    class="section-image-block__image"
    :src="viniloUnoMockup"
    alt="Aplicación de la paleta cromática de Bandcamp en un vinilo"
  />
</div>

<h3 class="section-subtitle">
  Aplicaciones del color
</h3>

<div class="color-applications">
  <article class="color-application">
    <div class="color-application__text">
      <h4>Identificativo</h4>

      <p>
        El identificativo de Bandcamp se construye a partir de la combinación
        naranja + amarillo, una dupla cálida y energética que funciona como firma
        visual inmediata de la marca.
      </p>

      <p>
        Se utiliza principalmente en representación institucional: avatar,
        imagen de perfil, cabeceras, portadas, piezas de presentación y RRSS,
        para asegurar reconocimiento rápido y coherente, manteniendo el vínculo
        con la estética física y de tienda que define el sistema.
      </p>
    </div>

    <div class="color-application__swatches color-application__swatches--identity">
      <div class="color-combo color-combo--identity-one">
        <span></span>
        <span></span>
      </div>

      <div class="color-combo color-combo--identity-two">
        <span></span>
        <span></span>
      </div>
    </div>
  </article>

  <article class="color-application">
    <div class="color-application__text">
      <h4>Combinaciones contrastadas</h4>

      <p>
        Las combinaciones contrastadas están pensadas para asegurar legibilidad
        y jerarquía en cualquier soporte: base clara con acento naranja,
        contrastes oscuros o acento cuando sea necesario.
      </p>

      <p>
        Esta lógica permite que los textos y la información crítica sean rápidos,
        mientras el sistema conserva su carácter material. En piezas más
        potentes, el naranja puede subir de presencia, siempre apoyado por un
        neutro claro u oscuro que mantenga orden visual y evite saturación.
      </p>
    </div>

    <div class="color-application__swatches color-application__swatches--contrast">
      <div class="color-combo color-combo--contrast-one">
        <span></span>
        <span></span>
      </div>

      <div class="color-combo color-combo--contrast-two">
        <span></span>
        <span></span>
      </div>

      <div class="color-combo color-combo--contrast-three">
        <span></span>
        <span></span>
      </div>

      <div class="color-combo color-combo--contrast-four">
        <span></span>
        <span></span>
      </div>

      <div class="color-combo color-combo--contrast-five">
        <span></span>
        <span></span>
      </div>

      <div class="color-combo color-combo--contrast-six">
        <span></span>
        <span></span>
      </div>

      <div class="color-combo color-combo--contrast-seven">
        <span></span>
        <span></span>
      </div>

      <div class="color-combo color-combo--contrast-eight">
        <span></span>
        <span></span>
      </div>
    </div>
  </article>

  <article class="color-application">
    <div class="color-application__text">
      <h4>Combinaciones de la paleta</h4>

      <p>
        Las combinaciones de la paleta construyen el ambiente tienda: cálido,
        cercano y táctil, como madera, cuero y pared gastada. Se priorizan
        mezclas naturales y equilibradas, donde los neutros sostienen el fondo
        y el naranja aparece como acento de identidad.
      </p>

      <p>
        El resultado es un sistema flexible: puede verse más limpio y profesional
        o más expresivo y de escena, sin salir nunca del mismo universo visual.
      </p>
    </div>

    <div class="color-application__swatches color-application__swatches--palette">
      <div class="color-combo color-combo--palette-one">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="color-combo color-combo--palette-two">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </article>
</div>

</section>

      <section id="tipografia" class="section">
        <p class="section-number">04</p>

        <h2>Tipografía</h2>

        <p>
          La tipografía se plantea desde la claridad y la funcionalidad, priorizando
          una lectura cómoda en pantalla y una voz visual directa.
        </p>

        <div class="type-sample">
          <p class="type-sample__label">PP Neue Montreal</p>

          <p class="type-sample__big">
            Música independiente para todos.
          </p>

          <p class="type-sample__text">
            Una familia tipográfica limpia, contemporánea y flexible, pensada para
            construir jerarquías claras dentro del manual web.
          </p>
        </div>
      </section>

      <section id="layout" class="section">
  <p class="section-number">05</p>

  <h2>Layout</h2>

  <p>
    La composición se construye a partir de una retícula modular flexible que
    actúa como base del sistema. Esta estructura permite organizar los elementos
    de forma coherente sin limitar la expresividad, facilitando la adaptación a
    distintos formatos: verticales, horizontales y cuadrados.
  </p>

  <p class="section-text-extra">
    La retícula no se entiende como una restricción rígida, sino como un marco
    que ordena la variabilidad, manteniendo siempre una lógica visual común.
  </p>

  <div class="section-image-block section-image-block--wide">
    <img
      class="section-image-block__image"
      :src="layoutReticulas"
      alt="Retículas modulares para formatos verticales, horizontales y cuadrados"
    />
  </div>

  <p class="section-text-extra">
    La maquetación se organiza mediante una estructura de columnas y filas
    proporcionales, adaptadas a cada formato: los formatos verticales se
    construyen sobre una retícula de 9 columnas × 10 filas, los formatos
    horizontales sobre 10 columnas × 9 filas, y los formatos cuadrados sobre
    9 columnas × 9 filas.
  </p>

  <p class="section-text-extra">
    Los márgenes exteriores garantizan aire y legibilidad, evitando que los
    elementos queden excesivamente próximos al borde. Además, tanto los márgenes
    como las columnas se definen a partir del tamaño del medianil como medida
    relativa: el margen equivale a 2x, dos veces el medianil, y la columna a 6x,
    asegurando una estructura coherente, proporcional y adaptable.
  </p>

  <div class="section-image-block section-image-block--wide">
  <img
    class="section-image-block__image"
    :src="aplicacionReticula"
    alt="Aplicación de la retícula modular en piezas de Bandcamp"
  />
</div>
<div class="identifier-layout">
  <div class="identifier-layout__text">
    <h3 class="section-subtitle">
      Ubicación del identificador
    </h3>

    <p>
      El identificador de marca se sitúa de forma consistente dentro de la
      retícula, generalmente en posiciones estables y reconocibles, como
      esquinas o zonas superiores, evitando interferir con los elementos
      principales de la composición.
    </p>

    <p>
      Su tamaño y ubicación respetan siempre un área de seguridad, garantizando
      visibilidad sin competir con el contenido. En aplicaciones más expresivas,
      puede convivir con otros elementos, manteniendo siempre su legibilidad y
      reconocimiento.
    </p>
  </div>

  <div class="identifier-layout__image-wrapper">
  <img
    class="identifier-layout__image"
    :src="identificadorReticula"
    alt="Ubicación del identificador dentro de la retícula"
  />
</div>
</div>
</section>

      <section id="modulo" class="section">
  <p class="section-number">06</p>

  <h2>Sistema flexible</h2>

  <p>
    El sistema flexible permite construir piezas visuales adaptables, manteniendo
    coherencia entre pantallas, aplicaciones, mockups y contenidos de comunicación.
  </p>

  <div class="section-image-block section-image-block--wide">
    <img
      class="section-image-block__image"
      :src="billboardMockup"
      alt="Aplicación del sistema flexible de Bandcamp en un billboard"
    />
  </div>

  <h3 class="section-subtitle">
    Módulo base: unidad mínima
  </h3>

  <p class="section-text-extra">
    El módulo base es la figura del personaje bailando, entendida como la pieza
    mínima del sistema: un elemento reconocible, con construcción constante, que
    funciona tanto como icono aislado como parte de un patrón. Este personaje se
    “encapsula” dentro de una forma geométrica para codificar perfiles y convertir
    la identidad en un lenguaje visual directo.
  </p>

  <p class="section-text-extra">
    El módulo nace de dos ideas que sostienen el rediseño: la escena, comunidad e
    individuo, y lo físico, cultura musical real. Por eso el personaje bailando
    representa la energía humana de Bandcamp, mientras que la estética de
    trazo/estampación y textura refuerza el vínculo con lo artesanal y la tienda
    de barrio. La forma geométrica no es decorativa: sirve como código de lectura
    del sistema, perfil.
  </p>

  <div class="section-image-block">
    <img
      class="section-image-block__image"
      :src="moduloBase"
      alt="Módulo base del sistema flexible de Bandcamp"
    />
  </div>

  <div class="section-image-block">
  <img
    class="section-image-block__image"
    :src="cartelUnoMockup"
    alt="Módulo base del sistema flexible de Bandcamp"
  />
</div>

<h3 class="section-subtitle">
  Sistema flexible
</h3>

<p class="section-text-extra">
  Bandcamp deja de depender de un símbolo único e inmóvil y pasa a funcionar
  como un sistema modular vivo, capaz de generar variaciones sin perder
  reconocimiento. La flexibilidad nace de un módulo base que pone en el centro
  al individuo y la escena musical, y se organiza en tres contenedores: círculo,
  triángulo y cuadrado, para codificar perfiles de forma intuitiva, mientras
  texturas y estética de estampación aportan la dimensión física, humana y de
  nicho que define a la marca.
</p>

<div class="section-image-block section-image-block--wide">
  <img
    class="section-image-block__image"
    :src="sistemaFlexibleEsquema"
    alt="Esquema del sistema flexible de Bandcamp"
  />
</div>

<p class="section-text-extra">
  Nuestra flexibilidad se genera combinando forma + personaje + textura +
  composición. El personaje bailando actúa como unidad narrativa
  (comunidad/escena), y al insertarse en círculo/triángulo/cuadrado construye un
  lenguaje que se entiende sin explicación.
</p>

<p class="section-text-extra">
  Fans = comunidad/compartir, artistas = diferencia/único, sellos =
  conexión/profesional; la textura refuerza la idea de “música real”, cultura
  tangible y apoyo consciente.
</p>

<p class="section-text-extra">
  El resultado es una identidad que puede convertirse en piezas sueltas,
  patrones, fondos, marcos, stickers o titulares gráficos, manteniendo siempre
  el mismo look & feel.
</p>

<div class="section-image-block section-image-block--wide">
  <img
    class="section-image-block__image"
    :src="patronModulos"
    alt="Patrón construido con los módulos del sistema flexible de Bandcamp"
  />
</div>

<h3 class="section-subtitle">
  Variables del sistema
</h3>

<div class="system-variables">
  <div class="system-variable">
    <span class="system-variable__arrow">→</span>
    <div class="system-variable__content">
      <h4>Color:</h4>
      <p>Aplicación en toda la paleta: tierras, naranjas, cremas y grises, según tono de pieza o jerarquía.</p>
    </div>
  </div>

  <div class="system-variable">
    <span class="system-variable__arrow">→</span>
    <div class="system-variable__content">
      <h4>Escala:</h4>
      <p>Desde icono o etiqueta hasta patrón expandido o recurso abstracto a gran formato.</p>
    </div>
  </div>

  <div class="system-variable">
    <span class="system-variable__arrow">→</span>
    <div class="system-variable__content">
      <h4>Orientación:</h4>
      <p>Módulos y composiciones pueden rotar para generar ritmo y sensación de escena.</p>
    </div>
  </div>

  <div class="system-variable">
    <span class="system-variable__arrow">→</span>
    <div class="system-variable__content">
      <h4>Número de módulos:</h4>
      <p>Un módulo como sello simple, repetición como patrón o mezcla de familias para un sistema rico.</p>
    </div>
  </div>

  <div class="system-variable">
    <span class="system-variable__arrow">→</span>
    <div class="system-variable__content">
      <h4>Textura:</h4>
      <p>Variación de grano o estampación, más limpio o más táctil, según el canal.</p>
    </div>
  </div>

  <div class="system-variable">
    <span class="system-variable__arrow">→</span>
    <div class="system-variable__content">
      <h4>Composición:</h4>
      <p>Densidad, ritmo, márgenes, superposición y uso como marco o como fondo.</p>
    </div>
  </div>

  <div class="system-variable">
    <span class="system-variable__arrow">→</span>
    <div class="system-variable__content">
      <h4>Relleno vs. trazado:</h4>
      <p>El sistema permite versiones sólidas o de contorno para modular presencia.</p>
    </div>
  </div>

  <div class="system-variable">
    <span class="system-variable__arrow">→</span>
    <div class="system-variable__content">
      <h4>Grosor de trazo:</h4>
      <p>Ajustes para adaptar legibilidad, contraste y jerarquía.</p>
    </div>
  </div>

  <div class="system-variable">
    <span class="system-variable__arrow">→</span>
    <div class="system-variable__content">
      <h4>Deformación:</h4>
      <p>Ondulación o vibración sutil como guiño al audio cuando aplica.</p>
    </div>
  </div>

  <div class="system-variable">
    <span class="system-variable__arrow">→</span>
    <div class="system-variable__content">
      <h4>Animación:</h4>
      <p>Giro, transformación y variaciones de tempo como lenguaje de movimiento.</p>
    </div>
  </div>
</div>

<div class="section-image-block section-image-block--wide">
  <img
    class="section-image-block__image"
    :src="billboardDosMockup"
    alt="Aplicación del sistema flexible de Bandcamp en billboard"
  />
</div>

</section>

      <section id="fotografia" class="section">
        <p class="section-number">07</p>

        <h2>Fotografía</h2>

        <p>
          La imagen debe reforzar el carácter musical, humano e independiente de la marca.
          Se priorizan fotografías con buena legibilidad, contraste controlado y una composición
          clara.
        </p>
      </section>

      <section id="motion" class="section">
        <p class="section-number">08</p>

        <h2>Motion</h2>

        <p>
          El movimiento ayuda a activar el sistema visual. Las transiciones deben ser simples,
          fluidas y funcionales, reforzando la navegación y el reconocimiento de marca.
        </p>
      </section>

      <section id="aplicaciones" class="section">
        <p class="section-number">09</p>

        <h2>Aplicaciones</h2>

        <p>
          El sistema se aplica a interfaces, piezas digitales, redes sociales, pantallas
          promocionales y materiales de presentación, manteniendo siempre una identidad
          coherente.
        </p>
      </section>
    </main>

    <Footer></Footer>
  </div>
</template>