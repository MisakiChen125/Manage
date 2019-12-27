<template>
  <div class="test-wrap">
    <header>添加考试</header>
    <section class="test-sec">
      <div class="test-name">
        <p>试卷名称:</p>
        <el-input placeholder="请输入内容" v-model="title"></el-input>
      </div>
      <!-- 选择考试的类型 -->
      <div class="test-name">
        <p>选择考试类型:</p>
        <el-select v-model="exam_id">
          <el-option
            v-for="(item,index) in examAllList"
            :key="index"
            :label="item.exam_name"
            :value="item.exam_name"
          ></el-option>
        </el-select>
      </div>

      <!-- 选择课程 -->
      <div class="testBam">
        <p>选择课程:</p>
        <el-select v-model="subject_id">
          <el-option
            v-for="(item,index) in getClass"
            :key="index"
            :label="item.subject_text"
            :value="item.subject_text" 
          ></el-option>
        </el-select>
      </div>

      <!-- 试卷的题量 -->
      <div class="test-name">
        <p>设置题量:</p>
        <el-input-number
          v-model="number"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </div>
      <!-- 考试的时间 -->
      <div class="test-name">
        <p>考试时间:</p>
        <div class="block">
          <el-date-picker
            v-model="start_time"
            type="datetime"
            placeholder="选择开始日期时间"
            align="right"
            value-format="timestamp"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>   
         <div class="block">
          <el-date-picker
            v-model="end_time"
            type="datetime"
            placeholder="选择结束日期时间"
            align="right"
            value-format="timestamp"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>     
      </div>
      <!-- 按钮 -->
       <el-button type="primary" @click="tabCreat">创建试卷</el-button>
    </section>
  </div>
</template>
<script>
import { mapState,mapActions } from 'vuex';
export default {
  props: {},
  components: {},
  data() {
    return {
      num: 1,
       pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        title:"",//试卷名称
        subject_id:"",//学科
        exam_id:"",//试卷类型
        number:3,//题量
        start_time:"",//开始时间
        end_time:""//结束时间
      };
    
  },
  computed: {
    ...mapState({
         examAllList:state=>state.questions.examList,
         getClass:state=>state.questions.getClass,
    })
  },
  methods: {
    handleChange(value) {},
    ...mapActions({
        examType:'questions/examType',
        examAllType:'questions/examAllType', 
        creExam:"questions/creExam"
    }),
    tabCreat(){
      let data={
        title:this.title,
        subject_id:this.subject_id,
        exam_id:this.exam_id,
        number:this.number,
        start_time:this.start_time,
        end_time:this.end_time
      }
//      console.log(data,"....vue")
      this.creExam(data)
      if(this.title!=""&&this.subject_id!=""&&this.exam_id!=""&&this.number!=""&&this.start_time!=""&&this.end_time!=""){
      this.$router.push("testCreate")
      }
    }
  },
  created() {
    this.examType(),
    this.examAllType()
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.test-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eeeeee;
  header {
    width: 100%;
    height: 45px;
    line-height: 45px;
  }
}
.test-sec {
  flex: 1;
  width: 100%;
 padding: 1rem ;
 box-sizing: border-box;
  background: #ffffff;
  margin-top: 5px;
  border-radius: 13px 0;
}
.testBam{
   width: 100%;
  p {
    margin-top: 20px;
  }
  .el-input {
    margin-top: 10px;
    border-radius: none;
    width: 500px;
    height: 45px;
  }
}
.test-name {
  width: 100%;
  p {
    margin-top: 20px;
  }
  .el-input {
    margin-top: 10px;
    border-radius: none;
    width: 500px;
    height: 45px;
  }
}
</style>