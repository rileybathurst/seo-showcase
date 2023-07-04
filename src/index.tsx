import * as React from "react"

interface SEOShowcase {
  test: string;
}

function SEOShowcase(props: SEOShowcase) {
  console.log('🍳');

  return (
    <>
      {props.test}
    </>
  )
}

export default SEOShowcase