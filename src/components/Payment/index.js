import { useState } from 'react';
import Slidebar from '../Slidebar';
import './index.css';

const Payment = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const totalAmount = 1582 * adults + 1400 * children;

  const handlePayment = () => {
    alert(`Payment of USD ${totalAmount} succeeded.`);
    setAdults(0);
    setChildren(0);
  };

  return (
    <div>
      <Slidebar />
      <div className="payment-container px-5">
        <h1 className="title">Payment & Booking Information</h1>

        <div className="section">
          <h2>Bank Account Details</h2>
          <div className="grid">
            <div className="form-group">
              <label>Account Holder</label>
              <input value="Travel Unbounded World Pvt Ltd" readOnly />
            </div>
            <div className="form-group">
              <label>Account Number</label>
              <input value="USD-55010130009921" readOnly />
            </div>
            <div className="form-group">
              <label>Bank Code</label>
              <input value="076" readOnly />
            </div>
            <div className="form-group">
              <label>Branch Code</label>
              <input value="76001" readOnly />
            </div>
            <div className="form-group">
              <label>Account Type</label>
              <input value="CURRENT A/C BUSINESS" readOnly />
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Traveler Details</h2>
          <div className="grid">
            <div className="form-group">
              <label>Adults (age ≥ 10)</label>
              <input
                type="number"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                placeholder="Enter number of adults"
                min="0"
              />
            </div>
            <div className="form-group">
              <label>Children (age 4–9)</label>
              <input
                type="number"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                placeholder="Enter number of children"
                min="0"
              />
            </div>
            <div className="form-group total">
              <label>Total Amount</label>
              <input value={`USD ${totalAmount}`} readOnly />
            </div>
          </div>
        </div>

        <div className="pay-btn-container mb-5">
          <button className="pay-btn" onClick={handlePayment}>
            Proceed to Pay
          </button>
        </div>

        <div className="section">
          <h2>Payment Terms & Cancellation Policy</h2>
          <ul>
            <li>100% tour cost at booking</li>
            <li>50% refund as credit if cancelled 60+ days before travel</li>
            <li>No refund if cancelled within 30 days of travel</li>
          </ul>
        </div>

        <div className="section">
          <h2>Inclusions</h2>
          <ul>
            <li>Transfers from JKIA to Maasai Mara (shared Landcruiser)</li>
            <li>Stay at Zebra Plains or similar (twin-sharing)</li>
            <li>Shared game drives (min. 4 pax/vehicle)</li>
            <li>Water during drives, all meals, park & guide fees</li>
            <li>English-speaking guides/drivers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payment;
