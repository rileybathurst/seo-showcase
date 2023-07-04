import React, { useState } from 'react';

function GetMeta(props: string) {
  const [size, setSize] = useState(0);
  const [reply, setReply] = useState('ok');

  const link = props.link;
  // console.log(link);

  const img = new Image();
  img.src = link;

  // console.log(img.naturalWidth);

  /*   useEffect(() => {
      img.naturalWidth ? setSize(img.naturalWidth) : setSize(0);
  
      console.log(size);
  
    }, [img.naturalWidth]); */

  // this isnt right there should be a way of using effect for the timing but hack to get around it for now
  setTimeout(() => {
    setSize(img.naturalWidth)
    if (size == 1200) {
      setReply('good')
    } else {
      setReply('bad')
    }
  }, 100);

  return (
    <>
      <span className={`${reply} key`}>width: {size} = {reply}</span>
    </>
  )
}

export default GetMeta;