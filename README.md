# APPLICATION ALGORITHM
### {1} => Organize EveryThing
Create Folders [ Pages, Components ]
-- In Components --
1- create Popular file
2- create Vegiterian file

-- In Pages --
1- create Pages File & render it in App.js
2- create Home File
3- Add Popular And Vegiterian in Home File
4- Add Home in Pages file
<!-- we have

pages here which can is going to contain

all the pages so home

and then searched items and whatever is

going to come next and then

home contains veggie and popular which

are these two components -->
<!-- --------------------------------------- -->
### {2} => Popular Component
 Fetch Data From API and make it async
- run a function which contain fetch process in useEffect() to render only on begining the app
-- convert data to javaScript Object by using data.json() 
--- save data in state 
---- mapping on the popular state and return in DOM a div with key = each recipe id & title of each recipe
### {3} => Installation Search About All Of It
1- run this in terminal 
  --> npm install @splidejs/react-splide framer-motion react-icons react-router-dom styled-components
2- import styled from "styled-components"
3- import { Splide, SplideSlide } from '@splidejs/react-splide'
4- import '@splidejs/react-splide/css';
### {4} => save data on localStorage
1- check if there is a popular value in local
2- true => store value and make it equal to the popular value
3- false => repeate the {2} step [Fetch Fuc**n Data]