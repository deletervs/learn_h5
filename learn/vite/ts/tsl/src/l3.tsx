import React, {useState} from "react";
import {Table, Select} from "antd";
import { DefaultValue } from "recoil";

//data list
const nameList=[
    {
        id:1,
        name:'a',
        text:'aaa',
    },
    {
        id:2,
        name:'b',
        text:'bbb',
    },
    {
        id:3,
        name:'c',
        text:'ccc',
    }
];

//colums
const columns=[
    {
        title:'id',
        dataIndex:'id',
        key:'id',
    },
    {
        title:'name',
        dataIndex:'name',
        key:'name',
    },
    {
        title:'text',
        dataIndex:'text',
        key:'text',
    },
];

//options
const options=[
    {
        label:'all',
        value:"",
    },
    {
        lable:'a',
        value:'a',
    },
    {
        lable:'b',
        value:'b',
    },
    {
        lable:'c',
        value:'c',
    },
];

function L3(){
    //define state
    const [selectName,setSelectName]=useState<string|undefined>(undefined);

    function onChange(value:string){
        setSelectName(value);
    };

    return(
        <>
            <Table
                //item is datalist when input
                dataSource={nameList.filter(item=>selectName?item.name===selectName:true)}
                columns={columns}
                rowKey='id'
            />
            <Select
                options={options}
                onChange={onChange}
                value={selectName}
            />
        </>
    )
};

export default L3;