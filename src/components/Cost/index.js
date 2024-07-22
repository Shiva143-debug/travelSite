import {useState} from 'react'
import Payment from '../Payment'
import './index.css'

const Cost = () => {
  const [showAnotherComponent, setShowAnotherComponent] = useState(false)
  const makePayment = () => {
    setShowAnotherComponent(true)
  }
  return (
    <div>
      {showAnotherComponent ? (
        <Payment />
      ) : (
        <div className="cost">
          <p className="c-p">
            * <span>Cost per adult, Ex Nairobi</span> - USD1582/- incl of local
            taxes
          </p>
          <p className="c-p">
            * <span>child ( 4 to 9 years ), Ex Nairobi</span> - USD 1400/- incl
            of taxes
          </p>
          <h2>
            Special Independence Day offer valid for bookings made on or before
            till August 14th 2023 - Cost per adult - USD 1322
          </h2>
          <h2>
            Special Independence Day offer valid for bookings made on or before
            till August 14th 2023 - Cost per child - USD 1127
          </h2>
          <p className="payment-info">
            do you want to visit the places please press the below button to
            make payments
          </p>
          <button type="button" onClick={makePayment} className="button">
            make payment
          </button>
        </div>
      )}
    </div>
  )
}
export default Cost
