import React from 'react'

function ImageList(props) {
  const images = props.images.map(({description, id, urls}) => {
    return <img alt={description} key={id} src={urls.regular}/>
  })
  console.log(props.images)
  return (
    <div>
      {images}
    </div>
  )
}

export default ImageList