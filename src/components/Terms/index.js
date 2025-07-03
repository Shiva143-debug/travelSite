import Slidebar from '../Slidebar';
import './index.css';

const Terms = () => (
  <div className="terms">
    <Slidebar />

    <div className="terms-content mt-4">
      <h3 className="text-center mb-4">Terms & Conditions</h3>
      <ul className="terms-list list-unstyled px-5">
        <li className="mb-3">
          • Costs are based on 4 persons per vehicle for game drives and 5 per vehicle for internal transfers.
        </li>
        <li className="mb-3">
          • Stay at Mara will be at Zebra Plains, Loyk Camp, or Julia River Camp.
        </li>
        <li className="mb-3">
          • Last date to confirm the tour is <strong>August 14th, 2023</strong>.
        </li>
        <li className="mb-3">
          • Guests must hold valid passports with a minimum of 6 months validity from the return date.
        </li>
        <li className="mb-3">
          • Yellow fever and oral polio vaccinations are required. They must be taken at least 15 days before travel. Certificates are needed to receive an invitation letter for the VISA.
        </li>
        <li className="mb-3">
          • Any medical conditions must be informed in advance. Travel Unbounded World Pvt Ltd is not liable for any loss or damage during the tour.
        </li>
        <li className="mb-3">
          • International travel insurance must be submitted 15 days before the travel date.
        </li>
        <li className="mb-3">
          • Guests staying in Nairobi a day prior must report to JKIA airport by 7:00 AM on <strong>November 14th</strong>.
        </li>
        <li className="mb-3">
          • Vehicles are for internal transfers and game drives only — not for other personal use.
        </li>
        <li className="mb-3">
          • Please refer to the full terms and conditions at: <a href="https://www.travelunbounded.com" target="_blank" rel="noreferrer">www.travelunbounded.com</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Terms;
