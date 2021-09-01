import src from './data.json'
//import columns from './columns.js'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import React,{ useState, useEffect }  from 'react'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import {Link} from 'react-router-dom';


import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const { SearchBar , ClearSearchButton} = Search;
//const src =fetch('http://localhost:8083/getfile')
//.then(res => res.json())

/*const src=fetch('http://localhost:8083/getfile').then(response => {
    console.log(response);
    return response.json();
  }).then(data => {
    // Work with JSON data here
    console.log(data);
  }).catch(err => {
    // Do something for an error here
    console.log("Error Reading data " + err);
  });*/
const datafct = (src) =>{
    const props =[];
    const rowsTitles =[];
    //parser les lignes
    src["properties"].slice(1,).forEach(item => {
        item.values.forEach(elem =>{
            if(!rowsTitles.includes(elem.parametre.parametrekey) )
            rowsTitles.push(elem.parametre.parametrekey);
        }
        )
    })
     //remplire les lignes par notre data 
    rowsTitles.forEach((row) =>{
        let fobj = {};
        let rdata = [];
        let status; 
        src["properties"].slice(1,).forEach((col) => {
            let info =[];
            col.values.forEach((prop) => {
                
                if(prop.parametre.parametrekey === row)
                {   status=prop.status.type;
                    info={nameo:col.name,name :prop.name, value: prop.name};
                }     
        })
        rdata.push(info);
        })

        fobj["keys"]=row;
        rdata.forEach(col =>{
            fobj[col.nameo]=col.value;
        })

        fobj["status"]=status;
        props.push(fobj);
    })
 //parser les colonne
    const columns =[];
    columns.push({dataField:"keys", text:"properties",classes: 'font-bold'});
    
    src["properties"].slice(1,).forEach(item => {
        columns.push({dataField:item["name"], text:item["name"]});
        
    });

    columns.push({dataField:"status", text:"statue"});
    
    return [columns,props];
}
const [columns,data]= datafct(src);
const rowClasses = (row, rowIndex,colIndex) => {
    let classes = null;
    if(colIndex===0){
        classes = 'font-bold';
        
    }
    if(rowIndex>=0){
        var array = Object.keys(row).map(function(key) {return row[key];});
        console.log(array);
        let test=array[1];
        console.log(test);
        if(array.includes("normal")) classes= 'bg-gray-100';
        if(array.includes("oublie")) classes= 'bg-red-300';
        else{
           array.forEach(x=>{if(array.indexOf(x)>1)
             //array.forEach(x=>{if(array.includes("Overlaod"))
            {  //if(x!==test)
                if(array.includes("differant") )
                {
                     classes = 'bg-yellow-300';
                    }
  
            }
            })
        }
        
    }
  return classes;
};
function Result()
 {
    const [state, setState] = useState({
        field: null,
        class:null,
        order: null,
       
      })
      const overload = () => {
       document.getElementById('search-bar-0').value='differant';
      }
  
    const missing = () => {
       document.getElementById('search-bar-0').value='oublie';
      }
    return (
<ToolkitProvider
    keyField="ID"
    data={ data }
    columns={ columns }
    search
>
    {
    props => (
        <div>
            <div className="px-5 flex w-full place-content-between">
                <div className="font-bold">
                Parameter list:
                </div>
                <div className="flex place-content-between place-items-center gap-20">
                <div className="flex place-content-around place-items-center gap-10">
                    <div>Sort by:</div>
                    <div className="text-red-600 p-2 flex rounded gap-2 place-items-center hover:bg-red-200 hover:text-white" onClick={ ()=>missing() }>
                        <i><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </i>Oublie
                    </div>
                    <div className="text-yellow-600 p-2 flex rounded gap-2 place-items-center hover:bg-yellow-200 hover:text-white" onClick={ ()=>overload() }>
                        <i><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                        </i>differant
                    </div>
                </div>
                <div>
                <SearchBar { ...props.searchProps } /> 
                <ClearSearchButton { ...props.searchProps } /> 
                </div>
                </div>
            </div>
            <br/>
            <BootstrapTable 
               {...props.baseProps}
                rowClasses={ rowClasses }
               sort={ {
                    dataField: state.field,
                    order: state.order}
               }
                pagination={ paginationFactory()}
            /> 
             
            <div className="flex "style={{float:"right",marginTop:"-20px"}}>
                <Link to="/">
                    <button className=" bg-gray-300 rounded   focus:ring-3 focus:ring-indigo-400 "style={{color:" #1E5F8E",fontWeight:"bold", border: "2px solid #1E5F8E"}}>Compare again!</button>
                </Link>
            </div>
            <br/>
        </div>
    )
}
</ToolkitProvider>
    )
}

export default Result


