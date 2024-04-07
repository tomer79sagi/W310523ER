import React from 'react'

const PersonalDetailsPropsObject = (props) => {
  return (
    <div className="">
        <h4>Personal Details - Props Object</h4>
        <div>
            <div>{ props.person.name }</div>
            <div>{ props.person.phone }</div>
            <div>{ props.person.email }</div>
        </div>
    </div>
  )
}

export default PersonalDetailsPropsObject;
