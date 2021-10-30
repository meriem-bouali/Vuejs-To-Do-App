<template>
  <div
    class="task"
    draggable="true"
    @dragstart.self="pickupTask($event, taskIndex, columnIndex)"
    @click="goToTask(task)"
    @dragover.prevent
    @dragenter.prevent
    @drop.stop="moveTask($event, tasks, taskIndex)"
  >
    <span class="w-full flex-no-shrink font-bold"
      >{{ task.name
      }}<font-awesome-icon
        class="delete-task"
        @click.stop="deleteTask"
        icon="trash-alt"
    /></span>
    <p v-if="task.description" class="w-full flex-no-shrink mt-1 text-sm">
      {{ task.description }}
    </p>
  </div>
</template>
<script>
import movingTasksAndColumnsMixins from "@/mixins/movingTasksAndColumnsMixin";
export default {
  name: "ColumbTask",
  mixins: [movingTasksAndColumnsMixins],
  props: {
    taskIndex: { type: Number, required: true },
    task: { type: Object, required: true },
    tasks: { type: Array, required: true },
  },
  methods: {
    pickupTask(e, fromTaskIndex, fromColumnIndex) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.setData("from-task-index", fromTaskIndex);
      e.dataTransfer.setData("from-column-index", fromColumnIndex);
      e.dataTransfer.setData("type", "task");
    },
    goToTask: function (task) {
      this.$router.push({ name: "task", params: { id: task.id } });
      console.log("task");
    },
    deleteTask: function () {
      this.$store.commit("delete_task", {
        columnIndex: this.columnIndex,
        taskIndex: this.taskIndex,
      });
    },
  },
};
</script>
<style scoped lang="postcss">
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-gray-900 no-underline;
}
.delete-task {
  @apply float-right;
  color: #e5e7eb;
}
.delete-task:hover {
  @apply float-right;
  color: red;
}
</style>
