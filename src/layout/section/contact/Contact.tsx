import { StyledSectionTitle } from "../../../components/title/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { StyledSectionTitleBG } from "../../../components/title/SectionTitleBG";
import { Button } from "../../../components/button/Button";
import { FC } from "react";
import { MenuContact } from "./menu/MenuContact";
import { S } from "./Contact_Styles";

export const Contact: FC = () => {
  return (
    <S.Contact>
      <Container>
        <StyledSectionTitleBG>Contact me</StyledSectionTitleBG>
        <FlexWrapper
          align="flex-start"
          justify="center"
          gap="50px"
          wrap="wrap"
          position="relative"
          margin="15vh 0 0 0"
        >
          <S.ColumnWrapper>
            <StyledSectionTitle>Contact me</StyledSectionTitle>
            <S.Motto>
              I start every new client interaction with an in-depth discovery call where we get to
              know each other and recommend the best course of action.
            </S.Motto>
            <MenuContact />
          </S.ColumnWrapper>
          <S.Form>
            <S.Input as="input" name="email" placeholder="Email" />
            <S.Input
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
          </S.Form>
        </FlexWrapper>
      </Container>
    </S.Contact>
  );
};
