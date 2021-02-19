<template>
  <!--
  define where each organism
  define extremely simple HTML logic
  fetch data and pass it to the business layer
  handle logic shared across organisms
  -->
  <div>
    <div class="row">
      <div class="col">
        <h1>Atomic Template</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <landing-example :data="'data set one'" />
      </div>
      <div class="col-6">
        <landing-example :data="'data set two'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    'landing-example': () => import('components/organisms/landing/Example.vue')
  }
}
</script>
