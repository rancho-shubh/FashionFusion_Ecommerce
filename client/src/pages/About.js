import React from "react";
import Layout from "../component/Layout/Layout";


const About =() =>{
      return(
        <Layout title = {"About us - Ecommerce"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          The most popular ecommerce sites began with minimum 
          resources at hand, however, with the passage of time,
           they scaled themselves. We advise you not to wait for 
           the right moment. Instead, we suggest you initiate 
           creating an ecommerce website and then learn the tips 
           and tricks along the way. You can take a lot of inspiration 
           from these websites and build great ecommerce pages based on 
           the tricks and strategies they have used.
          </p>
        </div>
      </div>
    </Layout>
      );
};

export default About;