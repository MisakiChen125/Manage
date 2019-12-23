<template>
  <div class="tepi_page">
    <div class="title">待批班级</div>
   
    <template>
        <el-table :data="classList.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
        <el-table-column prop="grade_name" label="班级名" ></el-table-column>
        <el-table-column prop="subject_text" label="课程名称"></el-table-column>
        <el-table-column prop="room_text" label="阅卷状态"></el-table-column>
        <el-table-column prop="subject_text" label="课程名称" width="180"></el-table-column>
        <el-table-column prop="yield" label="成材率"></el-table-column>
        <el-table-column prop="operate" label="操作">
            <a href="#" @click="tiao">批卷</a>
        </el-table-column>
      </el-table>
     
      
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5,10,15,20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totle"
        ></el-pagination>
      </div>
    </template>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  props: {},
  components: {},
  data() {
    return {    
      currentPage: 1,//当前页码
      pageSize:5,//当前数据显示条数
      totle:12
    };
  },
  computed: {
    ...mapState({
      classList:state=>state.studentClass.classList
    })
  },
  methods: {
    ...mapMutations({
      setStates:"studentClass/setStates"
    }),
    handleSizeChange(val) {
     
      this.pageSize=val
      this.currentPage=1

    },
    handleCurrentChange(val) {
      
      this.currentPage=val
      console.log(val)
      
      // this.setStates({pageSize:this.pageSize,current:val})
    },
    ...mapActions({
      acquireYetClass:"studentClass/acquireYetClass"
    }),
    tiao(){
      this.$router.push('/yuejuan/pijuan')
    }
    
  },
  created() {
    this.acquireYetClass()
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.tepi_page{
    margin: 20px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}


.title{
  width: 100%;
  height: 50px;
  line-height: 50px;
  // margin: 20px;
  font-size: 20px;
  margin-bottom: 15px;
}
.el-table{
  border-radius: 10px;
}
.block{
  width: 100%;
  text-align: right;
  margin: 15px 10px;
}
 
</style>