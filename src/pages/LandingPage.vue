<template>
  <q-page padding>
    <landing-template />
  </q-page>
</template>

<script>
export default {
  name: 'Landing',
  components: {
    'landing-template': () => import('components/templates/LandingTemplate.vue')
  }
}
</script>
