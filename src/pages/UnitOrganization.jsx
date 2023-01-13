import Echart from '../components/Chart/Echart';
import React, { useEffect, useState } from 'react';
import { orgStruct,milIcon } from '../api/orgStruct';
import UnitTree from './UnitTree';


let unitTree = new UnitTree(orgStruct);

const UnitOrganization = (props)=>{
    const events = {
        "click":function(params){
            console.log("treeExpandAndCollapse:");
            const series = this.getModel().getSeries();
            if(!series || !series.length ){
                console.log("no valid series");
                return false;
            }
            const seriesModel = series[0];

            // let tree = seriesModel.getData().tree;
            // const curNode = tree.getNodeByDataIndex(params.dataIndex);
            // console.log("expand node\t",curNode.name);
            // console.log("data param");

            let dataParam = seriesModel.getDataParams(params.dataIndex);
            let data = unitTree.getDirectUnitData(dataParam.data.name);
            this.setOption({
                series:[
                    {
                        data:[data],
                    }
                ]
            })
            console.log(data);
        }
    };

    const fontSize = 14;
    const data = unitTree.getRootDirectUnitData();

    const dims = {
        name: "name",
        milCode: "milCode",
        officers: "officers",
        otherRanks: "other ranks",
    };
    let richStyles =  {
        username: {
            align: "left",
            padding: [10,10,10,10],
            verticalAlign: "top",
            fontSize: fontSize,
        },
        userTitle: {
          align: "left",
          left:50,
          padding: [-25, 0, 0, 65],
          color: "#808080",
          fontWeight: 10,
          fontSize: fontSize - 2,
        },
    }
    for(let icon in milIcon){
        richStyles[icon] = {
            fontSize: 20,
            width: 50,
            height: 50,
            borderRadius: 100,
            borderWidth: 2,
            backgroundColor: {
                image: milIcon[icon],
            },
        }
    }
    const icons = milIcon;
    const options = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        animation:false,
        series: [
          {
            type: "tree",
            expandAndCollapse:false,
            initialTreeDepth:undefined,
            data:[data],
            left:100,
            top:100,
            bottom:100,
            right:100,
            layout:"orthogonal",
            orient:"vertical",
            edgeShape:"polyline",
            edgeForkPosition:"20%",
            label: {
              padding: [3, 10, 10, 5],
              backgroundColor: "white",
              borderWidth: 80,
              borderRadius: 3,
              shadowColor: "#595953",
              shadowBlur: 10,
              shadowOffsetX: 5,
              shadowOffsetY: 5,
              formatter:function(param){
                return [
                    ["{"+param.data[dims.milCode]+"|}", "{username|" + param.data[dims.name]+"}"].join(""),
                    ["{userTitle|" + "x" +  param.data.officers   + " " + dims.officers   + "\t x" + param.data.otherRanks +" "+ dims.otherRanks + "}"],
                ].join("\n");
              },
              rich: richStyles,
            },
          },
        ],
    };

    return <>
      <Echart sx={{width:'100%',height:"100%"}} options={options} events={events}></Echart>
      {/* <Echart sx={{width:'100%',height:"100%"}} options={options} ></Echart> */}
    </>
}

export default UnitOrganization;