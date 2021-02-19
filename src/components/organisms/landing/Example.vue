<template>
  <!--
  perform business layer logic
  pass customized data to molecules
  handle actions from molecules
  Handle simple HTML logic too small for molecule layer
  -->
  <example-molecule :data="data"
    v-on:handleClick="onClick"
  />
</template>

<script>
export default {
  components: {
    'example-molecule': () => import('components/molecules/cards/Simple.vue')
  },
  props: {
    data: {
      type: String,
      required: false
    }
  },
  methods: {
    onClick () {
      alert('do organism business logic for \n' + this.data)
    }
  }
}
</script>
