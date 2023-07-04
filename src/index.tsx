import * as React from "react"

interface SEOShowcase {
  test: string;
}

export function SEOShowcase(props: SEOShowcase) {
  console.log('🍳');

  return (
    <>
      {props.test}
    </>
  )
}
