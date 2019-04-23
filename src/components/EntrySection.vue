<template>
  <div class="section">
    <h2 class="title">
      <span v-if="icon" :class="`fas fa-${icon} fa-fw`"></span>{{title}}
    </h2>
    <div v-for="(item, index) in entries" :key="index" class="entry" :class="{ 'page-break': item.pageBreak }">
      <template v-if="!item.pageBreak">
        <p class="dates">
          {{item.startYear}} - {{item.endYear || 'present'}}
        </p>
        <div class="details">
          <h3 class="title">{{item.title}}</h3>
          <div class="subtitle">{{item.subtitle}}</div>
          <entry-item v-for="(desc, index) in item.description" :key="index" :value="desc"></entry-item>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import EntryItem from './EntryItem'

export default {
  name: 'EntrySetion',
  components: { EntryItem },
  props: {
    icon: String,
    title: {
      type: String,
      required: true
    },
    entries: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>
