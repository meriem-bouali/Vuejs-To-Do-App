export default {
  props: {
    columnIndex: { type: Number, required: true },
    board: { type: Object, required: true },
  },
  methods: {
    moveTask(e, toTasks, toTaskIndex) {
      const fromColumnIndex = e.dataTransfer.getData("from-column-index");
      const fromTasks = this.board.columns[fromColumnIndex].tasks;
      const fromTaskIndex = e.dataTransfer.getData("from-task-index");
      console.log(fromTaskIndex, toTaskIndex);
      this.$store.commit("move_task", {
        fromTasks,
        fromTaskIndex,
        toTasks,
        toTaskIndex,
      });
    },
  },
};
