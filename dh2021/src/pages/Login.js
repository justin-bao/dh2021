import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// FirebaseUI config
const uiConfig = {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID, // Google login
  ],
  //page won't show account chooser
  credentialHelper: 'none',
  //use popup instead of redirect for external sign-up methods -- Google
  signInFlow: 'popup',
  callbacks: {
    //Avoid redirects after sign-in
    signInSuccessWithAuthResult: () => false,
  },
};

function Login() {
  document.body.style.backgroundColor = "#BCD1E4";

  const [isNavToggled, setIsNavToggled] = useState(false);

  // changed from decomposed instantiation to prevent ESLint
  // from getting angry about an unused variable

  // state variables for error message and current user
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // callback for toggling the nav
  const handleNavToggle = () => {
    setIsNavToggled(!isNavToggled);
  };

  // use effect hook to wait until the component loads
  useEffect(() => {
    const authUnregisterHandler = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if(firebaseUser) {
        console.log( firebaseUser.displayName + ', you are logged in!')
        setUser(firebaseUser);
        setIsLoading(false);
      } else {
        console.log('Logged out')
        setUser(null);
        setIsLoading(false);
      }
    });

    return function cleanup() {
      authUnregisterHandler();
    }
  }, []) // Only run hook on first load

  if (isLoading) {
    return (
      <div className='spinner'>
        <i className='fa fa-spinner fa-spin fa-3x' aria-label='Loading...'></i>
      </div>
    );
  }

  let content = null; //content to render

  if(!user) { // if no user has successfully logged in, show landing/login page
    content = (
      <div>
        <div className='landing'>
            <h1>Noctua</h1>
        </div>

        <section id='landing'>
          <h1>Let's learn together.</h1>
          <i className="fab fa-pagelines" aria-label="leaf"></i>
          <i className="fab fa-pagelines" aria-label="leaf"></i>
          <i className="fab fa-pagelines" aria-label="leaf"></i>
          <p>
              mep description
          </p>

          <div className="login-page">
            <h2>Sign In</h2>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        </section>
      </div>
    );
  } else {  // otherwise, show welcome page
    let navBarContent = (isNavToggled ? null : null);

    content = (
      <div className="content">
        {navBarContent}
      </div>
    );
  }
  return content;
}

export default Login;