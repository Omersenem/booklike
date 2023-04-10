<template>
  <app-header/>
  <div class="flex flex-row">
    <SideBar/>
    <app-bookmark-list/>

  </div>

</template>
<script setup>
import AppHeader from "@/components/Shered/appHeader.vue";
import SideBar from "@/components/Home/SideBar.vue";
import AppBookmarkList from "@/components/Shered/appBookmarkList/index.vue";

</script>