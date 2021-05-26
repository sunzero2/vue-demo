const app = new Vue({ 
  el: '#app',
  data: {
      message: 'Hello Vue!'
  }
});

const app2 = new Vue({
  el: '#app2',
  data: {
    message: `You loaded this page on ${new Date().toLocaleString()}`
  }
})

const app3 = new Vue({
  el: '#app3',
  data: {
    seen: false
  }
})

const app4 = new Vue({
  el: '#app4',
  data: {
    todos: [
      { text: 'Learn Javascript' },
      { text: 'Learn Vuew' },
      { text: 'Build something awesome' },
    ]
  }
})

const app5 = new Vue({
  el: '#app5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

const app6 = new Vue({
  el: '#app6',
  data: {
    message: ''
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

const app7 = new Vue({
  el: '#app7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' },
    ]
  }
})
