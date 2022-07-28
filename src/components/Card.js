import CardStyle from './styles/Card.styled';

function Card({item: {title, id, body, image}}) {
  return (
    <CardStyle key={id}>
       <div>
          <h1>{title}</h1>
          <p>{body}</p>
       </div>

       <div>
          <img src={"./assets/"+image} alt={title} />
       </div>
    </CardStyle>
  )
}

export default Card