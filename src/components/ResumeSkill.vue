<template>
  <div class="skill">
    <div class="skill-main">
      <div class="name">{{skill}}</div>
      <div class="rating" :class="ratingClass">
        <div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    <div class="rating-display">{{ratingDesc}}</div>
  </div>
</template>

<script>
const ratings = [
  { cssClass: 'zero', display: 'None' },
  { cssClass: 'one', display: 'Beginner' },
  { cssClass: 'two', display: 'Junior' },
  { cssClass: 'three', display: 'Intermediate' },
  { cssClass: 'four', display: 'Advanced' },
  { cssClass: 'five', display: 'Expert' },
]

export default {
  name: 'ResumeSkill',
  props: {
    skill: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true,

    },
  },
  computed: {
    ratingClass() {
      return `rating-${ratings[this.rating].cssClass}`
    },
    ratingDesc() {
      return ratings[this.rating].display
    }
  }
}
</script>

<style>

</style>
