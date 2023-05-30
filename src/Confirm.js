import React from 'react'

function Confirm(props) {
  return (
    <div id='confirmBox'>
        <div className='innerBox'>
            <h3>Are you sure, you want to delete this item?</h3>
            <div>
                <button className='confirmBtn' onClick={() => props.cancelConfirm() }>Cancel</button>
                <button className='confirmBtn' onClick={ () => props.deleteItem() }>Yes, Please</button>
            </div>
        </div>
    </div>
  )
}

export default Confirm