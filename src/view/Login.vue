<template>
    <div class="login">
       <el-form ref="form" :model="form" class="container" :rules="rules">
           <el-form-item>
                <div class="login-img">
                    <img src="../assets/avatar.jpg" alt="">
                </div>
            </el-form-item>
            <el-form-item prop="username">
                <el-input v-model="form.username" placeholder="账户" prefix-icon="myicon myicon-user"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password" placeholder="密码" prefix-icon="myicon myicon-key"></el-input>
            </el-form-item>
            <el-button type="primary" @click="submitForm('form')" class="login-btn">登录</el-button>
       </el-form>
    </div>
</template>
<script>
import {getLogin} from '../api/index.js'
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            getLogin(this.form)
            .then(res=>{
              localStorage.setItem('mytoken',res.data.token)
              this.$router.push('/')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
};
</script>
<style scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
}
.container {
  width: 400px;
  margin: 200px auto;
  background-color: #fff;
  padding: 0px 40px 15px 40px;
}
.login-img {
  position: relative;
  margin-top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #fff;
  overflow: hidden;
  box-sizing: border-box;
  border: 10px solid #fff;
  box-shadow: 0 1px 5px #ccc;
}
.login-btn {
  width: 100%;
}
</style>
