import React from 'react'

const Comics = ({comicsData}) => {
  return (
    <div className="content-comics">

        <img src={comicsData.thumbnail.path + ".jpg"} alt="" className='img-comics'/>
        <p>
            {comicsData.title}
        </p>
    </div>
  )
}

export default Comics