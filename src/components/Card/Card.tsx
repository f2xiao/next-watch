import './Card.scss'

type CardProps = {
  className:string, 
  title:string, 
  backdrop:string,
  trailer_youtube: string
}

const Card = ({className, title, backdrop, trailer_youtube}: CardProps) => {
  console.log(trailer_youtube);
  
  return (
    <div className={className}>
        <h2 className='card__title'>{title}</h2>
        <img className='card__img' src={backdrop} alt={title} />
        {trailer_youtube &&  
            <iframe
              width={"500px"}
              height={"100px"}
              src={`https://www.youtube.com/embed/${trailer_youtube}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        }
    </div>
  )
}



export default Card;