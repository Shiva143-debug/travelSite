import Slidebar from '../Slidebar';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Home = () => {
  const navigate = useNavigate();

  const buttonClick = () => {
    navigate('/plans');
  };

  return (
    <div className="home">
        <Slidebar />
        <div className=" text-white py-5 px-2">
          <h1 className="home-title text-center mb-4">
            Big Cats Week at Maasai Mara - Diwali 2023 Special
          </h1>

          <p className="home-para">
            November is one of the best times to visit Kenya, especially its
            prime park, Maasai Mara. This is because the large migratory herds
            would have returned to Tanzania, and now the big cats have to
            venture long distances to hunt their prey.
          </p>

          <p className="home-para">
            November is also the season of short rains. This makes the plains
            of Maasai Mara lush green. The skies are truly dramatic and
            colourful. The sunrise and sunsets during November at Mara are
            simply breathtaking.
          </p>

          <p className="home-para">
            November is also a time for holidaying and getting together with
            our families. And the icing on the cake is that we have curated
            this itinerary at such affordable costs without compromising any
            of the services. This is to commemorate our first-year anniversary
            of opening up operations in Nairobi.
          </p>

          <h2 className="home-subtitle text-center mt-5">
            Join us on this unforgettable journey of your lifetime.
          </h2>

          <div className="text-center mt-4">
            <button type="button" onClick={buttonClick} className="btn btn-outline-info btn-lg custom-button">
              See the Plans
            </button>
          </div>
        </div>
    </div>
  );
};

export default Home;
