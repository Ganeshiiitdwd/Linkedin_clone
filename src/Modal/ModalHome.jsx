// onClick={()=>console.log(status)} to check data collection working used in post btn to check if after the clicking it it is working
import React from 'react';
import {  Modal ,Button} from 'antd';
import './ModalHome.css'

const ModalHome= ({modalOpen , setModalOpen, setstatus, status,postData}) => {
  const inputhandler=(event)=>{
    event.preventDefault();
setstatus(event.target.value)

  }
  return (
    <>
    
      <Modal
        title="Create your post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key="back" onClick={()=>setModalOpen(false)}>
           Cancel
          </Button>,
          <Button key="submit" type="primary"  disabled={status.length>0?false:true} onClick={postData}  >
            Post
          </Button>,
         
        ]}
      >
       <input  className='modal-input' placeholder='What you want to post' onChange={inputhandler} value={status}/>
      </Modal>
    </>
  );
};

export default ModalHome;
