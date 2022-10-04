import Catagery from "./Components/Category";
import Pages from "./Pages/Pages";
import {Link} from 'react-router-dom'
import Search from "./Components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>
            Deliciousss
          </Logo>
        </Nav>
        <Search />
        <Catagery />  
        <Pages />
    </div>
  );
}

const Logo = styled(Link)`
  display: flex;
  padding: 0 5px;
  text-decoration: none;
  font-weight: 400;
  color: #f7164e;
  font-size: 15px;
`
const Nav = styled.div`
  padding: 30px 0 15px 0;
  display: flex;
  justify-content: flex-start;
  svg {
    font-size: 30px;
    color: #ff3366;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`


export default App;
