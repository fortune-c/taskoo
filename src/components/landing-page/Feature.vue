<script setup>
import { DocumentIcon, UsersIcon, DocumentCheckIcon, ChatBubbleOvalLeftIcon, MicrophoneIcon, BellAlertIcon } from "@heroicons/vue/16/solid/index.js";

const features = [
  { icon: DocumentIcon, title: "Kanban Board", description: "Visualize your workflow with drag-and-drop task management" },
  { icon: UsersIcon, title: "Team Collaboration", description: "Work together seamlessly with role-based permissions" },
  { icon: DocumentCheckIcon, title: "Approval Workflow", description: "Smart approval system for team changes and updates" },
  { icon: ChatBubbleOvalLeftIcon, title: "Task Comments", description: "Discuss tasks with threaded comments and file sharing" },
  { icon: MicrophoneIcon, title: "Meeting Transcription", description: "AI-powered transcription for all your team meetings" },
  { icon: BellAlertIcon, title: "Real-time Notifications", description: "Stay updated with instant notifications and alerts" }
];
</script>

<template>
  <section id="features" class="features">
    <h3>Powerful Features for Team Success</h3>
    <div class="features-list">
      <div class="feature-items" v-for="feature in features" :key="feature.title">
        <component :is="feature.icon" class="icons"/>
        <h4>{{ feature.title }}</h4>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

  .features {
    margin: 10px auto;
    text-align: center;
    justify-content: center;
  }

  .features h3 {
    font-size: 4rem;
    margin: 20px 0;
  }

  .features-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .feature-items {
    border: 1px solid white;
    margin: 10px 30px;
    padding: 40px 30px;
    cursor: pointer;
    transition-duration: 0.3s;
    transition-delay: 0.2s;
  }

  .feature-items:hover {
    border: 1px solid grey;
    color: grey;
  }

  .feature-items p {
    font-size: 12px;
  }

  .icons {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    .features h3 {
      font-size: 1rem;
    }

    .features-list {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
</style>
