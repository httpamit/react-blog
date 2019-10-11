import React, { Component } from "react";

import Article from "./../Article/";
import Banner from "./../Banner";

class Index extends Component {
  render() {
    return (
      <div>
        <Banner
          backgroundImage="url(assets/img/bg-gift.jpg"
          title="Latest Blog Posts"
          subtitle="Read and get updated on how we progress."
        />

        <main className="main-content bg-gray">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-3">
              <Article />
              <hr />
              <Article />
              <hr />
              <Article />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Index;
