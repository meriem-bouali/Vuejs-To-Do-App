<template>
  <div class="topnav">
    <span><h2>Board</h2></span>
    <input type="text" placeholder="Search.." />
  </div>
</template>

<script>
export default {
  name: "AppBar",
};
</script>
<style scoped lang="postcss">
h2 {
  font-style: italic;
}

.topnav {
  @apply bg-gray-200;
  overflow: hidden;
  background-color: #3ccabc;
}

/* Style the links inside the navigation bar */
.topnav h2 {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Style the search box inside the navigation bar */
.topnav input {
  @apply rounded-md border;
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
  background-color: rgb(255, 255, 255, 0.35);
  min-width: 300px;
}
.topnav input:focus {
  @apply rounded-md outline-none;
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
  background-color: rgb(255, 255, 255, 0.35);
  min-width: 300px;
  border: 2px solid rgb(255, 255, 255, 0.5);
}
</style>
