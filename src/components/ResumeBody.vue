<template>
  <div class="container">
    <div class="header">
      <h1 class="name">{{name}}</h1>
      <h2 class="profession">{{title}}</h2>
      <p class="summary">
        {{summary}}
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
          </div>
        </div>
      </div>

      <div class="column column-main">

        <div class="section">
          <h2 class="title">
            <span class="fas fa-briefcase"></span>Experience
          </h2>
          <div v-for="(item, index) in experience" :key="index" class="entry" :class="{ 'page-break': item.pageBreak }">
            <template v-if="!item.pageBreak">
              <p class="dates">
                {{item.startYear}} - {{item.endYear || 'present'}}
              </p>
              <div class="details">
                <h3 class="title">{{item.position}}</h3>
                <div class="subtitle">{{item.company}}</div>
                <experience-item v-for="(desc, index) in item.description" :key="index" :value="desc"></experience-item>
              </div>
            </template>
          </div>
        </div>

        <div v-if="education" class="section">
          <h2 class="title">
            <span class="fas fa-briefcase"></span>Education
          </h2>
          <div v-for="(item, index) in education" :key="index" class="entry">
            <p class="dates">
              {{item.startYear}} - {{item.endYear || 'present'}}
            </p>
            <div class="details">
              <h3 class="title">{{item.schoolName}}</h3>
              <div class="subtitle">{{item.degree}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/data.json'
import ExperienceItem from './ExperienceItem'
import ResumeSkill from './ResumeSkill'
import PersonalInfo from './PersonalInfo'

export default {
  components: { ExperienceItem, ResumeSkill, PersonalInfo },
  data() {
    return data
  }
}
</script>

<style>

</style>
