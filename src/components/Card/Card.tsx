import './Card.scss'


const Card = ({className, title, backdrop}) => {
  return (
    <div className={className}>
        <h2 className='card__title'>{title}</h2>
        <img className='card__img' src={backdrop} alt={title} />
    </div>
  )
}



export default Card