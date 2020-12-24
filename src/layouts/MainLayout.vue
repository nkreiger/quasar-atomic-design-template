<template>
  <q-layout view="lHh Lpr lFf">
    <nav-header />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  components: {
    'nav-header': () => import('components/organisms/nav/Header.vue')
  }
}
</script>
