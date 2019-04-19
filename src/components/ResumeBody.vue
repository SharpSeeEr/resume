<template>
  <div class="container">
    <div class="header">
      <h1 class="title">{{name}}</h1>
      <h2 class="subtitle">{{title}}</h2>
      <p class="summary">
        {{summary}}
      </p>
    </div>

    <div class="columns">
      <div class="column is-three-quarter">
        <div class="section">
          <h2 class="heading">
            <span class="fas fa-briefcase"></span> Experience
          </h2>
          <div v-for="(item, index) in experience" :key="index" class="experience">
            <div class="dates">{{item.startYear}} - {{item.endYear || 'present'}}</div>
            <div class="details">
              <h3 class="position">{{item.position}}</h3>
              <div class="company">{{item.company}}</div>
              <experience-item v-for="(desc, index) in item.description" :key="index" :value="desc"></experience-item>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-right">
        <div class="section">
          <h2 class="heading">
            <span class="fas fa-user"></span>Personal Info
          </h2>
          <div v-for="item in personalInfo" :key="item.label" class="personal-info">
            <p class="label">{{item.label}}</p>
            <p class="">{{item.value}}</p>
          </div>
        </div>

        <div class="section">
          <h2 class="heading">
            <span class="fas fa-puzzle-piece"></span>Skills
          </h2>
          <resume-skill v-for="item in skills" :key="item.skill" :skill="item.skill" :rating="item.rating"></resume-skill>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/data.json'
import ExperienceItem from './ExperienceItem'
import ResumeSkill from './ResumeSkill'

export default {
  components: { ExperienceItem, ResumeSkill },
  data() {
    return data
  }
}
</script>

<style>

</style>
