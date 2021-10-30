<template>
  <div class="topnav">
    <span><h1>Board</h1></span>
    <input type="text" placeholder="Search.." />
  </div>
</template>

<script>
export default {
  name: "AppBar",
};
</script>
<style scoped lang="postcss">
 @import url('https://fonts.googleapis.com/css2?family=Fruktur&display=swap');
.topnav {
  @apply bg-gray-200;
  overflow: hidden;
  background-color: #3ccabc;
}


.topnav h1 {
  font-style: italic;
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration:none;
  font-size: 20px;
  font-family: 'Fruktur', cursive;
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
