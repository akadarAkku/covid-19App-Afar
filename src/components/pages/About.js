import React, { Component } from "react";
import './about.module.css';

class About extends Component {
  render() {
    return (
      <div className="about-section paddingTB60 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-6">
            <div className="about-title clearfix">
              <h1>Yoo <span style={{color: 'red'}}>Wagsisaak</span></h1>
              <h3>Ta gabbeelo wagisisaak Dagoo baxxaqsa..</h3>
              <p className="about-paddingB">Anu Qaafiyat tu yaaxigi hinniyo. takke way, away edde nanno wakti gariiy isih duudaamal sitta edde qokollam faxximta
              wakti kinnim naamine. baxsa luk awayih uddur baadal inkih sinam agxisak geytimta dalka wagsisaak manggo oytitte tan.
              Takkay ikkah kullikkel tan oytitte inkih dudda alle waytaah, digga alle waytam uble. (eddeey Qafarak dumaak oyti caddol lino boola edde anuk.)
              Toh dubuh hinnay, baalamak qaafiyat egla tayyaaqeh tan afkan kee kassiisitte Qafar afat elle koobahisnu dudna arac
              haanam gabbate.
              Too taamak naharsi taama tamanna celtaah, dudda fooca fanah faxximtam edde osisak missoysak benno.
              Takkel geytoonu waytan oytitte, baadak qaafiyat egla akke kee (Qafar rakaakayak qaafiyat biiro edde anuk
              ) Masquliyyat le xagorti kee tutaaxagok geynem dubuh akkele.</p>
               {/*team-1*/}
      <div className="col-lg-4">
        <div className="our-team-main">
        <div className="media">
        <img className="img-profile" style={{borderRadius: '50%', height: '100px'}} src="./images/akku.jpg" alt="Avatar"/>
        <div className="media-body">
          <p>Akadar Ib/Akku</p>
          <h6>Frontend Developer</h6>
          <ul className="social-icons-ql">
              <p><a href="https://www.facebook.com/akkuibnafarAkadar/"><i className="fa fa-facebook" /></a></p>
              <p><a href="https://twitter.com/AafarAkku"><i className="fa fa-twitter" /></a></p>
              <p><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><i className="fa fa-linkedin" /></a></p>
            </ul>
        </div>
      </div>

        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      // <div className="about-page py-5">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-6 my-4 text-dark">
      //         <h1 className="text-uppercase display-3">About Us!</h1>

      //         <h3>
      //           We are <strong>Hack Your Future Belgium </strong>students of
      //           class #6.
      //         </h3>
      //         <p>
      //           We are coding really hard for the past 7 months. We create our
      //           masterpiece strugling with tons of stuck moments. But we are so
      //           grateful for all who support us.
      //         </p>
      //         <p>
      //           Our thanks and gratitude goes to all supports from Hack Your
      //           Future, our lovely coaches and the last but not least is our
      //           classmates.
      //         </p>
      //         <button className="btn main-btn my-4 text-capitalize">
      //           Our Team{" "}
      //         </button>
      //       </div>
      //       <div className="col-md-6  about-pictures my-4 d-none d-lg-block">
      //         <img
      //           src={akader}
      //           alt="akader"
      //           className="img-1 img-thumbnail about-image"
      //         />
            
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
export default About;
