import React,{useState,useMemo} from 'react'
import './index.css'
import ModalHome from '../../Modal/ModalHome'
import { postStatus,getposts } from '../../api/FireStoreApi';
import Card from '../Cardpost/Card';
import { getTime } from '../Timing';

function Index() {
  const userEmail=localStorage.getItem('userEmail')
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setstatus]=useState('');
  const [allstatuses, setallstatuses]=useState([])
    
  const postData=async()=>{
    const obj={
    status:status,
    postTime:getTime('LLL'),
    userEmail:userEmail
     }
    await postStatus(obj);
    await setstatus('')
    await setModalOpen(false)
    }
    useMemo(()=>{
      getposts(setallstatuses)
     },[])
    
    
  return (
    <div className='post-main'>
     <div className='post-sub'>
      <button className='open-btn' onClick={()=>{setModalOpen(true)}} >Start Your Post</button>
     </div>
     <ModalHome modalOpen={modalOpen} setModalOpen={setModalOpen} setstatus={setstatus} status={status} postData={postData}/>
      <Card allstatuses={allstatuses}/>
    </div>
  )
}

export default Index
