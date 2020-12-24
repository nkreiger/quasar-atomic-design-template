<template>
  <div>
    <div class="row">
      <div class="col">
        <h1>Atomic Template</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <landing-example :data="'organism data one'" />
      </div>
      <div class="col-6">
        <landing-example :data="'organism data two'" />
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
