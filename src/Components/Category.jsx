import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import { GiNoodles } from 'react-icons/gi'
import { AiFillHome } from 'react-icons/ai'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

function Catagery() {
  return (
    <List>
      <SLink to={"/"}>
        <AiFillHome />
        <h4>Home</h4>
      </SLink>
      <SLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
    </List>
  )
}
const List = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0 30px 0;
`
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  align-items: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background: linear-gradient(35deg, #494949, #313131);
  text-decoration: none;
  margin-right: 7px;
  h4 {
    color: white;
    font-size: 10px;
  }
  svg {
    color: #fff;
    font-size: 18px;
  }

  &.active {
    background: linear-gradient(to right, #ee6285, #f7164e);
  }
`
export default Catagery