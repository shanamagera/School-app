<template>
<div class="container">
  <div>
    <form @submit.prevent="createCourse" method="post">
      <card>
      <card-body>
  <div class="mb-3">
    <label for="name" class="form-label">Course Name</label>
    <input type="text" v-model="name" class="form-control" id="name" placeholder="course name">>
    
  </div>
  <div class="mb-3">
    <label for="amount" class="form-label">Course Amount</label>
    <input type="text" v-model="amount" class="form-control" id="amount" placeholder="course amount">
  </div>
</card-body>
  <button type="submit" class="btn btn-primary">Update</button>
  &nbsp;&nbsp;&nbsp;
  <button type="reset" class="btn btn-primary">Cancel</button>
</card>
    </form>
  </div>

</div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default{
name:'NewCourse',
data (){
  return{
    name: '',
    amount:''
  };
},
methods:{
  async createCourse(){
    await axios.post('http://127.0.0.1:8000/api/create-course', {
      'name':this.name,
      'amount':this.amount
    });
    router.push('/courses');
  }
}
}
</script>