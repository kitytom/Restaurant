<template>
  <div class="addbox">
    <div class="addboxleft">
    <h4>添加菜品</h4>
    <div>
      <span class="sp">选择菜品：</span>
      <select name="" id="">
        <option value="1">肉菜</option>
        <option value="2">汤类</option>
        <option value="3">干锅类</option>
        <option value="4">炒菜类</option>
        <option value="5">刺身</option>
        <option value="6">油炸</option>
        <option value="7">酒水类</option>
      </select>
    </div>
    <div>
      <span class="sp">菜品名称:</span>
      <input type="text" placeholder="名称"/>
    </div>
    <div>
      <span class="sp">菜品价格:</span>
      <input type="text" placeholder="价格"/>
    </div>
    <div class="addarea">
      <span class="sp">菜品描述:</span>
      <input type="text" placeholder="描述">
    </div>
    <div>
      <span class="sp">添加图片:</span>
    </div>
    <!--  -->
    <div class="addpic">
      <el-upload
      action="#"
      list-type="picture-card"
      :auto-upload="false">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}">
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url" alt=""
          >
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
            >
              <i class="el-icon-download"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    </div>
    <!--  -->
    <div class="btn">
     <button>确认预览</button>
    </div>
  </div>
  <!--  -->
  <div class="addboxright">
    <div>
      <img src="../assets/cai.png" alt="" >
    </div>
    <div>
      <span class="rightsp">菜品名称：关东煮</span>
      <span class="rightsp">菜品价格：￥25.00</span>
      <span class="rightsp">菜品描述：关东美食</span>
      <span class="rightsp">菜品分类：面食</span>
    </div>

  </div>
    <button class="footbox">提交</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textarea: '',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    }
  },
  methods: {
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    }
  }
}
</script>

<style scoped>
.addbox {
  height: 578px;
  margin-top: -15px;
  color: aliceblue;
  display: flex;
}

h4 {
  color: #FE9965;
  margin: 10px;
}

.addbox div {
  margin: 25px 0px 10px 65px;
}

.addbox div .sp {
  margin-right: 15px;
  color: #35F7BB;
}

.addbox div input {
  font-size: 16px;
  height: 25px;
  outline: none;
  border: 0;
  background-color: #FE9965;
  border-radius: 10px;
  padding-left: 10px;
  color: #35F7BB;
}

.addarea {
  display: flex;
}

.addarea .textbox {
  width: 300px;
}
select{
  background-color: #FE9965;
  color: #35F7BB;
}
.addpic{
padding-left: 25px;
}
.btn button, .footbox{
  width: 80px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border: 0;
  color: #35F7BB;
  border-radius: 5px;
  background-color: #FE9965;
  box-shadow: 1px 1px 10px #f7c8b1;
}
.addboxleft{
  width: 480px;
  height: 530px;
  background-color: #1C4D7B;

}
.addboxright{
  width: 790px;
   display: flex;
   height: 530px;
   background-color: #1C4D7B;
}
.addboxright img{
  width:100px;
  height:100px;
  box-shadow: 1px 2px 8px rgb(180, 247, 231);
}
.addboxright div{
  padding-top: 100px;
}
.addboxright .rightsp {
  display: inline-block;
  width: 80px;
  margin-left: 10px;
  color: #35F7BB;
}
.btntijiao{
  width: 80px;
}
.footbox{
  position: fixed;
  bottom: 140px;
  right: 400px;
  border:0;
}
</style>
