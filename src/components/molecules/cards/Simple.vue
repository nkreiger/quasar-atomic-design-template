<template>
  <!--
  Receive and display
  Emit actions
  -->
  <q-card
    class="my-card text-white"
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
  >
    <q-card-section>
      <div class="text-h6">{{ data }}</div>
      <div class="text-subtitle2">by MOLECULE</div>
    </q-card-section>

    <q-card-section>
      <q-btn color="secondary" @click="handleClick" label="Molecule Button" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      required: false
    }
  },
  methods: {
    handleClick () {
      this.$emit('handleClick')
    }
  }
}
</script>
