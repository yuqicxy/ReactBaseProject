import Echart from '../components/Chart/Echart';
import React from 'react';
import { orgStruct,milIcon } from '../api/orgStruct';

const UnitOrganization = (props)=>{
    const orgLabel = {
        width:250,
        height:100
    };
    const dims = {
        name: "name",
        milCode: "milCode",
        officers: "officers",
        otherRanks: "otherRanks",
    };
    let richStyles =  {
        headLine: {
          width: "100%",//orgLabel.width,
          // width: orgLabel.width,
          height: 5,
          backgroundColor:
            "#" + Math.floor(Math.random() * 16777215).toString(16),
          position: "absolute",
          align: "top",
        },
        username: {
          align: "left",
          padding: [10,10,10,10],
          verticalAlign: "top",
          fontSize: 15,
          // width: 50,
          // height: 50,
        },
        userTitle: {
          align: "left",
          // position:"absolute",
          left:50,
          padding: [-25, 0, 0, 65],
          // verticalAlign: "top",
          color: "#808080",
          fontWeight: 10,
          fontSize: 12,
          // width: 50,
          // height: 50,
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
        series: [
          {
            type: "tree",
            data:[
                orgStruct
            ],
            left:100,
            top:100,
            bottom:100,
            right:100,
            initialTreeDepth:1,
            layout:"orthogonal",
            orient:"vertical",
            edgeShape:"polyline",
            label: {
              // width: orgLabel.width,
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
                    // ["{headLine|}"],
                    ["{"+param.data[dims.milCode]+"|}", "{username|" + param.data[dims.name]+"}"].join(""),
                    ["{userTitle|" + "x" +  param.data.officers   + " " + dims.officers   + "\t x" + param.data.otherRanks +" "+ dims.otherRanks + "}"],
                    // ["{userTitle|" + "x" +  param.data.otherRanks + " " + dims.otherRanks + "}"],
                ].join("\n");
              },
              rich: richStyles,
            },
          },
        ],
    };
    return <>
      <Echart sx={{width:'100%',height:"100%"}} options={options}></Echart>
    </>
}

export default UnitOrganization;