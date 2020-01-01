<template>
  <div class="pijuan_page">
     <!--<div class="page_head">

     <li>
         <label for="">状态:</label>
          <el-select v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
        :value="item.value"
        ></el-option>
      </el-select>
     </li>
     <li>
         <label for="">班级:</label>
          <el-select v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
        :value="item.value"
        ></el-option>
      </el-select>
     </li>
    </div>
    <div class="page_main">
     <el-table :data="list" style="width: 100%">
        <el-table-column  label="班级">1610A</el-table-column>
         <el-table-column prop="student_name" label="姓名" ></el-table-column> 
         <el-table-column  label="阅卷状态">未阅</el-table-column>
        <el-table-column prop="start_time" label="开始时间" ></el-table-column>
        <el-table-column prop="end_time" label="结束时间"></el-table-column>
        <el-table-column  label="成材率"></el-table-column>
        <el-table-column  label="操作">
            <a href="#" >批卷</a>
        </el-table-column> 
        
     </el-table>
      
    </div> -->
    <!-- <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload> -->
    <div class="hello">
    <div class="user-header">
      <input type="file" name="image" accept="image/*" @change='onchangeImgFun'
       class="header-upload-btn user-header-com">
      <img  alt="" :src='imgStr' class="user-header-img user-header-com">
      <p class="tip">图片限制50kb <span class="error">{{errorStr}}</span></p>
    </div>
  </div>
  </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
  props: {},
  components: {},
  data() {
    return {
      imgStr: require('@/assets/upload.png'),
      errorStr: '',
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value1: "",
      value2:"",
      imageUrl: ''
     
    };
  },
  computed: {
    ...mapState({
    list:state=>state.exam.list
    })
  },
  methods: {
    ...mapActions({
        studentLists:"exam/studentLists"
    }),
 
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      onchangeImgFun (e) {
      var file = e.target.files[0]
      console.log(file)
      // 获取图片的大小，做大小限制有用
      let imgSize = file.size
      console.log(imgSize)
      var _this = this // this指向问题，所以在外面先定义
      // 比如上传头像限制5M大小，这里获取的大小单位是b
      if (imgSize <= 50 * 1024*1024) {
        // 合格
        _this.errorStr = ''
        console.log('大小合适')
        // 开始渲染选择的图片
        // 本地路径方法 1
         this.imgStr = window.URL.createObjectURL(e.target.files[0])
         console.log(this.imgStr)
        // console.log(window.URL.createObjectURL(e.target.files[0])) // 获取当前文件的信息
      } else {
        console.log('大小不合适')
        _this.errorStr = '图片大小超出范围'
      }
    }

  },
  created() {
    this.studentLists()
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.user-header{
  position: relative;
  display: inline-block;
}
.user-header-com{
  width: 144px;
  height: 144px;
  display: inline-block;
  border-radius: 50%;
}
.header-upload-btn{
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  /* 通过定位把input放在img标签上面，通过不透明度隐藏 */
}
.tip{
  font-size: 14px;
  color: #666;
}
/* error是用于错误提示 */
.error{
  font-size: 12px;
  color: tomato;
  margin-left: 10px;
}
.pijuan_page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .page_head{
        width: 100%;
        height: 100px;
        display: flex;
        background: #fff;
        border-radius: 5px;
        align-items: center;
        margin: 40px 50px 20px;
        flex-shrink: 0;
        .el-select--medium{
            margin: 0  30px 0 0;
        }
        li label{
            font-size: 16px;
            font-weight: normal;
            margin-left: 30px;
        }
    }
    .page_main{
        flex:1;
        margin:0 0 0 50px;
    }
}

.avatar-uploader .el-upload {
    border: 1px dashed #ccc;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>