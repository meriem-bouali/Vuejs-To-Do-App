<template>
  <div class="h-screen">
    <AppBar />
    <div class="board">
      <div class="fles flex row items-start">
        <Column
          v-for="(column, columnIndex) of board.columns"
          :key="columnIndex"
          :column="column"
          :columnIndex="columnIndex"
          :board="board"
        />

        <div class="column flex">
          <input
            class="p-2 flex-grow outline-none"
            type="text"
            placeholder="New Column Name"
            v-model="newColumnName"
            @keyup.enter="createColumn"
          />
          <font-awesome-icon
            class="add-column"
            size="2x"
            @click="createColumn"
            icon="plus-square"
          />
        </div>
      </div>
      <div class="task-bg" v-if="isTaskOpen" @click.self="close">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Column from "../components/Column.vue";
import AppBar from "../components/AppBar.vue";
export default {
  components: { Column, AppBar },
  name: "Board",
  data() {
    return {
      newColumnName: "",
    };
  },
  computed: {
    ...mapState(["board"]),
    isTaskOpen() {
      return this.$route.name === "task";
    },
  },
  methods: {
    close: function () {
      this.$router.push({ name: "board" });
    },

    createColumn: function () {
      if (this.newColumnName !== "") {
        this.$store.commit("create_column", { name: this.newColumnName });
        this.newColumnName = "";
      }
    },
  },
};
</script>

<style lang="postcss">
.board {
  @apply p-4  overflow-auto;
  background-color: #64d5ca;
  height: calc(100% - 60px);
}
.task-bg {
  @apply absolute; /* @apply pin absolute; */
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.column {
  @apply bg-gray-200  p-2 mr-4 text-left shadow rounded;
  min-width: 304px;
}

.add-column {
  @apply m-1 bg-gray-200 pl-1;
  color: #3ccabc;
}
</style>
