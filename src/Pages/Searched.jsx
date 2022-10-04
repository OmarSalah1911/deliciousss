import React, { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import styled from 'styled-components'

function Searched() {
  const [searchedRecipe, setSearchedRecipe] = useState([])
  let params = useParams()

  const getSearhed = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=18`)
    const recipes = await data.json()
    setSearchedRecipe(recipes.results)
  }

  useEffect(() => {
    getSearhed(params.search)
  }, [params.search])

  return (
    <Grid>
      {searchedRecipe.map((item) => (
        <Card>
          <Link to={'/recipe/' + item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  )}
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
    grid-gap: 10px;
  `
  const Card = styled.div`
    img {
      width: 100%;
      border-radius: 20px;
    }
    a {
      text-decoration: none;
    }
    h4 {
      padding: 10px;
      text-align: center;
      font-size: 14px;
    }
  `

export default Searched