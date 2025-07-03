import Slidebar from '../Slidebar';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Cost = () => {
  const navigate = useNavigate();

  const makePayment = () => {
    navigate('/payment');
  };

  return (
    <div className="cost-page">

        <div className="cost">
          <Slidebar />
          <div className="cost-details my-4">
            <ul className="list-unstyled">
              <li className="mb-2">
                <strong>• Cost per adult (Ex Nairobi):</strong> USD 1582/- (incl. of local taxes)
              </li>
              <li className="mb-2">
                <strong>• Cost per child (4 to 9 years, Ex Nairobi):</strong> USD 1400/- (incl. of local taxes)
              </li>
            </ul>

            <div className="special-offers my-4">
              <h5 className="text-success fw-bold">
                🎉 Special Independence Day Offer (valid until August 14th, 2023)
              </h5>
              <ul className="list-unstyled mt-2">
                <li>
                  <strong>• Adult:</strong> USD 1322
                </li>
                <li>
                  <strong>• Child:</strong> USD 1127
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="payment-info lead">
              Want to visit these amazing places? Click the button below to make a payment.
            </p>
            <button type="button" onClick={makePayment} className="btn btn-outline-primary btn-lg mt-3">
              Make Payment
            </button>
          </div>
        </div>

    </div>
  );
};

export default Cost;
