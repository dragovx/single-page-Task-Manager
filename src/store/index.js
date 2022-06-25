import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    completedTasks: JSON.parse(localStorage.getItem('completedTasks') || '[]')
  },
  getters: {
    tasks: s => s.tasks,
    taskByID: s => id => s.tasks.find(t => t.id === id)
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state,{id,chips,date,time}){
      const tasks = state.tasks.concat()
      const idx = tasks.findIndex(t => t.id === id)
      const task = tasks[idx]
      tasks[idx] = {...task,chips,date,time}

      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    completeTask(state, id) {
      const tasks = state.tasks.concat()
      const idx = tasks.findIndex(t => t.id === id)
      const task = tasks[idx]
      task.state = !task.state
      tasks[idx] = {...task}

      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTask(state, id) {
      const tasks = state.tasks.concat()
      const idx = tasks.findIndex(t => t.id === id)
      tasks.splice(idx,1)

      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task){
      commit('createTask', task)
    },
    updateTask({commit}, task){
      commit('updateTask', task)
    },
    completeTask({commit}, task){
      commit('completeTask', task)
    },
    deleteTask({commit}, task){
      commit('deleteTask', task)
    },
  },
  modules: {
  }
})
