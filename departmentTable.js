import React from 'react'
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import './departmentTable.css';

const EductionTable = ({ data}) => {

  const columns = [

    {
      title: 'HOD Name',
      dataIndex: 'HOD_Name',
      key: 'HOD_Name',
      render: (text, record) => (
        <Link to={{ pathname: `/StudentsTable/${record.HOD_Name}`, state: { data: record } }}>{text}</Link>

      ),
    },
    {
      title: 'Department',
      dataIndex: 'Department',
      key: 'Department'
    }
  ];
    
  return (
    <div className="DataTable">
      <Table
        dataSource={data}
        columns={columns}
      />

    </div>
  );
}
export default EductionTable;