import React, { useState } from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {
  const [inpVal, setInpVal] = useState([])
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate('/searched/' + inpVal)
    e.target.value = ""
  }

  return (
    <SForm onSubmit={submitHandler}>
        <FaSearch />
        <input type="text" onChange={(e) => setInpVal(e.target.value)} value={inpVal}/>
    </SForm>
  )
}
const SForm = styled.form`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 10px 20%;
  background-color: #313131;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
  input {
    background-color: #313131;
    outline: none;
    border: none;
    padding: 10px 0;
    color: #fff;
    font-size: 14px;
    flex: 1;
    font-weight: 600;
  }
  svg {
    color: white;
    font-size: 13px;
    text-align: center;
    width: 40px;
  }
`

export default Search