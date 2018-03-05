<template>
	<div>
		<v-pageTitle :vtitle="BasicCharts"></v-pageTitle>
		<el-row :gutter="20">
			<el-col :xs="24" :sm="24" :md="8" :lg="8">
				<el-card class="box-card">
					<barChart></barChart>
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="8" :lg="8">
				<el-card class="box-card">
                    <lineChart></lineChart>
                </el-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="8" :lg="8">
				 <el-card class="box-card">
                   <radarChart></radarChart>
                </el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :xs="24" :sm="24" :md="12" :lg="12">
				<el-card class="box-card">
					 <pieChart></pieChart>
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="12" :lg="12">
				<el-card class="box-card">
					<funnelChart></funnelChart>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import vPageTitle from '@/components/common/pageTitle.vue';
	import barChart from '@/components/charts/barChart.vue';
	import lineChart from '@/components/charts/lineChart.vue';
	import radarChart from '@/components/charts/radarChart.vue';
	import pieChart from '@/components/charts/pieChart.vue';
	import funnelChart from '@/components/charts/funnelChart.vue';
	export default{
		data(){
			return{
				BasicCharts:'BasicCharts'
			}
		},
		components:{
			vPageTitle,
			barChart,
			lineChart,
			radarChart,
			pieChart,
			funnelChart
		}
	}
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
    }
    .material-icons{
        font-size:80px;
        color:#ddd;
    }
   
    .cart-string{
        height:100px;
        padding-top:10px;
        font-size:1.1rem;
        
    }
</style>