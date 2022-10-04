import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function Recipe() {
  const params = useParams()
  const [recipe, setRecipe] = useState({})
  const [active, setActive] = useState('instruction')

  const getDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const details = await data.json()
    setRecipe(details)
    // console.log(details, recipe.extendedIngredients)
  }

  useEffect(() => {
    getDetails()
  }, [params.name])

  return (
    <Wrapper>
      <div>        
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt="" />
      </div>
      <Info>
        <Button 
        className={active === 'instruction' ? 'active' : ''}
        onClick={()=>setActive('instruction')}>Instruction</Button>
        <Button className={active === 'ingrediants' ? 'active' : ''} onClick={() => setActive('ingrediants')}>Ingrediants</Button>
        {active === 'instruction' && <div>
          <h2>Summary</h2>
          <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
          <h2>Instruction</h2>
          <h3 style={{borderTop: 'solid #777 1px', marginLeft: '20px'}} dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
        </div>}
        {active === 'ingrediants' && <ul>
          {recipe.extendedIngredients && recipe.extendedIngredients.map((ingrediant) => (
            <li style={{
              marginLeft: '20px'
            }} key={ingrediant.id}>{ingrediant.original}</li>
          ))}
        </ul>}
      </Info>
    </Wrapper>
  )
}

const Wrapper = styled(motion.div)`                                     
  margin-bottom: 10px;
  display: flex;
  margin-top: 20px;                                                                                                                                                                                                                                                                                                                                                                                                                                               
  .active {
  background: linear-gradient(35deg, #494949, #313131);
  color:#fff;   
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  h3 {
    margin-bottom: 10px;
    font-size: 16px;
  }
  li {
    font-size: 16px;
  }
  ul {
    margin-top: 20px;
  }
  img {
    width: 300px;
    border-radius: 20px;
  } 
  @media (max-width: 850px) {
    flex-direction: column;
  }
`

const Info = styled.div`
  margin-left: 50px;
  @media (max-width: 768px) {
    margin: 25px 0 0 0;
  }
`

const Button = styled.button`
  padding: 10px 15px;
  color: #313131;
  font-weight: 600;
  font-size: 16px;
  border: #313131 solid 2px;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 15px;
  background-color: #fff;
  cursor: pointer;
`


export default Recipe