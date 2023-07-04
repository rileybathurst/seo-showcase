import * as React from "react"

function IfSeoImage(props: { image: string | undefined; }) {
  // TODO: this could be a ternary
  if (props.image) {
    return (
      <img src={props.image} alt="seo checking" />)
  } else {
    return null;
  }
}

export default IfSeoImage;