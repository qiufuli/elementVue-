<template>
	<div>
		<v-pageTitle :vtitle="BasicTables"></v-pageTitle>
		<el-row :gutter="20">
			<el-col :xs="24" :sm="24" :md="12" :lg="12">
				<el-card class="box-card">
					hover rows
				<hr />
				<hoverRow></hoverRow>
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="12" :lg="12">
				<el-card class="box-card">
					stiped rows
					<hr />
					<stripedRow></stripedRow>
				</el-card>
			</el-col>
		</el-row>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                  BORDERED TABLE
                   <hr>
                   <borderTable></borderTable>
                </el-card>
            </el-col>


             <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                  CONDENSED TABLE
                   <hr>
                   <condensedTable></condensedTable>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
        	<el-col :xs="24" :sm="24" :md="12" :lg="12">
        		<el-card class="box-card">
        			fixed header table
        			<hr />
        			<fixedHeaderTable></fixedHeaderTable>
        		</el-card>
        	</el-col>
        	<el-col :xs="24" :sm="24" :md="12" :lg="12">
        		<el-card class="box-card">
        			fixed column table
        			<hr />
        			<fixedColumnTable></fixedColumnTable>
        		</el-card>
        	</el-col>
        </el-row>
	</div>
</template>

<script>
	import vPageTitle from '@/components/common/pageTitle.vue';
	import hoverRow from '@/components/tables/hoverRow.vue';
	import stripedRow from '@/components/tables/stripedRow.vue';
	import borderTable from '@/components/tables/borderTable.vue';
	import condensedTable from '@/components/tables/condensedTable.vue';
	import fixedHeaderTable from '@/components/tables/fixedHeaderTable.vue';
	import fixedColumnTable from '@/components/tables/fixedColumnTable.vue';
	export default{
		data(){
			return{
				BasicTables:'BasicTables'
			}
		},
		components:{
			vPageTitle,
			hoverRow,
			stripedRow,
			borderTable,
			condensedTable,
			fixedHeaderTable,
			fixedColumnTable
		}
	}
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
    }
    .box-card{
        font-size:12px;
    }
    .box-card hr{
        height:1px;
        border:none;
        border-top:1px  dashed #ccc;
        margin-bottom:10px;
        margin-top:6px;
    }

</style>