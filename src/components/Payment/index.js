import {useState} from 'react'

import './index.css'

const Payment = () => {
  const [adults, setMemberValue] = useState('')
  const [children, setMemberValueC] = useState('')

  const handleChangeA = event => {
    setMemberValue(event.target.value)
  }
  const handleChangeC = event => {
    setMemberValueC(event.target.value)
  }
  const buttonClick = () => {
    alert('payment succeded')
    setMemberValue('')
    setMemberValueC('')
  }

  return (
    <div className="payment">
      <form>
        <label htmlFor="name">Account holder Name </label>
        <br />
        <input
          type="text"
          id="name"
          value="Travel Unbounded World pvt Ltd"
          selected
        />
        <br />
        <label htmlFor="a/c number">Account Number </label>
        <br />
        <input
          type="text"
          id="a/c number"
          value="USD-55010130009921"
          selected
        />
        <br />
        <label htmlFor="Bank Code">Bank Code </label>
        <br />
        <input type="text" id="Bank Code" value="076" selected />
        <br />
        <label htmlFor="Branch Code">Branch Code </label>
        <br />
        <input type="text" id="Branch Code" value="76001" selected />
        <br />
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
        <br />
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
        <br />
        <button type="button" className="button-b" onClick={buttonClick}>
          Pay
        </button>
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
