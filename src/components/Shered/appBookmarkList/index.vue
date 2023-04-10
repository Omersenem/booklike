<template>
  <div>
    <div style="flex-wrap: wrap" class="p-2 flex  gap-4  ">
      <BookmarkListItem v-for="i in 10" :key="i"/>

    </div>
  </div>
</template>

<script>
import BookmarkListItem from "@/components/Shered/appBookmarkList/BookmarkListItem.vue";
export default {
  components:{
    BookmarkListItem
  }
}
</script>
