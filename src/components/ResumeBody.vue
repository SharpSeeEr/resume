<template>
  <div class="container">
    <div class="header">
      <h1 class="name">{{name}}</h1>
      <h2 class="profession">{{title}}</h2>
      <p class="summary">
        {{companySummary}}
      </p>
    </div>

    <div class="columns">

      <div class="column column-side">
        <div class="section">
          <h2 class="title">
            <span class="fas fa-user"></span>Personal Info
          </h2>
          <personal-info v-for="item in personalInfo" :key="item.label" :value="item"></personal-info>
        </div>

        <div class="section">
          <h2 class="title">
            <span class="fas fa-puzzle-piece"></span>Skills
          </h2>
          <div class="skills">
            <resume-skill v-for="item in skills" :key="item.skill" :skill="item.skill" :rating="item.rating"></resume-skill>
            <resume-skill v-for="item in companyOverrides.skills" :key="item.skill" :skill="item.skill" :rating="item.rating"></resume-skill>
          </div>
        </div>
      </div>

      <div class="column column-main">
        <entry-section icon="briefcase" title="Experience" :entries="experience"></entry-section>
        <entry-section icon="graduation-cap" title="Education" :entries="education"></entry-section>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/data.json'
import EntrySection from './EntrySection'
import ResumeSkill from './ResumeSkill'
import PersonalInfo from './PersonalInfo'

export default {
  components: { EntrySection, ResumeSkill, PersonalInfo },
  data() {
    return data
  },
  computed: {
    company() {
      return (this.$route.params.company || '').toLowerCase()
    },
    companyOverrides() {
      return this.overrides[this.company] || {}
    },
    companySummary() {
      return this.overrides[this.company] && this.overrides[this.company].summary ? this.overrides[this.company].summary : this.summary
    },
    companySkills() {
      return this.companyOverrides.skills
    }
  }
}
</script>

<style>

</style>
