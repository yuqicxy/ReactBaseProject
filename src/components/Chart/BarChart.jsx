import Echart  from "./Echart";

const BarChart = (props)=>{
    let option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick:{
            show:false,
            },
            axisLine:{
            show:false,
            }
        },
        yAxis: {
            show:false,
            type: 'value'
        },
        title:{
            show:true,
            text:'Aussie chef shares culinary',
            left:'center',
            fontSize:'40',
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                itemStyle:{
                    color:'#FFB200',
                    borderRadius:50
                }
            }
        ]
    }
    return <Echart sx={{...props.sx,width:'100%',height:'100%'}} options = {option}></Echart>
}

export default BarChart;