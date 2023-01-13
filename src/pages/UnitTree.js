import { orgStruct } from '../api/orgStruct';

class UnitTree{
    constructor(data){
        function constructTree(data){
            addParent(data,null);
            function addParent(node,parent){
                node.parent = parent;
                parent = node;
                if(node.children){
                    node.children.forEach((item)=>{
                        addParent(item,parent);
                    });
                }
            }
            return data;
        }

        //deep copy to construct reference
        this.tree = constructTree(JSON.parse(JSON.stringify(data)));
        function buildMidOrderList(treenode){
            let orderlist = [];
            let indexList = [];
            let stack = [];
            stack.push(treenode);
            while(stack.length > 0){
                let node = stack.pop()
                orderlist.push(node);
                indexList.push(node.name);
                if(node.children){
                    node.children.forEach((item)=>{
                        stack.push(item);
                    })
                }
            }
            return [orderlist,indexList];
        }
        [this.orderList,this.indexList] = buildMidOrderList(this.tree);
    }

    searchNode(name){
        const index = this.indexList.indexOf(name);
        if(index>-1){
            return this.orderList.at(index)
        }
        return undefined;
    }

    getChildList(name){
        let curNode = this.searchNode(name);
        let out = [];
        for(item of curNode.children)
        {
            let tmp = {};
            Object.assign(tmp,item);
            delete tmp.parent;
            delete tmp.children;
            out.push(tmp);
        }
        return out;
    }

    getNodeDirectUnitData(curNode){
        let stack = []; 
        let node = curNode ;
        //shallow copy node
        while(node){
            stack.push(node);
            node = node.parent;
        }

        let root = {}
        Object.assign(root,stack.pop());
        root.children = []
        delete root.parent;

        let parent = root;
        let last = root;
        while(stack.length){
            let item = {};
            Object.assign(item,stack.pop());
            delete item.parent;
            item.children = [];
            parent.children.push(item);
            parent = item;
            if(!stack.length){
                last = item;
            }
        }

        last.children = [];
        if(curNode.children){
            for(let child of curNode.children){
                let tmp = {};
                Object.assign(tmp,child);
                // tmp.children = [];
                delete tmp.children;
                delete tmp.parent;
                last.children.push(tmp)
            }
        }
        return root;
    }

    getDirectUnitData(name){
        let curNode = this.searchNode(name);
        return this.getNodeDirectUnitData(curNode);
    }

    getRootDirectUnitData(){
        return this.getNodeDirectUnitData(this.tree);
    }
}

export default UnitTree;