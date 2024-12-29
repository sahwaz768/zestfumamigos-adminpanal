

const ticket = () => {
  return (
    <div>
      <h1 className="ticket-heading">zestful amigos</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder="search by ticket number"
        />
        <button>search</button>
      </div>
      <div>
      <div className='support-box-head'>
     <div className='support-row-head text-xl '>
      Ticket no
     </div>
     <div className='support-row-head text-xl '>
      Topic
     </div>
     <div className='support-row-head text-xl  '>
      status
     </div>
     <div className='support-row-2-head text-xl '>
      check
     </div>


        </div>
        <hr/>
      <div className='support-box'>
     <div className='support-row text-sm font-bold'>
      #12345
     </div>
     <div className='support-row text-sm font-bold'>
      Balance error
     </div>
     <div className='support-row text-sm font-bold pending'>
      pending
     </div>
    <div className='support-row-2 text-sm font-bold'>
     <p>view</p> 
     </div>
    


        </div>
        <div className='support-box'>
     <div className='support-row text-sm font-bold'>
      #12345
     </div>
     <div className='support-row text-sm font-bold'>
      Balance error
     </div>
     <div className='support-row text-sm font-bold pending'>
      pending
     </div>
     <div className='support-row-2 text-sm font-bold'>
     <p>view</p>
     </div>


        </div>
      </div>
    </div>
  )
}

export default ticket


