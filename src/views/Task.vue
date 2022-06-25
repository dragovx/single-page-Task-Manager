<template>
  <div class="row">
      <div class="col s6 offset-s3">
        <h1>{{task.title}}</h1>
        <form>
          <div ref="chips"></div>
          <div class="input-field">
            <input type="text" ref="datepicker">
            <label for="title">New date</label>
          </div>
          <div class="input-field">
            <input type="text" ref="timepicker">
            <label for="title">New time</label>
          </div>         
          <button class="btn col s4" @click.prevent="updateTask"> Update task </button>
          <button class="btn col s4 offset-s4" @click.prevent="deleteTask"> Delete task </button>
        </form>
      </div>
    </div>
</template>

<script>

export default {
  name: "App",
  data: ()=> ({
    chips: null,
    date: null,
    time: null,
    state: false,
  }),
  mounted() {
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: "Task tags",
      data: this.task.tags,
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      defaultDate: this.task.date,
      setDefaultDate: true,
      format: 'dd.mm.yy',
    }, true, this.task.date);
    this.time = M.Timepicker.init(this.$refs.timepicker, {
      twelveHour: false,
      defaultTime: this.task.time

    });
  },
  computed:{
    task(){
      return this.$store.getters.taskByID(+this.$route.params.id)
    }
  },
  methods:{
    updateTask(){
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        tags: this.chips,
        date: this.date.date,
        time: this.time.time
      })
      this.$router.push('/list')
    },
    deleteTask(){
      this.$store.dispatch('deleteTask', +this.$route.params.id)
      this.$router.push('/list')
    }
  },
  destroyed(){
    if (this.date && this.date.destroy){
      this.date.destroy()
    }
    if (this.chips && this.chips.destroy){
      this.chips.destroy()
    }
    if (this.time && this.time.destroy){
      this.time.destroy()
    }
  }
}
</script>
