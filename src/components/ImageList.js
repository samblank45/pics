import React from 'react'
import './ImageList.css'

function ImageList(props) {
  const images = props.images.map(({description, id, urls}) => {
    return <img alt={description} key={id} src={urls.regular}/>
  })
  console.log(props.images)
  return (
    <div className="image-list">
      {images}
    </div>
  )
}

export default ImageList