<template>
  <q-card
    class="my-card text-white"
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
  >
    <q-card-section>
      <example-molecule :data="data" />
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ lorem }}
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  components: {
    'example-molecule': () => import('components/molecules/cards/Title.vue')
  },
  props: {
    data: {
      type: String,
      required: false
    }
  }
}
</script>
