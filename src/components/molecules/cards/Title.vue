<template>
  <div>
    <div class="text-h6">{{ data }}</div>
    <div class="text-subtitle2">by MOLECULE</div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      required: false
    }
  }
}
</script>
