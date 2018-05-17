<template>
  <div>
    <h1>{{title}}</h1>
    <div>
      <ol >
        <li v-for="(item, index) in todos" :key='index' @click="remove(index)">{{item.title}}</li>
      </ol>
    </div>
    <ul>
        <li v-for='(n, key) in even(numbers)' :key='key'>{{n}}222</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "标题",
      todos: [
        {
          id: 1,
          title: "do the dishes"
        },
        {
          id: 2,
          title: "take the dishes"
        },
        {
          id: 3,
          title: "now the dishes"
        }
      ],
      numbers: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    remove(index) {
      console.log(index, this.todos);
      this.todos.splice(index, 1);
    },
    even(numbers, event) {
        return numbers.filter((number) => {
            return number % 2 === 0
        })
    }
  }
};
</script>
<style lang='scss'>

</style>

