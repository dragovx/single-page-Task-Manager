<template>
    <div class="row">
      <div class="col s6 offset-s3">
        <h1>Create task</h1>
        <form @submit.prevent="sumbitHandler">
          <div class="input-field">
            <input id="title" v-model="title" type="text" class="validate" required>
            <label for="title">Title</label>
          </div>
          <div ref="chips"></div>
          <div class="input-field">
            <input type="text" ref="datepicker">
            <label for="title">Date</label>
          </div>
          <div class="input-field">
            <input type="text" ref="timepicker">
            <label for="title">Time</label>
          </div>
          
          
          <button class="btn col s3" type="submit"> Create task </button>
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
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      setDefaultDate: true,
      format: 'dd.mm.yy'
    });
    this.time = M.Timepicker.init(this.$refs.timepicker, {
      twelveHour: false,
      donetext: 'OK'

    });
  },
 
  methods:{
    sumbitHandler(){
      const task = {
        title: this.title,
        id: Date.now(),
        tags: this.chips.chipsData,
        date: this.date.date,
        time: this.time.time,
      }
      this.$store.dispatch('createTask', task)
      this.$router.push('/list')
    }
  },
};
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
</style>
