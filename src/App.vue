<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import AsideNav from './components/AsideNav.vue'

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
          La paleta cromática combina un tono naranja principal con colores neutros
          y secundarios. Esta combinación permite generar contraste, jerarquía y una
          presencia visual reconocible.
        </p>

        <div class="color-grid">
          <article class="color-item color-item--orange">
            <h3>Orange</h3>
            <p>#EB5E28</p>
          </article>

          <article class="color-item color-item--brown">
            <h3>Brown</h3>
            <p>#765A48</p>
          </article>

          <article class="color-item color-item--yellow">
            <h3>Yellow</h3>
            <p>#FFEDAC</p>
          </article>

          <article class="color-item color-item--dark">
            <h3>Dark</h3>
            <p>#141412</p>
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
          La estructura de la web se apoya en una composición editorial: navegación fija,
          columna lateral de índice y un área principal amplia para desarrollar el contenido
          del manual.
        </p>
      </section>

      <section id="modulo" class="section">
        <p class="section-number">06</p>

        <h2>Módulo flexible</h2>

        <p>
          El módulo flexible permite construir piezas visuales adaptables, manteniendo
          coherencia entre pantallas, aplicaciones, mockups y contenidos de comunicación.
        </p>
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
  </div>
</template>