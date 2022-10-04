import { useEffect, useState } from "react"
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

function Popular() {

  const [popular, setPopular] = useState([])
  
  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {
  const check = localStorage.getItem("popular")

  if (check) {
    setPopular(JSON.parse(check))
  } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      const data = await api.json();
    localStorage.setItem('popular', JSON.stringify(data.recipes))
    setPopular(data.recipes);
    }
  }

  return (
    <div>
      <Wrapper >
        <h3>Popular Picks</h3>
        <Splide options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          gap: '15px',
          drag: 'free',
          breakpoints: {
            1024: {
              perPage: 3,
            },
            768: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            }
          }
        }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/' + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradiant />
                  </Link>
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
)
}

const Wrapper = styled.div`
  margin: 30px 0px;
`
const Card = styled.div`
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    left: 0;
    width:100%;
    border-radius: 20px;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    height: 40%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
  }

`
const Gradiant = styled.div`
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.65));
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0%;
`
export default Popular