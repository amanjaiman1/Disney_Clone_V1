import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp href='{<Home />}'>GET ALL THERE</SignUp>
            <Description>
            Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem
            Ipsum has been the industry's standard
            dummy
            </Description>
            <CTAlogoTwo src="/images/cta-logo-two.png" />
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;

    &:before{
        position: absolute;
        top: 0;
        bottom: 0;
        content: "";
        left: 0;
        right: 0;
        background-position: top;
        background-size: cover;
        background-image: url("/images/login-background.jpg");
        z-index: -1;
        opacity: 0.7;

    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CTALogoOne = styled.img`

`

const SignUp = styled.a `
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0px;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTAlogoTwo = styled.img`
    width: 100%;
    margin: 20px;

`