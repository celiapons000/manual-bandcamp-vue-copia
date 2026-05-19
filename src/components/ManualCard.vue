<template>
  <article class="manual-card">
    <div
      class="manual-card__media"
      :class="{ 'manual-card__media--solid': !image }"
      :style="mediaStyle"
    >
      <img
        v-if="image"
        class="manual-card__image"
        :src="image"
        :alt="alt"
      />
    </div>

    <div class="manual-card__content">
      <h3 class="manual-card__title">
        {{ title }}
      </h3>

      <p class="manual-card__text">
        {{ text }}
      </p>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: String,
    default: '',
  },
  bgColor: {
    type: String,
    default: '#EB5E28',
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
})

const mediaStyle = computed(() => {
  if (props.image) {
    return {}
  }

  return {
    backgroundColor: props.bgColor,
  }
})
</script>

<style scoped>
.manual-card {
  width: 100%;
  max-width: 340px;

  overflow: hidden;

  background: var(--manual-card-bg);
  border: 1px solid var(--manual-card-border);
  border-radius: 14px;

  color: var(--manual-card-text);

  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease;
}

.manual-card__media {
  width: 100%;
  aspect-ratio: 16 / 9;

  overflow: hidden;

  background: #eb5e28;
}

.manual-card__media--solid {
  display: block;
}

.manual-card__image {
  width: 100%;
  height: 100%;

  display: block;
  object-fit: cover;
}

.manual-card__content {
  padding: 18px 20px 22px;
}

.manual-card__title {
  margin: 0 0 10px;

  color: var(--manual-card-text);
  font-size: 26px;
  line-height: 1;
  letter-spacing: -0.04em;
  font-weight: 700;
}

.manual-card__text {
  margin: 0;

  color: var(--manual-card-text);
  font-size: 17px;
  line-height: 1.25;
  font-weight: 400;
}

@media (max-width: 900px) {
  .manual-card {
    max-width: 100%;
  }

  .manual-card__title {
    font-size: 24px;
  }

  .manual-card__text {
    font-size: 16px;
  }
}
</style>