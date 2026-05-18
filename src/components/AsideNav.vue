<template>
  <aside class="aside-nav">
    <div class="aside-nav__content">
      <nav class="aside-nav__menu">
        <NavButton
          v-for="item in navItems"
          :key="item.id"
          :href="item.href"
          :label="item.label"
          :active="activeSection === item.id"
          :is-light-mode="isLightMode"
          @select="$emit('select', item.id)"
        />
      </nav>
    </div>
  </aside>
</template>

<script setup>
import NavButton from './NavButton.vue'

defineEmits(['select'])

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

const navItems = [
  {
    id: 'inicio',
    href: '#inicio',
    label: 'Inicio'
  },
  {
    id: 'sistema',
    href: '#sistema',
    label: 'Sistema'
  },
  {
    id: 'logo',
    href: '#logo',
    label: 'Logo'
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
    id: 'layout',
    href: '#layout',
    label: 'Layout'
  },
  {
    id: 'modulo',
    href: '#modulo',
    label: 'Módulo flexible'
  },
  {
    id: 'fotografia',
    href: '#fotografia',
    label: 'Fotografía'
  },
  {
    id: 'motion',
    href: '#motion',
    label: 'Motion'
  },
  {
    id: 'aplicaciones',
    href: '#aplicaciones',
    label: 'Aplicaciones'
  }
]
</script>

<style scoped>
.aside-nav {
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 90;

  width: 250px;
  height: calc(100vh - 50px);

  background: var(--surface-color);
  border-right: 1px solid #765a48;
}

.aside-nav__content {
  height: 100%;
  padding: 36px 22px 32px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: none;
  -ms-overflow-style: none;
}

.aside-nav__content::-webkit-scrollbar {
  display: none;
}

.aside-nav__menu {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

@media (max-width: 900px) {
  .aside-nav {
    display: none;
  }
}
</style>