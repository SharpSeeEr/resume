<template>
  <div class="personal-info">
    <p class="label">{{value.label}}</p>
    <p>
      <a v-if="value.link" :target="targetWindow" :href="href">{{value.value}}</a>
      <template v-else>{{value.value}}</template>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    href() {
      if (this.value.link === 'mailto') {
        return `mailto:${this.value.value}`
      }
      return this.value.link
    },
    targetWindow() {
      return this.value.link === 'mailto' ? '' : 'new'
    }
  }
}
</script>

<style>

</style>
