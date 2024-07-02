import { Table, Select } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import React, { useEffect , useState} from 'react';
import { atom, useRecoilState } from 'recoil'
import './l2.css';

//data list
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

//main
interface DateType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
};

//select
const options = [
  {
    label: 'Joe',
    value: 'Joe',
  },
  {
    label: 'Jim',
    value: 'Jim',
  },
  {
    label: 'all',
    value: ' ',
  },
];


function MySelect() {

  function onChange(e:string){
  }
  return (
    <Select
      options={options}
      onChange={onChange}
    />
  )
};

//table
const columns: ColumnsType<DateType> = [
  //fitst title cell (filter + sorter)
  {
    title: 'name',
    dataIndex: 'name',
    //filtter item
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        //children item
        children: [
          {
            text: 'Black',
            value: 'Joe Black',
          },
          {
            text: 'Green',
            value: 'Green',
          },
        ],
      },
    ],
    onFilter: (value: string, record: DateType) => record.name.indexOf(value) === 0,
    sorter: (a: DateType, b: DateType) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  //second title cell (sorter)
  {
    title: 'age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a: DateType, b: DateType) => a.age - b.age,
  },
  //third cell (filter)
  {
    title: 'address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
];

function L2() {
  return (
    <>
      <Table columns={columns} dataSource={data} />
      {/* <MySelect /> */}
    </>
  )
};

export default L2;