<template>
  <header class="site-header">
    <a
      href="#inicio"
      class="site-header__logo"
      @click="$emit('select', 'inicio')"
    >
      <span class="site-header__logo-symbol">
        b
      </span>

      <span class="site-header__logo-text">
        bandcamp
      </span>
    </a>

    <nav class="site-header__nav">
      <a
        v-for="item in headerItems"
        :key="item.id"
        :href="item.href"
        :class="{ 'site-header__link--active': activeSection === item.id }"
        @click="$emit('select', item.id)"
      >
        {{ item.label }}
      </a>
    </nav>

    <button
      class="site-header__theme"
      type="button"
      @click="$emit('toggle-theme')"
    >
      <span class="material-symbols-outlined site-header__theme-icon">
        {{ isLightMode ? 'light_mode' : 'dark_mode' }}
      </span>

      <span>{{ isLightMode ? 'Light' : 'Dark' }}</span>
    </button>
  </header>
</template>

<script setup>
defineEmits(['select', 'toggle-theme'])

defineProps({
  activeSection: {
    type: String,
    default: 'inicio'
  },
  isLightMode: {
    type: Boolean,
    default: false
  }
})

const headerItems = [
  {
    id: 'sistema',
    href: '#sistema',
    label: 'Sistema'
  },
  {
    id: 'color',
    href: '#color',
    label: 'Color'
  },
  {
    id: 'tipografia',
    href: '#tipografia',
    label: 'Tipografía'
  },
  {
    id: 'aplicaciones',
    href: '#aplicaciones',
    label: 'Apps'
  }
]
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 50px;

  display: grid;
  grid-template-columns: 250px 1fr 120px;
  align-items: center;

  padding: 0 20px 0 28px;

  background: var(--surface-color);
  border-bottom: 1px solid #eb5e28;
}

.site-header__logo {
  display: flex;
  align-items: center;
  gap: 10px;

  color: #eb5e28;
  text-decoration: none;
}

.site-header__logo-symbol {
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border: 2px solid #eb5e28;
  border-radius: 8px;

  color: #eb5e28;
  font-size: 20px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.08em;
}

.site-header__logo-text {
  color: #eb5e28;

  font-size: 23px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
}

.site-header__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
}

.site-header__nav a {
  color: var(--muted-color);
  text-decoration: none;
  text-transform: uppercase;

  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.24em;

  transition: color 0.2s ease;
}

.site-header__nav a:hover {
  color: var(--header-hover-color);
}

.site-header__nav a.site-header__link--active {
  color: #eb5e28;
}

.site-header__theme {
  justify-self: end;

  height: 30px;
  min-width: 92px;
  padding: 0 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: 2px solid #ffedac;
  border-radius: 999px;

  background: #eb5e28;
  color: #ffedac;

  font-family: var(--font-main);
  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
}

.site-header__theme-icon {
  font-size: 16px;
  line-height: 1;

  font-variation-settings:
    'FILL' 0,
    'wght' 500,
    'GRAD' 0,
    'opsz' 20;
}

@media (max-width: 900px) {
  .site-header {
    grid-template-columns: 1fr auto;
    padding: 0 20px;
  }

  .site-header__nav {
    display: none;
  }
}
</style>