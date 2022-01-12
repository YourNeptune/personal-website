import React from 'react'

const SkillCard = ({name,icon}) => {
    return (
        <div className='SkillCard flex flex-col flex-center'>
            <img src={icon} alt="icon"/>
            <p>{name}</p>
        </div>
    )
}

export default SkillCard
