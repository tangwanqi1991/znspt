<template>
  <div class="content">
    <el-container>
      <el-main>
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>系统管理</el-breadcrumb-item>
              <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- <el-row>
              <el-button type="primary" icon="el-icon-circle-plus">
                   <router-link tag="but" to="/addmanagement">新增管理员</router-link>
              </el-button>
            </el-row>-->
            <el-tabs type="border-card">
              <el-tab-pane label="用户列表">
                <el-table
                  :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                  style="width: 100%"
                >
                  <el-table-column type="index" width="50"></el-table-column>
                  <el-table-column prop="name" label="账号" width="180"></el-table-column>
                  <el-table-column prop="nickname" label="昵称" width="180"></el-table-column>
                  <el-table-column prop="role" label="角色"></el-table-column>
                  <el-table-column prop="date" label="时间"></el-table-column>

                  <el-table-column align="right">
                    <template slot="header" slot-scope="scope">
                      <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
                    </template>
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        type="info"
                        @click="handleDelete(scope.$index, scope.row)"
                      >授权</el-button>
                      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                      >删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="block">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400"
                  ></el-pagination>
                </div>
              </el-tab-pane>
              <el-tab-pane label="新增管理员">
                <div class="row" id="row2">
                  <div class="col-md-2"></div>
                  <div class="col-md-8">
                    <el-form
                  :model="ruleForm"
                  status-icon
                  :rules="rules"
                  ref="ruleForm"
                  label-width="100px"
                  class="demo-ruleForm"
                >

                <el-form-item label="账号" prop="name">
                    <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="昵称" prop="nickname">
                    <el-input type="text" v-model="ruleForm.nickname" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                  </el-form-item>

                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
                  </div>
                  <div class="col-md-2"></div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="col-md-1"></div>
        </div>
      </el-main>
    </el-container>
  </div>

</template>


<script>
export default {
  name: "Management",
  data() {
    // 新增管理员
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    // end 新增管理员

    return {
      // 新增管理员
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      },

      // end新增管理员

      tableData: [
        {
          name: "admin",
          nickname: "小虎哥",
          role: "管理员",
          date: "2019-05-02"
        },
        {
          name: "admin",
          nickname: "小虎哥",
          role: "管理员",
          date: "2019-05-02"
        },
        {
          name: "admin",
          nickname: "小虎哥",
          role: "管理员",
          date: "2019-05-02"
        },
        {
          name: "admin",
          nickname: "小虎哥",
          role: "管理员",
          date: "2019-05-02"
        },
        {
          name: "admin",
          nickname: "小虎哥",
          role: "管理员",
          date: "2019-05-02"
        },
        {
          name: "admin",
          nickname: "小虎哥",
          role: "管理员",
          date: "2019-05-02"
        },
        {
          name: "admin",
          nickname: "小虎哥",
          role: "管理员",
          date: "2019-05-02"
        },
        {
          name: "admin",
          nickname: "小虎哥",
          role: "管理员",
          date: "2019-05-02"
        },
        {
          name: "admin",
          nickname: "小虎哥",
          role: "管理员",
          date: "2019-05-02"
        },
        {
          name: "admin",
          nickname: "小虎哥",
          role: "管理员",
          date: "2019-05-02"
        }
      ],
      search: ""
    };
  },
  methods: {

    // 新增管理员
submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    // end新增管理员
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style scoped>
.el-main {
  height: 700px;
}
.content {
  background-color: #e9eef3;
}
.row {
  margin-top: 10px;
}
.block {
  margin-top: 10px;
}
.el-breadcrumb {
  margin-bottom: 20px;
  font-size: 18px;
}
.el-row {
  margin-bottom: 10px;
}
#row2{
  margin-top: 40px;
}

</style>

