<template>
  <div
    class="column"
    draggable="true"
    @dragstart.self="pickupClumn($event, columnIndex)"
    @drop.stop="moveTaskOrColumn($event, column.tasks, columnIndex, taskIndex)"
    @dragover.prevent
    @dragenter.prevent
  >
    <div class="mb-2 font-bold">
      {{ column.name }}

      <font-awesome-icon
        class="delete-column"
        @click.stop="deleteColumn"
        icon="trash-alt"
      />
    </div>
    <div class="list-reset">
      <ColumnTask
        v-for="(task, taskIndex) of column.tasks"
        :key="taskIndex"
        :columnIndex="columnIndex"
        :taskIndex="taskIndex"
        :task="task"
        :board="board"
        :tasks="column.tasks"
      />
    </div>
    <input
      class="block p-2 w-full bg-transparent outline-none"
      type="text"
      placeholder="+ Enter new task"
      @keyup.enter="createTask($event, column.tasks)"
    />
  </div>
</template>
<script>
import ColumnTask from "./ColumnTask.vue";
import movingTasksAndColumnsMixins from "@/mixins/movingTasksAndColumnsMixin";
export default {
  name: "Column",
  data() {
    return {
      newColumnName: "",
    };
  },
  mixins: [movingTasksAndColumnsMixins],
  components: { ColumnTask },
  props: {
    column: { type: Object, required: true },
  },

  methods: {
    moveTaskOrColumn(e, toTasks, toColumnIndex, toTaskIndex) {
      const type = e.dataTransfer.getData("type");
      if (type === "task") {
        this.moveTask(
          e,
          toTasks,
          toTaskIndex != undefined ? toTaskIndex : toTasks.length
        );
      } else {
        this.moveColumn(e, toColumnIndex);
      }
    },
    createTask: function (e, tasks) {
      this.$store.commit("create_task", { tasks, name: e.target.value });
      e.target.value = "";
    },
    pickupClumn(e, fromcolumnIndex) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.setData("from-c-index", fromcolumnIndex);
      e.dataTransfer.setData("type", "column");
    },
    moveColumn(e, toColumnIndex) {
      const fromColumnIndex = e.dataTransfer.getData("from-c-index");
      console.log("from:", fromColumnIndex, " --- to: ", toColumnIndex);
      this.$store.commit("move_column", { fromColumnIndex, toColumnIndex });
    },
    deleteColumn: function () {
      this.$store.commit("delete_column", {
        columnIndex: this.columnIndex,
      });
    },
  },
};
</script>

<style scoped lang="postcss">
.column {
  @apply bg-gray-200  p-2 mr-4 text-left shadow rounded;
  min-width: 304px;
}
.delete-column {
  @apply float-right;
}
.delete-column:hover {
  @apply float-right;
  color: red;
}
</style>
