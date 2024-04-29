import React from 'react';
import EducationTable from './departmentTable';
import './Collage.css';
const Collage = (props) => {
  const { data, setData } = props

  return (
    <div className='details'>
      <header className='h2'>
        <h2>Department</h2>
      </header>
      < EducationTable data={data} setData={setData} />     {/* it idepartmentTable*/}
    </div>

  )
}

export default Collage;