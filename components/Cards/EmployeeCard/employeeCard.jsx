import EmployeeCardStyle from './employeeCardStyle.module.scss'

import Image from 'next/image'
import React from 'react'

function employeeCard({wrapperBg, rectangleHorizontal, img, imgHorizontal, backgroundImg, bg, employee, employeeName, jobDesc}) {
  return (
  <div className={EmployeeCardStyle.main}>

    <div className={`${EmployeeCardStyle.wrapper} ${EmployeeCardStyle[wrapperBg]}`}>
      <Image
        width={500}
        height={500}
        alt='Employee image'
        src={img}
        className={`${EmployeeCardStyle.imgSquare} ${EmployeeCardStyle[imgHorizontal]}`}
        />
      <Image
      width={500}
      height={500}
      alt='Employee background image'
      src={backgroundImg}
      className={`${EmployeeCardStyle.bgNone} ${EmployeeCardStyle[bg]}`}/>
    </div>

    <div className={EmployeeCardStyle.textWrapperSm}>

    <h3
    className={`${EmployeeCardStyle.employeeNameSmall} ${EmployeeCardStyle[employeeName]}`}>{employee}</h3>
    <p className={EmployeeCardStyle.jobDesc}>{jobDesc}</p>
    </div>

  </div>
  )
}

export default employeeCard
