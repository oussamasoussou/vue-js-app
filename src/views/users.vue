<template>
    <div>
      <p>This in page of users</p>
      <table>
        <tr v-for="item in list" :key="item.id" >
          <td style="border:1px solid">{{ item.id }}</td>
          <td style="border:1px solid">{{ item.title }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'user-list',
    data(){
      return {list:undefined}
    },
    created() {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        console.log(response);
        this.list= response.data;
      });
    }
  }
  </script>
  