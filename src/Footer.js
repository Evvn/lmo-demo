import React from 'react'

class Footer extends React.Component {

  render() {

    return(
      <div>
        <div className="cta">
          <div className="mryum">
            <img src="/Mr_Yum_logo_red.svg" alt="Mr Yum"/>
          </div>

          <h3>Loving photo menus?</h3>

          <p>The Mr Yum free app is launching soon  with photo menus from over 100 of Melbourne’s  best cafes and restaurants.</p>
          <p className="preRegister">Pre-register now to stay updated on our launch!</p>

          <input type="email" placeholder="Your email"/>

        </div>

        <footer>©Copyright  Mr Yum 2018</footer>
      </div>
    )
  }
}

export default Footer;
