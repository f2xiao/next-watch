import './Card.scss'

type CardProps = {
  className:string, 
  title:string, 
  backdrop:string,
}

const Card = ({className, title, backdrop}: CardProps) => {
  return (
    <div className={className}>
        <img className='card__img' src={backdrop} alt={title} />
        <h2 className='card__title'>{title}</h2>
    </div>
  )
}



export default Card;