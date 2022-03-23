const ModalArtworkDetails = ({ data }) => {
  return (
    <div className='artwork-details-container'>
      <div>
        <p>{data.title}</p>
        <div>
          <span>DESCRIPTION</span>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat nulla non tortor vehicula, nec
            egestas lorem mollis. Maecenas et rhoncus sem. Integer eu erat imperdiet urna placerat aliquet et a magna.
            Suspendisse efficitur nisi dolor, ac ullamcorper nulla posuere id. Pellentesque mauris elit, tristique vel
            neque in, vulputate gravida eros. Donec porttitor ipsum eget lorem lacinia, ac hendrerit purus posuere. In
            vitae quam lacinia, accumsan libero ut, vehicula odio.
          </div>
        </div>
      </div>
      <div>
        <div className='artwork-img'>
          <div className='artwork-img-container'>
            <img src={data?.thumbs?.bg || data?.thumbs?.md || data.url} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalArtworkDetails
