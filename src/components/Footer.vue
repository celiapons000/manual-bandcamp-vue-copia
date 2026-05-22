<template>
  <footer class="site-footer">
    <div class="site-footer__top">
      <div class="site-footer__brand">
        <span class="site-footer__wordmark">Bandcamp</span>
        <span class="site-footer__dot">·</span>
        <span class="site-footer__title">brand manual</span>
      </div>

      <p class="site-footer__meta">
        Proyecto académico · 2026
      </p>
    </div>

    <div class="site-footer__main">
      <div class="site-footer__intro">
        <h2 class="site-footer__headline">
          Se construye,<br />
          no se decora.
        </h2>

        <p class="site-footer__text">
          Este manual recoge las decisiones visuales del sistema de marca.
          Cualquier aplicación nueva debe partir de los componentes documentados,
          preservando el ritmo, el tono y la coherencia del proyecto.
        </p>
      </div>
    </div>

    <div class="site-footer__divider"></div>

    <div class="site-footer__info">
      <div class="site-footer__column">
        <p class="site-footer__column-title">Proyecto</p>
        <p>Bandcamp Brand Manual</p>
      </div>

      <div class="site-footer__column">
        <p class="site-footer__column-title">Versión</p>
        <p>v1.0 · 2026</p>
      </div>

      <div class="site-footer__column">
        <p class="site-footer__column-title">Equipo</p>
        <p>Diseño gráfico digital</p>
      </div>

      <div class="site-footer__column">
        <p class="site-footer__column-title">Sistema</p>
        <p>Manual web desarrollado en Vue</p>
      </div>
    </div>

    <p class="site-footer__legal">
      © Bandcamp · Documento académico · No es propiedad oficial de la marca.
    </p>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer {
  position: relative;
  z-index: 9999;

  width: 100%;
  min-height: 100vh;

  padding: 0 40px 48px;

  background: var(--color-dark);
  color: var(--color-white);

  border-top: 1px solid var(--border-color);
}

.site-footer__top {
  height: 76px;
  margin-left: -40px;
  margin-right: -40px;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--color-orange);
  color: var(--color-white);
}

.site-footer__brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.site-footer__wordmark {
  font-size: 28px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.05em;
  color: var(--color-white);
}

.site-footer__dot {
  font-size: 30px;
  line-height: 1;
  font-weight: 700;
}

.site-footer__title {
  font-size: 28px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.site-footer__meta {
  color: var(--color-white);

  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.42em;
}

.site-footer__main {
  min-height: 500px;
  padding-top: 155px;

  display: block;
}

.site-footer__intro {
  max-width: 760px;
}

.site-footer__headline {
  margin: 0 0 28px;

  color: #fff7ee;
  font-size: clamp(56px, 7vw, 88px);
  line-height: 0.92;
  letter-spacing: -0.06em;
  font-weight: 700;
}

.site-footer__text {
  max-width: 640px;

  color: var(--color-muted-dark);
  font-size: 18px;
  line-height: 1.45;
  font-weight: 500;
}

.site-footer__divider {
  width: 100%;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 34px;

  background: rgba(255, 237, 172, 0.12);
}

.site-footer__info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 48px;
}

.site-footer__column-title {
  margin-bottom: 12px;

  color: var(--color-muted-dark);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.42em;
}

.site-footer__column p {
  color: var(--color-muted-dark);
  font-size: 14px;
  line-height: 1.45;
  font-weight: 500;
}

.site-footer__legal {
  margin-top: 48px;

  color: var(--color-muted-dark);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.42em;
}

/* LIGHT MODE */

.app--light .site-footer {
  background: var(--color-black);
  color: var(--color-white);
}

/* RESPONSIVE */

@media (max-width: 900px) {
  .site-footer {
    padding: 0 24px 40px;
  }

  .site-footer__top {
    height: auto;
    margin-left: -24px;
    margin-right: -24px;
    padding: 24px;

    align-items: flex-start;
    flex-direction: column;
    gap: 18px;
  }

  .site-footer__brand {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .site-footer__wordmark,
  .site-footer__title {
    font-size: 24px;
  }

  .site-footer__meta {
    font-size: 9px;
    letter-spacing: 0.28em;
  }

  .site-footer__main {
    padding-top: 90px;
  }

  .site-footer__headline {
    font-size: clamp(48px, 15vw, 72px);
  }

  .site-footer__info {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .site-footer__legal {
    line-height: 1.6;
  }
}
</style>