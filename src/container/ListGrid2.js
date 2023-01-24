import React from 'react'
// import { selectContacts } from '../redux/contactSlice/contactSlice'
import ListCard2 from '../components/ListCard2'
import { useSelector } from 'react-redux'

const ListGrid2 = () => {

  const contacts=useSelector(state=>state.contact)
  console.log(contacts)
  return (
    <div className='flex flex-col  overflow-y-scroll h-screen  '>
       {
        contacts.map(item=>{
          return <ListCard2 name={item.name} email={item.email} key={item.id} id={item.id} />
        })
       }
    </div>
  )
}

export default ListGrid2