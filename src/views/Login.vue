<template>
    <div class="page">
        <div class="user-box">
            <h1>Log In</h1>
            <el-input v-model="userName" placeholder="请输入用户名"></el-input>
            <el-input v-model="passWord" placeholder="请输入密码"></el-input>
            <el-button type="primary" @click="onLogin">登录</el-button>
        </div>
    </div>
</template>
<script>
    import urlUtil from "../request/urlUtil";

    export default {
        name: 'Login',
        props: {},
        data:function () {
            return{
                userName:'admin',
                passWord:'admin'
            }
        },
        created:function () {

        },
        methods:{
            onLogin(){
                console.log('1313');
                let userName = this.userName;
                let passWord = this.passWord;
                if(userName!==''&&passWord!==''){
                    this.$http.post(this.urlUtil.API.login,{userName:userName,pwd:passWord},data=>{
                        console.log('data');
                    })
                }else {
                    this.$message('用户名或者密码错误！');
                }
            }
        }

    }
</script>
<style lang="less">
    .page {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #2c3e50;
    }

    .user-box {
        padding: 40px;
        height: 300px;
        width: 450px;
        box-sizing: border-box;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .el-input {
        margin-bottom: 20px;
    }
</style>
