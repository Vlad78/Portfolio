import React from "react";
import styled from "styled-components";
import SectionTitle from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Contact = () => {
  return (
    <StyledContact>
      <FlexWrapper align="center" justify="center" gap="40px" wrap="wrap">
        <StyledColumn1>
          <SectionTitle>Contact me</SectionTitle>
          <span>Motto</span>
          <div>
            <img src="" alt="email" />
            <span>email</span>
            <img src="" alt="address" />
            <span>address</span>
            <img src="" alt="phone" />
            <span>phone</span>
          </div>
        </StyledColumn1>
        <StyledForm>
          <StyledInput />
          <StyledInput as={"textarea"} />
          <StyledInput as={"button"}>Submit</StyledInput>
        </StyledForm>
      </FlexWrapper>
    </StyledContact>
  );
};

export default Contact;

const StyledContact = styled.section`
  min-height: 80vh;
`;

const StyledColumn1 = styled.div`
  flex-basis: 40%;
  min-width: 300px;
`;

const StyledForm = styled.form`
  flex-basis: 40%;
  min-width: 300px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input<{ as?: string }>`
  width: ${(props) => (props.as === "button" ? "150px" : "")};
  height: ${(props) => (props.as === "button" ? "30px" : "")};
`;
