<template>
  <div class="task-view">
    <div class="flex flex-col flex-grow items-srart justify-content px-4">
      <input
        class="p-2 w-full mr-2 block trxt-xl font-bold outline-none"
        type="text"
        :value="task.name"
        @change="updateTskProperty($event, 'name')"
        @keyup.enter="updateTskProperty($event, 'name')"
      />
      <textarea
        class="
          relative
          w-full
          bg-transparent
          px-2
          mt-2
          h-64
          border-none
          outline-none
          leading-normal
        "
        :value="task.description"
        @change="updateTskProperty($event, 'description')"
        @keyup.enter="updateTskProperty($event, 'description')"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTask"]),
    task() {
      console.log(this.$route.params.id);
      return this.getTask(this.$route.params.id);
    },
  },
  methods: {
    updateTskProperty: function (e, key) {
      this.$store.commit("update_task", {
        task: this.task,
        key,
        value: e.target.value,
      });
    },
  },
};
</script>

<style lang="postcss">
.task-view {
  @apply relative flex flex-row bg-white/*pin*/ mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
