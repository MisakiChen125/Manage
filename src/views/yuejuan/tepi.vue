<template>
  <div class="tepi_page">
    <div class="title">待批班级</div>
    <div class="fileBox">
      <el-button @click="exportFile">导出</el-button>
      <input type="file" @change="importFile" />
    </div>
    
      <el-table :data="pageData" style="width: 100%">
        <el-table-column prop="grade_name" label="班级名"></el-table-column>
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
          :page-sizes="[5,10,15]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="data.length"
        ></el-pagination>
      </div>
    
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import XLSX from "xlsx";
import { array } from "jszip/lib/support";
import data from '../../../mock/src/views/pdf/content';
export default {
  props: {},
  components: {},
  data() {
    return {
      currentPage: 1, //当前页码
      pageSize: 5, //当前数据显示条数,
      data:[]
    };
  },
  computed: {
    ...mapState({
      classList: state => state.studentClass.classList
    }),
    pageData() {
      return this.data.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    }
  },
  methods: {
    ...mapMutations({
      setStates: "studentClass/setStates"
    }),
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(val);
    },
    ...mapActions({
      acquireYetClass: "studentClass/acquireYetClass"
    }),
    tiao() {
      this.$router.push("/yuejuan/pijuan");
    },
    exportFile(e) {
      var wb = XLSX.utils.book_new();
      console.log(this.data, Object.keys(this.data[0]));
      var ws = XLSX.utils.json_to_sheet(this.data, {
        header: Object.keys(this.datat[0])
      });
      console.log(ws);
      XLSX.utils.book_append_sheet(wb, ws, "student1");
      XLSX.writeFile(wb, "");
    },
    importFile(e) {
      // console.log(e.target)
     let file = e.target.files[0];
      var reader = new FileReader();
      reader.onload = (e)=>{
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, {type: 'array'});
        console.log('workbook...', workbook);
        var worksheet = workbook.Sheets[workbook.SheetNames[0]];
        var json = XLSX.utils.sheet_to_json(worksheet);
        var container = document.getElementById('table');
        // container.innerHTML = XLSX.utils.sheet_to_html(worksheet);
        // console.log('json...', json);
        this.data = json;
        /* DO SOMETHING WITH workbook HERE */
      };
      reader.readAsArrayBuffer(file);
    }
  },
  created() {
    // this.acquireYetClass();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.tepi_page {
  margin: 20px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  // margin: 20px;
  font-size: 20px;
  margin-bottom: 15px;
}
.el-table {
  border-radius: 10px;
}
.block {
  width: 100%;
  text-align: right;
  margin: 15px 10px;
}
</style>