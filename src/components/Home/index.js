import {useState} from 'react'

import Plans from '../Plans'
import './index.css'
import Slidebar from '../Slidebar'

const Home = () => {
  const [showAnotherComponent, setShowAnotherComponent] = useState(false)
  const buttonClick = () => {
    setShowAnotherComponent(true)
  }

  return (
    <div className="home">
      {showAnotherComponent ? (
        <Plans />
      ) : (
        <div>
          <Slidebar/>
          <h1>Big Cats Week at Maasai Mara - Diwali 2023 special</h1>
          <p className="para">
            November is one of the Best times to visit Kenya, especially to
            visit its prime park, Maasai Mara. This is because the large
            migratory herds would have returned to Tanzania and now the Big cats
            have to venture long distances to hunt their prey.
          </p>
          <p className="para">
            November is also the season of short rains. This makes the plains of
            Maasai Mara lush green. The skies are truly dramatic and colourful.
            The Sun rise and Sun sets during November at Mara is simply breath
            taking.
          </p>
          <p className="para">
            November is also a time for holidaying and getting together with our
            families. And the icing on the cake is we have curated this
            itinerary for such an affordable costs without compromising on any
            of the services. This is commemorate our first year anniversary of
            opening up operations at Nairobi.
          </p>

          <h1>Join us on this unforgettable journey of your life time.</h1>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <button type="button" onClick={buttonClick} className="button">
            see the plans
          </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default Home
