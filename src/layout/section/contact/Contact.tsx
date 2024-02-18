import styled, { css } from "styled-components";
import SectionTitle from "../../../components/title/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { SectionTitleBG } from "../../../components/title/SectionTitleBG";
import Icon from "../../../components/icon/Icon";
import { theme } from "../../../styles/Theme";
import { Button } from "../../../components/button/Button";

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitleBG>Contact me</SectionTitleBG>
        <FlexWrapper
          align="flex-start"
          justify="center"
          gap="50px"
          wrap="wrap"
          position="relative"
          margin="15vh 0 0 0"
        >
          <StyledColumnWrapper>
            <SectionTitle>Contact me</SectionTitle>
            <Motto>
              I start every new client interaction with an in-depth discovery call where we get to
              know each other and recommend the best course of action.
            </Motto>
            <nav>
              <ul>
                <li>
                  <Icon iconId="email" />
                  <div>email@liame.com</div>
                </li>
                <li>
                  <Icon iconId="address" />
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </li>
                <li>
                  <Icon iconId="phone" />
                  <div> +48 303-030-111</div>
                </li>
              </ul>
            </nav>
          </StyledColumnWrapper>
          <StyledForm>
            <StyledInput as="input" name="email" placeholder="Email" />
            <StyledInput
              as="textarea"
              name="message"
              placeholder="Message"
              defaultValue={"Hello!\nI have a job for you!\nCheck it out:\n"}
            />
            <Button
              text="Submit"
              event={() => {
                console.log("Submitted");
              }}
            />
          </StyledForm>
        </FlexWrapper>
      </Container>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  position: relative;
  min-height: 70vh;

  ${SectionTitle} {
    margin-top: 0;
  }
`;

const StyledColumnWrapper = styled.div`
  flex-basis: 40%;
  min-width: 300px;
  display: flex;
  flex-direction: column;

  li {
    background-color: #ffffff;
    border-radius: 6px;
    padding: 0 7px;
    font-size: 1.2em;
    margin: 1.2em;
    display: inline-flex;
    align-items: center;
    /* justify-content: flex-start; */
    /* max-width: 100%; */
    min-width: 180px;

    *:nth-child(2) {
      margin-left: 0.7em;
    }

    @media ${theme.media.tablet} {
      margin: 0.4em;
    }
  }
  svg {
    height: 1em;
    flex-shrink: 0;
  }
`;

const Motto = styled.p`
  text-align: center;
`;

const StyledForm = styled.form`
  /* margin-top: 15vh; */
  flex-basis: 40%;
  min-width: 300px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input<{ as?: string }>`
  width: 100%;
  margin-bottom: 20px;
  font-family: Manrope, sans-serif;
  color: ${theme.colors.font};

  ${(props) =>
    (props.as === "input" || props.as === "textarea") &&
    css`
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.7);
      font-size: 1.3em;
      outline: solid ${theme.colors.font} 1px;
      border-radius: 3px;
      border: none;
      text-shadow: 0 0 0.8px ${theme.colors.font};

      &::placeholder {
        text-shadow: none;
        color: #c2c2c2;
      }

      &:focus-visible {
        background-color: ${theme.colors.primaryBgOp};
        box-shadow: rgba(6, 24, 44, 0.1) 0px 0px 0px 2px, rgba(6, 24, 44, 0.25) 0px 4px 6px -1px,
          rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      }
    `}
  ${(props) =>
    props.as === "textarea" &&
    css`
      resize: none;
      height: 290px;
    `}
`;
