<template>
   <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName" >
      <el-table-column prop="id"  label="ID"  width="80"></el-table-column>
      <el-table-column prop="userName" label="NAME" width="180"></el-table-column>
      <el-table-column prop="age" label="AGE" width="80"> </el-table-column>
      <el-table-column prop="ability" label="ABILITY"> </el-table-column>
      <el-table-column prop="value" label="VALUE" align="right"> </el-table-column>
    </el-table>
</template>

<script>
	export default{
      data() {
        return {
          tableData: [{
            id:1,
            userName: 'JSpang',
            age: '30',
            ability: 'Web,HTML5,PHP',
            value:'80%'
          }, {
            id:2,
            userName: 'King',
            age: '28',
            ability: 'Web,PHP',
            value:'70%'
          }, {
            id:3,
            userName: 'Panda',
            age: '30',
            ability: 'PHP,MySql',
            value:'60%'
          }, {
            id:4,
            userName: 'HaiPu',
            age: '35',
            ability: 'Web,HTML5,PHP,DB',
            value:'80%'
          }, {
            id:2,
            userName: 'King',
            age: '28',
            ability: 'Web,PHP',
            value:'70%'
          }, {
            id:3,
            userName: 'Panda',
            age: '30',
            ability: 'PHP,MySql',
            value:'60%'
          }, {
            id:4,
            userName: 'HaiPu',
            age: '35',
            ability: 'Web,HTML5,PHP,DB',
            value:'80%'
          }]
        }
      },
      methods: {
          tableRowClassName(row, rowIndex) {
            if (rowIndex == 0) {
              return 'condensed-row1';
            } else if (rowIndex == 1 || rowIndex == 4) {
              return 'condensed-row2';
            }else if (rowIndex == 2 || rowIndex == 5) {
              return 'condensed-row3';
            }else if (rowIndex == 3 || rowIndex == 6) {
              return 'condensed-row4';
            }
            
            return '';
          }
        },
	}
</script>

<style scoped>
  .el-table .condensed-row1{
       background-color: #62bbb1;
  }
  .el-table .condensed-row2{
       background-color: #b1ce4c;
  }
  .el-table .condensed-row3{
       background-color: #e8cd5f;
  }
  .el-table .condensed-row4{
       background-color: #ef8888;
  }
</style>