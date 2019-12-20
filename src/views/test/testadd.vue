<template>
  <div class="test-wrap">
    <header>添加考试</header>
    <section class="test-sec">
      <div class="test-name">
        <p>试卷名称:</p>
        <el-input placeholder="请输入内容"></el-input>
      </div>
      <!-- 选择考试的类型 -->
      <div class="test-name">
        <p>选择考试类型:</p>
        <el-select v-model="value">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <!-- 选择课程 -->
      <div class="test-name">
        <p>选择课程:</p>
        <el-select v-model="value">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <!-- 试卷的题量 -->
      <div class="test-name">
        <p>设置题量:</p>
        <el-input-number
          v-model="num"
          controls-position="right"
          @change="handleChange"
          :min="1"
          :max="200"
        ></el-input-number>
      </div>
      <!-- 考试的时间 -->
      <div class="test-name">
        <p>考试时间:</p>
        <div class="block">
          <el-date-picker
            v-model="value2"
            type="datetime"
            placeholder="选择开始日期时间"
            align="right"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>   
         <div class="block">
          <el-date-picker
            v-model="value2"
            type="datetime"
            placeholder="选择结束日期时间"
            align="right"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>     
      </div>
      <!-- 按钮 -->
       <el-button type="primary">创建试卷</el-button>
    </section>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "周考一"
        },
        {
          value: "选项2",
          label: "周考二"
        },
        {
          value: "选项3",
          label: "周考三"
        },
        {
          value: "选项4",
          label: "月考A"
        },
        {
          value: "选项5",
          label: "月考B"
        }
      ],
      value: "",
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
        value1: '',
        value2: '',
        value3: ''
      };
    
  },
  computed: {},
  methods: {
    handleChange(value) {}
  },
  created() {},
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