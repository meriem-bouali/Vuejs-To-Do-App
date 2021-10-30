import { createStore } from "vuex";
import defaultBoard from "./default-board";
import { saveStatePlugin, uuid } from "./utils";

const board = JSON.parse(localStorage.getItem("board")) || defaultBoard;
export default createStore({
  state: { board: board },
  mutations: {
    create_task(state, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: "",
      });
    },
    update_task(state, { task, key, value }) {
      task[key] = value;
    },
    move_task(state, { fromTasks, fromTaskIndex, toTasks, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0];
      toTasks.splice(toTaskIndex, 0, taskToMove);
    },
    delete_task(state, { columnIndex, taskIndex }) {
      state.board.columns[columnIndex].tasks.splice(taskIndex, 1);
    },
    move_column(state, { fromColumnIndex, toColumnIndex }) {
      const columnList = state.board.columns;
      const columnToMove = columnList.splice(fromColumnIndex, 1)[0];
      columnList.splice(toColumnIndex, 0, columnToMove);
    },
    create_column(state, { name }) {
      state.board.columns.push({
        name,
        tasks: [],
      });
    },
    delete_column(state, { columnIndex }) {
      state.board.columns.splice(columnIndex, 1);
    },
  },
  actions: {},
  modules: {},
  plugins: [saveStatePlugin],
  getters: {
    getTask(state) {
      return (id) => {
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task;
            }
          }
        }
      };
    },
  },
});
