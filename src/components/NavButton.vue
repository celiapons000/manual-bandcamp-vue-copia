<template>
  <a
    class="nav-button"
    :class="{ 'nav-button--active': active }"
    :href="href"
    @click="$emit('select')"
  >
    <span class="nav-button__label">{{ label }}</span>
    <span class="nav-button__arrow">▶</span>
  </a>
</template>

<script setup>
defineEmits(['select'])

defineProps({
  href: {
    type: String,
    default: '#'
  },
  label: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  isLightMode: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.nav-button {
  width: 100%;
  height: 48px;
  padding: 0 26px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 999px;

  background: transparent;
  color: var(--text-color);

  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.nav-button__label {
  display: block;
  transform: translateY(-1px);
}

.nav-button__arrow {
  font-size: 18px;
  line-height: 1;
  color: #1b1917;

  opacity: 0;
  transform: translateX(-4px);

  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    color 0.2s ease;
}

/* HOVER */
.nav-button:hover {
  background: var(--nav-button-hover-bg);
  color: #1b1917;
}

.nav-button:hover .nav-button__arrow {
  opacity: 1;
  transform: translateX(0);
  color: #1b1917;
}

/* ACTIVE / FOCUSED */
.nav-button--active {
  background: #eb5e28;
  color: #ffffff;
}

.nav-button--active .nav-button__arrow {
  opacity: 1;
  transform: translateX(0);
  color: #ffedac;
}

.nav-button--active:hover {
  background: #eb5e28;
  color: #ffffff;
}

.nav-button--active:hover .nav-button__arrow {
  color: #ffedac;
}
</style>