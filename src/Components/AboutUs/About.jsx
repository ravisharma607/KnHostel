import React from 'react'
import owner from './Img/owner.jpg'
import './About.css'
const About = () => {
  return (
    <>
    <div className="aboutContainer" id='aboutUs'>
        <div className="title">
            <h2>Discover Our Story</h2>
        </div>
        <div className="ownerImg">
            <img src={owner} alt="" />
        </div>
        <div className="ownerName">
                <h2>Smt. Seema Rani</h2>
        </div>
        <div className="favQuote">
            <h4>"Success is not just about building a thriving business; it's about creating a meaningful experience that inspires others to dream, explore, and embrace the world."</h4>
        </div>
        <div className="speech">
            <p>
At our hostel, we have built a thriving business by focusing on providing exceptional experiences for our guests.

Our success lies in our commitment to creating a welcoming and comfortable environment where travelers can feel at home.

We prioritize customer satisfaction by delivering personalized service and going above and beyond to meet our guests' needs.

Through strategic partnerships and innovative marketing strategies, we have successfully positioned ourselves as a premier destination for travelers.

Our attention to detail, from the design of our rooms to the quality of our amenities, sets us apart from our competitors and ensures a memorable stay for our guests.

We have fostered a strong sense of community within our hostel, creating a space where travelers can connect, share stories, and forge lifelong friendships.

By consistently exceeding expectations and providing exceptional value for money, we have earned a loyal customer base and a positive reputation in the industry.

We have embraced sustainable practices, reducing our environmental footprint and appealing to eco-conscious travelers who seek responsible accommodations.

Through continuous learning and adaptation, we stay ahead of industry trends, incorporating new technologies and services to enhance the guest experience.

Our success is a testament to the hard work and dedication of our passionate team, who strive to deliver excellence in every aspect of our operations.

Together, these factors have contributed to our ongoing success as a thriving and reputable hostel in the hospitality industry.</p>
        </div>
    </div>
    </>
  )
}

export default About