import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import Addmodal from './Addmodal';
import './StudentsTable.css';
import { useParams } from 'react-router-dom';

const StudentsTable = (props) => {
  const { initialData, setInitialData } = props;
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);
  const [tableData, setTableData] = useState({ name: '', rollNumber: '', department: '', gender: '', age: '' });
  const [searchText, setSearchText] = useState('');

  const { HOD_Name } = useParams();

  const showTableModal = () => {
    setIsTableModalOpen(true);
  };

  const handleTableCancel = () => {
    setIsTableModalOpen(false);
  };

  const addStudentsDetail = (newStudent) => {
    const updatedInitialData = { ...initialData };
    if (!(HOD_Name in updatedInitialData)) {
      updatedInitialData[HOD_Name] = [];
    }
    updatedInitialData[HOD_Name].push(newStudent);
    setInitialData(updatedInitialData);
    setIsTableModalOpen(false);
  };

  const handleTableSubmit = () => {
    addStudentsDetail(tableData);
    setIsTableModalOpen(false);
    setTableData({ name: '', rollNumber: '', department: '', gender: '', age: '' });
  };

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };
  const filteredData = initialData[HOD_Name] ? initialData[HOD_Name].filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  ) : [];
console.log(">>>>>>>>>",filteredData);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Roll Number',
      dataIndex: 'rollNumber',
      key: 'rollNumber',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
  ];

  return (
    <div className="Table">
      <header className='h2'>
        <h2> Student Details</h2>
      </header>
      <Input className="SearchInput" placeholder="Search by name" value={searchText} onChange={handleSearchInputChange} />
      <div className='btn'>
        <Button type="primary" onClick={showTableModal}>
          Add Details
        </Button>

      </div>
      <div className='modal'>
        <Addmodal
          isVisible={isTableModalOpen}
          onCancel={handleTableCancel}
          onSave={handleTableSubmit}
          showTableModal={showTableModal}
          setTableData={setTableData}
          tableData={tableData}
        />
      </div>
      <Table dataSource={filteredData} columns={columns} rowKey={"rollNumber"} />
    </div>
  );
};

export default StudentsTable;
