import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import YesModal from '../components/ModalYes';
import NoModal from '../components/ModalNo';
import "./Home.css";

function Home() {
    const [showYesModal, setShowYesModal] = useState(false);
    const [showNoModal, setShowNoModal] = useState(false);

    const handleYesClick = () => {
        setShowYesModal(true);
    };

    const handleNoClick = () => {
        setShowNoModal(true);
    };

    const handleCloseYesModal = () => {
        setShowYesModal(false);
    };

    const handleCloseNoModal = () => {
        setShowNoModal(false);
    };

    return (
        <div className='first'>
            <h1 className='Heading'>Welcome To My Application</h1>
            <h2>I made this application to showcase why Man City Is the best team of all time</h2>
            <p>Do You think that Man City is the best team?</p>

            <div className='Buttons'>
                <Button variant="primary" onClick={handleYesClick}>Yes</Button>{' '}
                <Button variant="danger" onClick={handleNoClick}>No</Button>{' '}
            </div>

            <YesModal show={showYesModal} onClose={handleCloseYesModal} />
            <NoModal show={showNoModal} onClose={handleCloseNoModal} />

            <p>
                Man City stands over all other teams and has a lot of rival teams, but there is this one team that thinks Manchester is Red.<br />
                Here is 5 reasons why Man City is Better than U.
            </p>

            <section>

            <ul className="bullet-points">
                <li>Manchester City has achieved greater success in recent years, winning multiple Premier League titles and domestic cups.</li><br />
                <li>The style of play adopted by Manchester City, often referred to as "Guardiola's style," is praised for its emphasis on possession, creativity, and attacking football.</li> <br />
                <li>Manchester City boasts a more modern and state-of-the-art stadium, the Etihad Stadium, which offers superior facilities and amenities compared to Manchester United's Old Trafford.</li><br />
                <li>Manchester City has made significant investments in its youth academy, producing talented players who have made a significant impact on the team's success.</li><br />
                <li>Manchester City has a more stable and forward-thinking ownership and management structure, which has contributed to the club's sustained success and growth both on and off the pitch.</li> <br />
            </ul>

            </section>

            <footer>

                MANCHESTER IS BLUE!

            </footer>

        </div>


    );
}
  
  export default Home;