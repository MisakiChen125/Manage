<template>
    <div class="class_page">
        <div class="title">班级管理</div>
        <div class="class_main">
            <el-button type="primary">添加班级 +</el-button>
               <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="cname"
                        label="班级名"
                       >
                    </el-table-column>
                    <el-table-column
                        prop="jname"
                        label="课程名"
                       >
                    </el-table-column>
                    <el-table-column
                        prop="cnum"
                        label="教室号">
                    </el-table-column>
                    <el-table-column label="操作">
                        <li>
                            <span>修改</span>/
                            <span>删除</span>
                        </li>
                    </el-table-column>
                </el-table>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            tableData: [{
                cname:'1701A',
                jname:'javascript',
                cnum:'3305'
          }]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
.class_page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title{
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin: 20px;
        font-size: 20px;
    }
    .class_main{
        flex: 1;
        margin: 0 20px;
        background: #fff;;
    }
    .el-button{
        margin: 20px;
        background: #4e75ff;
    }
}
</style>