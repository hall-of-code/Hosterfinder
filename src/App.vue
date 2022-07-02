<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeComponent from './views/HomeComponent.vue';
import SideNavComponent from './components/sideNavComponent.vue';
import MainAreaComponent from './components/mainAreaComponent.vue';
import styles from '@/assets/base.css';


</script>

<template>
  <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>Hoster-Finder: Home</title>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"> 
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
     <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  </head>
  <body>
    <div class="container-fluid overflow-auto">
      <div class="row">
        <SideNavComponent />
        <MainAreaComponent />
      </div>
    </div>
  </body>

  <!--RouterView /-->
</template>
