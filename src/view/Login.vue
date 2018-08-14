<template>
    <div class="login">
       <el-form ref="form" :model="form" class="container">
           <el-form-item>
                <div class="login-img">
                    <img src="../assets/avatar.jpg" alt="">
                </div>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.username" placeholder="账户" prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.password" placeholder="密码" prefix-icon="el-icon-search"></el-input>
            </el-form-item>
            <el-button type="primary" @click="onSubmit" class="login-btn">登录</el-button>
       </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit: function() {

            }
        }
    }
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
