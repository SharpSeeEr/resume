<template>
  <div>
    <ul v-if="value.format === 'ul'" class="description">
      <li v-for="(item, index) in value.items" :key="index">
        {{item}}
      </li>
    </ul>
    <template v-else>
      <p v-for="(item, index) in value.items" :key="index">
        {{item}}
      </p>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>

</style>
