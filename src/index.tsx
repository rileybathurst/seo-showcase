require('dotenv').config();
import * as React from "react"
import IfSeoImage from "./components/if-seo-image"
import GetMeta from "./components/get-meta";
import DescLength from "./components/desc-length";

import "./styles.css"

interface SEOShowcase {
  title: string;
  description: string;
  ogImage: string;
}

export function SEOShowcase(seo: SEOShowcase) {

  return (
    <>
      {process.env.NODE_ENV === "development" ? (
        <div className="seo-showcase">
          <h1>SEO Showcase</h1>
          <p key="title"><span className="key">Title</span> = {seo.title}</p>
          <p key="description"><span className="key">Description</span> = {seo.description}</p>
          <p>Description charachter length = <DescLength desc={seo.description} /></p>
          {/* // ? why does this need to be ogImage? */}
          {/* // regular image doubles the url */}
          {/* <img src={seo.ogImage} alt="seo checking" /> */}
          <div key="image">
            <span className="key">Image</span> =
            {/* <GetMeta link={seo.ogImage} /> */}
          </div>
          <IfSeoImage image={seo.ogImage} />
        </div>
      ) : null}
    </>
  )
}
