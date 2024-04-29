import React from 'react';
import { Modal, Form, Input, Radio, Select} from 'antd';
import './Addmodal.css';
const { Option } = Select;

const AddModal = (props) => {
    const { setTableData, isVisible, onCancel, tableData, onSave } = props;

    // const handleChange = (e) => {
    //     console.log(e.target);
    //     const { name, value } = e.target;
    //     setTableData(prev => ({...prev,[name]: value}));
    // };
    const handleChange = (name, value) => {
        setTableData({ ...tableData, [name]: value });
    };


    return (
        <>
            <Modal
                title="Add Student Details"
                open={isVisible}
                onCancel={onCancel}
                onOk={onSave}
            >
                <Form layout="vertical">
                    <Form.Item label="Student Name">
                        <Input
                            type="text"
                            name="name"
                            value={tableData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Roll Number">
                        <Input
                            type="text"
                            name="rollNumber"
                            value={tableData.rollNumber}
                            onChange={(e) => handleChange('rollNumber', e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Department">
                        <Select
                            placeholder="Select Department"
                            name="department"
                            onChange={(value) => handleChange('department', value)}
                            value={tableData.department}
                        >
                            <Option value="Chemistry">Chemistry</Option>
                            <Option value="Computer Science">Computer Science</Option>
                            <Option value="BCA">BCA</Option>
                            <Option value="Physics">Physics</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Gender">
                        <Radio.Group 
                            onChange={(e) => handleChange('gender', e.target.value)}
                            value={tableData.gender}
                            name="gender"
                        >
                            <Radio value="Female">Female</Radio>
                            <Radio value="Male">Male</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Student Age">
                        <Input
                            type="text"
                            name="age"
                            value={tableData.age}
                            onChange={(e) => handleChange('age', e.target.value)}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AddModal;
