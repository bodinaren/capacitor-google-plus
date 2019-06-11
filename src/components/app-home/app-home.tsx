import { Component, h } from '@stencil/core';
import { GooglePlus } from "@ionic-native/google-plus";

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  private googleLoginResult = "";

  private googleLogin() {
    GooglePlus.login({}).then((result) => {
      this.googleLoginResult = JSON.stringify(result);
    }, (err) => {
      alert("Faaaaail: " + JSON.stringify(err));
    });
  }
  
  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <button onClick={() => this.googleLogin()}>
          Google Login
        </button>

        { this.googleLoginResult && <div>{ this.googleLoginResult }</div> }

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
