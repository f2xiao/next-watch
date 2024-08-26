import "./HomeSection.scss"

type Props = {
sectionTitle: string,
imgUrl: string,
text:string,
reverse?:boolean
}

function HomeSection({sectionTitle, imgUrl, text, reverse=false}: Props) {
  return (
    <section className={`section ${reverse? 'section--reverse':''}`}    >
        <div className="section__copy">
          <h1 >{sectionTitle}</h1>
          <p className="section__text">{text}</p>
        </div>
        <div className="section__wrapper">
          <img className="section__img" src={imgUrl} alt={sectionTitle} />
        </div>
    </section>
  )
}

export default HomeSection