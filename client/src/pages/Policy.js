import React from "react";
import Layout from "../component/Layout/Layout";


const Policy =() =>{
      return(
        <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/PrivacyPolicy.png"
            alt="PrivacyPolicy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
            <h4>Information we automatically collect about you.</h4>
             <h5> We will use this information:</h5>
          <ul>
              <li>to provide you with information and/or services that you request from us;</li>
              <li>to administer our site including troubleshooting and statistical purposes;</li>
              <li>to improve our site to ensure that content is presented in the most effective manner for you and for your computer;</li>
              <li>security and debugging as part of our efforts to keep our site safe and secure</li>
          </ul>
        </div>
      </div>
    </Layout>
      );
};

export default Policy;