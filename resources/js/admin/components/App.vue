<template>
  <div>
    <layout :csrf="csrf">
      <transition name="fade" mode="out-in">
        <router-view v-if="$online" :key="$route.fullPath"></router-view>
        <offline v-else></offline>
      </transition>
    </layout>
  </div>
</template>

<script>
export default {
  props: {
    csrf: String,
  },
};
</script>

<style>
/* route transitions */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
