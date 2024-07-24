import { useState } from 'react'

import './index.css'
import Slidebar from '../Slidebar'

const Payment = () => {
  const [adults, setMemberValue] = useState(0)
  const [children, setMemberValueC] = useState(0)

  const handleChangeA = event => {
    setMemberValue(Number(event.target.value))
  }
  const handleChangeC = event => {
    setMemberValueC(Number(event.target.value))
  }
  const buttonClick = () => {
    alert('payment succeded');
    setMemberValue(0);
    setMemberValueC(0);
  }

  return (
    <div className="payment">
      <Slidebar />
      {/* <form >
        <div className='row'>
          <div className='col-md-5'>
            <label htmlFor="name ">Account holder Name </label>
            <br />
            <input
              type="text"
              id="name"
              value="Travel Unbounded World pvt Ltd"
              selected

            />
          </div>
          <div className='col-md-5'>
            <label htmlFor="a/c number">Account Number </label>
            <br />
            <input
              type="text"
              id="a/c number"
              value="USD-55010130009921"
              selected
            />
          </div>
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <label htmlFor="Bank Code">Bank Code </label>
          <br />
          <input type="text" id="Bank Code" value="076" selected />
          <br />
          <label htmlFor="Branch Code">Branch Code </label>
          <br />
          <input type="text" id="Branch Code" value="76001" selected />
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <label htmlFor="type">Account Type</label>
          <br />
          <input type="text" id="type" value="CURRENT A/C BUSINESS" selected />
          <br />
          <label htmlFor="adults">How many adults (age >= 10)</label>

          <input
            type="text"
            id="adults"
            onChange={handleChangeA}
            className="input-c"
          />
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <label htmlFor="children">How many children (age 4 to 9)</label>

          <input
            type="text"
            id="children"
            onChange={handleChangeC}
            className="input-c"
          />
          <br />
          <label type="text" htmlFor="amount">
            Total Amount
          </label>
          <br />
          <input id="amount" value={1582 * adults + 1400 * children} />
        </div>
        <br />
        <button type="button" className="button-b" onClick={buttonClick}>
          Pay
        </button>
      </form> */}

      {/* <form style={{display:"flex",flexDirection:"column",justifyContent:'center',alignItems:"center",width:"500px"}}>
        <div className="row">
          <div className="row">
            <label htmlFor="name" style={{ paddingRight: "5px" }} className='col-md-2'>Account holder Name:</label>
            <input type="text" id="name" value="Travel Unbounded World pvt Ltd" readOnly className='col-md-8 '/>
          </div>
          <div className="row">
            <label htmlFor="account-number" style={{ paddingRight: "5px" }} className='col-md-6'>Account Number:</label>
            <input type="text" id="account-number" value="USD-55010130009921" readOnly className='col-md-6'/>
          </div>

          <div className="row">
            <label htmlFor="bank-code" style={{ paddingRight: "5px" }} >Bank Code:</label>
            <input type="text" id="bank-code" value="076" readOnly className='col-md-12'/>
          </div>
          <div className="col-md-4 form-group ">
            <label htmlFor="branch-code" style={{ paddingRight: "5px" }}>Branch Code:</label>
            <input type="text" id="branch-code" value="76001" readOnly />
          </div>
          <div className="col-md-4 form-group ">
            <label htmlFor="type" style={{ paddingRight: "5px" }}>Account Type:</label>
            <input type="text" id="type" value="CURRENT A/C BUSINESS" readOnly />
          </div>
          <div className="col-md-4 form-group ">
            <label htmlFor="adults" style={{ paddingRight: "5px" }}>How many adults (age >= 10):</label>
            <input type="text" id="adults" onChange={handleChangeA} className="input-c" />
          </div>
          <div className="col-md-4 form-group ">
            <label htmlFor="children" style={{ paddingRight: "5px" }}>How many children (age 4 to 9):</label>
            <input type="text" id="children" onChange={handleChangeC} className="input-c" />
          </div>
          <div className="col-md-4 form-group ">
            <label htmlFor="amount" style={{ paddingRight: "5px" }}>Total Amount:</label>
            <input id="amount" value={1582 * adults + 1400 * children} readOnly />
          </div>


        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <button type="button" className="button-b" onClick={buttonClick}>

            Pay
          </button>
        </div>
      </form> */}

<form style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
  <div className="row" >
    <div className="row" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <label htmlFor="name" style={{ paddingRight: "5px", width: "200px"  }}>Account holder Name:</label>
      <input type="text" id="name" value="Travel Unbounded World pvt Ltd" readOnly style={{ width: "40%" }} />
    </div>
    <div className="row" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <label htmlFor="account-number" style={{ paddingRight: "5px", width: "200px" }}>Account Number:</label>
      <input type="text" id="account-number" value="USD-55010130009921" readOnly style={{ width: "40%" }} />
    </div>
    <div className="row" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <label htmlFor="bank-code" style={{ paddingRight: "5px", width: "200px" }}>Bank Code:</label>
      <input type="text" id="bank-code" value="076" readOnly style={{ width: "40%" }} />
    </div>
    <div className="row" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <label htmlFor="branch-code" style={{ paddingRight: "5px", width: "200px" }}>Branch Code:</label>
      <input type="text" id="branch-code" value="76001" readOnly style={{ width: "40%" }} />
    </div>
    <div className="row" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <label htmlFor="type" style={{ paddingRight: "5px", width: "200px" }}>Account Type:</label>
      <input type="text" id="type" value="CURRENT A/C BUSINESS" readOnly style={{ width: "40%" }} />
    </div>
    <div className="row" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <label htmlFor="adults" style={{ paddingRight: "5px", width: "200px" }}>How many adults (age >= 10):</label>
      <input type="text" id="adults" onChange={handleChangeA} className="input-c" style={{ width: "40%" }} />
    </div>
    <div className="row" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <label htmlFor="children" style={{ paddingRight: "5px", width:"200px" }}>How many children (age 4 to 9):</label>
      <input type="text" id="children" onChange={handleChangeC} className="input-c" style={{ width: "40%" }} />
    </div>
    <div className="row" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <label htmlFor="amount" style={{ paddingRight: "5px",width:"200px" }}>Total Amount:</label>
      <input id="amount" value={1582 * adults + 1400 * children} readOnly style={{ width: "40%" }} />
    </div>
  </div>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" ,marginTop:"10px"}}>
    <button type="button" className="button-b" onClick={buttonClick}>
      Pay
    </button>
  </div>
</form>


      <h2>Payment terms and Cancellation policy </h2>
      <p className="p-p">
        - 100% of the tour cost at the time of booking <br />
        - 50% of the tour cost would be given back as credit if the tour is
        cancelled 60 days before the travel dates
        <br />- No refund is provided if tour is cancelled within thirty days of
        the travel dates
      </p>
      <h2>Inclusion-</h2>
      <p className="p-p">
        - Internal transfers from JKIA airport to Maasai Mara and back by
        Landcruiser on shared basis
        <br /> - Stay on twin sharing basis at Maasai Mara either at Zebra
        plains or <br />- Game drives in Landcruisers in shared basis - minimum
        4 paxs per vehicle <br />- Water during game drives <br />- All meals as
        mentioned in the itinerary <br />- Park Fees
        <br /> - Guide Fees <br />- English speaking guides/drivers
      </p>
    </div>
  )
}
export default Payment
