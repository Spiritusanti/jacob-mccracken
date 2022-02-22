import React from 'react'
import { RichText } from 'prismic-reactjs'

const TextImageRight = ({ slice }) => {
  return (
    <section className={slice.variation}>
      <div className="top-title">
        {slice.variation === 'titleImage' ? (
          <RichText render={slice.primary.title} />
        ) : null}
      </div>
      <div className="image-desc">
        {slice.variation !== 'titleImage' ? (
          <RichText render={slice.primary.textField} />
        ) : null}
      </div>
      <div>
        <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      </div>
      <style jsx global>{`
        .default-slice {
          flex-direction: row;
          height: 130px;
          display: flex;
        }
        .textImageLeft {
          flex-direction: row-reverse;
          height: 130px;
          display: flex;
        }
        .titleImage {
          flex-direction: column;
          text-align: center;
        }
        .top-title {
          text-align: center;
        }
        .image-desc {
          padding: 2% 5%;
          width: 80%;
        }
        img {
          max-width: 200px;
          border-radius: 9%;
        }
      `}</style>
    </section>
  )
}

export default TextImageRight

