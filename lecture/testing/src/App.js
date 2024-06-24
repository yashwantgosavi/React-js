import MovieList from "./MovieList";
import styled from "styled-components";
import colorModules from './color.module.css';

const Heading = styled.div`
background-color:${(props) => props.color};
`
const H1 = styled.h1`
color:${(props)=>props.color}
`
export default function App() {
  return (
    <>
      <Heading color="red"><H1 color="green" className={colorModules.h1}>Movie App</H1></Heading>
      <MovieList />
    </>

  )
}