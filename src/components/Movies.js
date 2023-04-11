import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended for You</h4>
        <Content>
            <Wrap>
                <img src="/images/ford.webp" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/ford.webp" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/ford.webp" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/ford.webp" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/ford.webp" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/ford.webp" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/ford.webp" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/ford.webp" alt="" />
            </Wrap>

        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    cursor: pointer;
    display: flexbox;
    height: 40%;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 36px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`