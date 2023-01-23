import React from 'react'
import ListCard from '../components/ListCard'
// import { selectContacts } from '../redux/contactSlice/contactSlice'
import { useSelector } from 'react-redux'

const ListGrid = () => {

  const contacts=useSelector(state=>state.contact)
  console.log(contacts)
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4 '>
       {
        contacts.map(item=>{
          return <ListCard name={item.name} email={item.email} key={item.id} id={item.id} />
        })
       }
    </div>
  )
}

export default ListGrid