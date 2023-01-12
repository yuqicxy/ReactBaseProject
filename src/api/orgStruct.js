import ms from "milsymbol"

let orgStruct = {
    "name": "Battallion HQ",
    "milCode": "10031000161211000000",
    "officers": 6,
    "otherRanks": 10,
    "children": [
        {
            "name": "1st Rifle Company HQ",
            "milCode": "10031000151211000000",
            "officers": 2,
            "otherRanks": 14,
            "children": [
                {
                    "name": "1st Rifle Platoon HQ",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 8,
                    "children": [
                        {
                            "name": "1st Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "2nd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "3rd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        }
                    ]
                },
                {
                    "name": "2nd Rifle Platoon HQ",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 8,
                    "children": [
                        {
                            "name": "1st Section",
                            "milCode": "10031000131211000000",
                            "officers": 1,
                            "otherRanks": 8
                        },
                        {
                            "name": "2nd Section",
                            "milCode": "10031000131211000000",
                            "officers": 1,
                            "otherRanks": 8
                        },
                        {
                            "name": "3rd Section",
                            "milCode": "10031000131211000000",
                            "officers": 1,
                            "otherRanks": 8
                        }
                    ]
                },
                {
                    "name": "3rd Rifle Platoon HQ",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 8,
                    "children": [
                        {
                            "name": "1st Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "2nd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "3rd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        }
                    ]
                }
            ]
        },
        {
            "name": "2nd Rifle Company HQ",
            "milCode": "10031000151211000000",
            "officers": 2,
            "otherRanks": 14,
            "children": [
                {
                    "name": "1st Rifle Platoon HQ",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 8,
                    "children": [
                        {
                            "name": "1st Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "2nd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "3rd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        }
                    ]
                },
                {
                    "name": "2nd Rifle Platoon HQ",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 8,
                    "children": [
                        {
                            "name": "1st Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "2nd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "3rd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        }
                    ]
                },
                {
                    "name": "3rd Rifle Platoon HQ",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 8,
                    "children": [
                        {
                            "name": "1st Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "2nd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "3rd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        }
                    ]
                }
            ]
        },
        {
            "name": "3rd Rifle Company HQ",
            "milCode": "10031000151211000000",
            "officers": 2,
            "otherRanks": 14,
            "children": [
                {
                    "name": "1st Rifle Platoon HQ",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 8,
                    "children": [
                        {
                            "name": "1st Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "2nd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "3rd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        }
                    ]
                },
                {
                    "name": "2nd Rifle Platoon HQ",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 8,
                    "children": [
                        {
                            "name": "1st Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "2nd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "3rd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        }
                    ]
                },
                {
                    "name": "3rd Rifle Platoon HQ",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 8,
                    "children": [
                        {
                            "name": "1st Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "2nd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        },
                        {
                            "name": "3rd Section",
                            "milCode": "10031000131211000000",
                            "officers": 0,
                            "otherRanks": 9
                        }
                    ]
                }
            ]
        },
        {
            "name": "Support Company HQ",
            "milCode": "10031000151211000000",
            "officers": 1,
            "otherRanks": 15,
            "children": [
                {
                    "name": "Reconnaissance Pl.",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 23
                },
                {
                    "name": "Mortar Platoon",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 44
                },
                {
                    "name": "Sniper Platoon",
                    "milCode": "10031000141211000000",
                    "officers": 0,
                    "otherRanks": 16
                },
                {
                    "name": "Anti-tank Platoon",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 32
                },
                {
                    "name": "Assault Pioneer Platoon",
                    "milCode": "10031000141211000000",
                    "officers": 0,
                    "otherRanks": 19
                }
            ]
        },
        {
            "name": "HQ Company - HQ",
            "milCode": "10031000151211000000",
            "officers": 1,
            "otherRanks": 15,
            "children": [
                {
                    "name": "Signals Pl.",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 27
                },
                {
                    "name": "Regt. Aid Post",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 19
                },
                {
                    "name": "QM Platoon",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 35
                },
                {
                    "name": "Logistics Platoon",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 19
                },
                {
                    "name": "REME Detachment",
                    "milCode": "10031000141211000000",
                    "officers": 1,
                    "otherRanks": 37
                }
            ]
        }
    ]
}

// function process(org){
//     org.value = {};
//     org.value.milCode = org.milCode;
//     org.value.officers = org.officers;
//     org.value.otherRanks = org.otherRanks;
//     delete org.milCode;  
//     delete org.officers;  
//     delete org.otherRanks;
//     if(org.children != undefined)
//         for(let item of org.children)
//             process(item);
// }

// let orgStruct ={
//     "name": "Battallion HQ",
//     "children": [
//         {
//             "name": "1st Rifle Company HQ",
//             "children": [
//                 {
//                     "name": "1st Rifle Platoon HQ",
//                     "children": [
//                         {
//                             "name": "1st Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "2nd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "3rd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         }
//                     ],
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 8
//                     }
//                 },
//                 {
//                     "name": "2nd Rifle Platoon HQ",
//                     "children": [
//                         {
//                             "name": "1st Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 1,
//                                 "otherRanks": 8
//                             }
//                         },
//                         {
//                             "name": "2nd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 1,
//                                 "otherRanks": 8
//                             }
//                         },
//                         {
//                             "name": "3rd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 1,
//                                 "otherRanks": 8
//                             }
//                         }
//                     ],
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 8
//                     }
//                 },
//                 {
//                     "name": "3rd Rifle Platoon HQ",
//                     "children": [
//                         {
//                             "name": "1st Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "2nd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "3rd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         }
//                     ],
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 8
//                     }
//                 }
//             ],
//             "label": {
//                 "milCode": "10031000151211000000",
//                 "officers": 2,
//                 "otherRanks": 14
//             }
//         },
//         {
//             "name": "2nd Rifle Company HQ",
//             "children": [
//                 {
//                     "name": "1st Rifle Platoon HQ",
//                     "children": [
//                         {
//                             "name": "1st Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "2nd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "3rd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         }
//                     ],
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 8
//                     }
//                 },
//                 {
//                     "name": "2nd Rifle Platoon HQ",
//                     "children": [
//                         {
//                             "name": "1st Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "2nd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "3rd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         }
//                     ],
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 8
//                     }
//                 },
//                 {
//                     "name": "3rd Rifle Platoon HQ",
//                     "children": [
//                         {
//                             "name": "1st Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "2nd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "3rd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         }
//                     ],
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 8
//                     }
//                 }
//             ],
//             "label": {
//                 "milCode": "10031000151211000000",
//                 "officers": 2,
//                 "otherRanks": 14
//             }
//         },
//         {
//             "name": "3rd Rifle Company HQ",
//             "children": [
//                 {
//                     "name": "1st Rifle Platoon HQ",
//                     "children": [
//                         {
//                             "name": "1st Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "2nd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "3rd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         }
//                     ],
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 8
//                     }
//                 },
//                 {
//                     "name": "2nd Rifle Platoon HQ",
//                     "children": [
//                         {
//                             "name": "1st Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "2nd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "3rd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         }
//                     ],
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 8
//                     }
//                 },
//                 {
//                     "name": "3rd Rifle Platoon HQ",
//                     "children": [
//                         {
//                             "name": "1st Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "2nd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         },
//                         {
//                             "name": "3rd Section",
//                             "label": {
//                                 "milCode": "10031000131211000000",
//                                 "officers": 0,
//                                 "otherRanks": 9
//                             }
//                         }
//                     ],
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 8
//                     }
//                 }
//             ],
//             "label": {
//                 "milCode": "10031000151211000000",
//                 "officers": 2,
//                 "otherRanks": 14
//             }
//         },
//         {
//             "name": "Support Company HQ",
//             "children": [
//                 {
//                     "name": "Reconnaissance Pl.",
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 23
//                     }
//                 },
//                 {
//                     "name": "Mortar Platoon",
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 44
//                     }
//                 },
//                 {
//                     "name": "Sniper Platoon",
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 0,
//                         "otherRanks": 16
//                     }
//                 },
//                 {
//                     "name": "Anti-tank Platoon",
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 32
//                     }
//                 },
//                 {
//                     "name": "Assault Pioneer Platoon",
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 0,
//                         "otherRanks": 19
//                     }
//                 }
//             ],
//             "label": {
//                 "milCode": "10031000151211000000",
//                 "officers": 1,
//                 "otherRanks": 15
//             }
//         },
//         {
//             "name": "HQ Company - HQ",
//             "children": [
//                 {
//                     "name": "Signals Pl.",
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 27
//                     }
//                 },
//                 {
//                     "name": "Regt. Aid Post",
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 19
//                     }
//                 },
//                 {
//                     "name": "QM Platoon",
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 35
//                     }
//                 },
//                 {
//                     "name": "Logistics Platoon",
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 19
//                     }
//                 },
//                 {
//                     "name": "REME Detachment",
//                     "label": {
//                         "milCode": "10031000141211000000",
//                         "officers": 1,
//                         "otherRanks": 37
//                     }
//                 }
//             ],
//             "label": {
//                 "milCode": "10031000151211000000",
//                 "officers": 1,
//                 "otherRanks": 15
//             }
//         }
//     ],
//     "label": {
//         "milCode": "10031000161211000000",
//         "officers": 6,
//         "otherRanks": 10
//     }
// }

// process(orgStruct)

// Output image using lib "milsymbol"
ms.setStandard("APP6");
let milIcon= {};

function generateIcon(unit){
    if(milIcon[unit.milCode] == undefined){
        let symbol = new ms.Symbol(unit.milCode,{size:50})
        milIcon[unit.milCode]= symbol.asCanvas();
    }
    if(unit.children != undefined){
        for(let item of unit.children)
            generateIcon(item);
    }
}
generateIcon(orgStruct)

export {orgStruct,milIcon}