import React from 'react'
import { useSelector } from 'react-redux'

// showing collegues name
const Colleague = ({id}) => {
  const contact=useSelector(state=>state.contact)
  const contactDetail=contact.find(item=>item.id==id)
  return (
    <div>{contactDetail?.first_name+' '+ contactDetail?.last_name}</div>
  )
}

export default Colleague