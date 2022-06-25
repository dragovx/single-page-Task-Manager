<template>
    <div class="row">
      <div class="col s8 offset-s2">
        <h1>Task List</h1>
        <hr>
        <table v-if="tasks.length" class="highlight">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Tags</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(task, idx) of tasks" :key="task.id" @click="taskpage(task.id)" :class="task.state ? 'done' : ''">
              <td>{{idx + 1}}</td>
              <td>{{task.title}}</td>
              <td>
                <li v-for="elem of task.tags" :key="elem.tag">{{elem.tag}} </li>
              </td>
              <td>{{new Date(task.date).toLocaleDateString() + "/" + task.time}} </td>
              <td @click.stop>
                <label v-if="!task.state">
                  <input type="checkbox" class="filled-in"  v-model="task.state" @click="completeTask(task.id, task.title)"/>
                  <span></span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-else>No tasks</p>
      </div>
    </div>
</template>

<script>

export default {
  name: 'List',
  components: {
    
  },
   computed:{
    tasks(){
      return this.$store.getters.tasks.sort(function(a,b){
        return (a.state > b.state) ? 1 : -1
      })
    }
  },
  methods:{
    taskpage(id){
      this.$router.push({ path: `/task/${id}`})
    },
    completeTask(id){
      this.$store.dispatch('completeTask',id)
    }
  }
}
</script>

<style lang="scss" scoped>
.done{
  background: repeating-linear-gradient(
    180deg,
    black 0%,
    black 100%
  );
  background-size: 100% 2px;
  background-position: left;
  background-repeat: no-repeat;
    

}
</style>