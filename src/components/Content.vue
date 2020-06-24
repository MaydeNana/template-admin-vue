<template>
    <div class="page">
        <div class="header">
            <div class="logo top-bottom-center">logo</div>
            <div class="user top-bottom-center">
                <div class="user-name">userName</div>
                <div class="log-out">logOut</div>
            </div>
        </div>
        <div class="body">
            <div class="aside">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="container">
                <div class="container-header">
                    <div class="top-bottom-center">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                </div>
                <div class="container-body">
                    container-header
                </div>
            </div>
        </div>
        <div class="footer">footer</div>
    </div>
</template>

<script>
    export default {
        name: 'container',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .page {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .header {
        width: 100%;
        height: 10%;
        background-color: #2c3e50;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 12px;
    }

    .top-bottom-center{
        margin: auto 0;
    }

    .logo {
        width: 45px;
        height: 45px;
        background-color: saddlebrown;
    }

    .user {
        display: flex;
        flex-direction: row;
        align-container: center;
    }

    .user-name {
        margin-right: 20px;
    }

    .body {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: row;
    }

    .aside {
        width: 30%;
        height: 100%;
        background-color: #cccccc;
    }

    .container {
        width: 100%;
        height: 100%;
        background-color: #999999;
    }

    .container-header {
        display: flex;
        flex-direction: row;
        align-container: center;
        height: 5%;
        width: 100%;
        background-color: #cccccc;
    }

    .container-body {
        width: 100%;
        height: 100%;
    }

    .footer {
        width: 100%;
        height: 10%;
        background-color: #195688;
    }
</style>
