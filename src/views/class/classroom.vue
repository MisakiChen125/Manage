<template>
    <div class="room_page">
        <div class="title">教室管理</div>
        <div class="room_main">
            <el-button type="primary">添加教室 +</el-button>
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="classNum"
                    label="教室号"
                    >
                </el-table-column>
                <el-table-column
                style="width: 100%"
                   
                    label="操作"
                   >
                   <span>删除</span>
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
            classNum: '2204',
            
            
          
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
.room_page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title{
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin:10px 20px;
    }
    .room_main{
        width: 100%;
        height: 100%;
        background: #fff;
        margin: 10px 20px;
    }
}
.el-button
{
  
    margin: 20px 20px;
}
.el-table{
margin: 0 20px;
}
.has-gutter{
    background: #f4f7f9;
}

</style>