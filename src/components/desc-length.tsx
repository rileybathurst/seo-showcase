import * as React from "react"

function DescLength(props: { desc: any; }) {
  const desc = props.desc;
  const length = desc.length;
  if (length <= 120) {
    return (
      <span className="good key">{length} = good</span>
    );
  } else if (length > 120 && length <= 160) {
    return (
      <span className="ok key">{length} = ok</span>
    );
  } else {
    return (
      <span className="bad key">{length} = bad</span>
    );
  }
}

export default DescLength;