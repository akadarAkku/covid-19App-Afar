import React, { Component } from "react";
// import Contact from "./Contact";
import Footer from "../layouts/Footer";
import SlideShow from "../layouts/slideShow";
import { fetchData } from './api/';
import styles from './App.module.css'
import Cards from './Cards/Cards';
import AnimatedTex from './Animated/AnimatedTex';
import CountryPicker from './CountryPicker/CountryPicker';
// import InfoPage from './Info/infoPage';
// import ModalTwo from './Info/ModalTwo';



class Home extends Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
      <React.Fragment>
        <AnimatedTex/>
      <Cards data={data} country={country}/>
      <CountryPicker handleCountryChange={this.handleCountryChange} />
      {/* <InfoPage/> */}
      {/* <ModalTwo/> */}
    

        <SlideShow />

       
        <Footer />
      </React.Fragment>
      </div>
    );
  }
}
export default Home;
