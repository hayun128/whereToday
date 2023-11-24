import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Body>
      <Content>
        <TitleGroup>
          <Title>로그인</Title>
          <ErrorMessage>비밀번호 혹은 이메일이 틀렸습니다</ErrorMessage>
        </TitleGroup>
        <InContent>
          <Group>
            <InputTitle>이메일</InputTitle>
            <Input type="text" placeholder="   asdf@naver.com" />
            <ErrorMessage></ErrorMessage>
          </Group>

          <Group>
            <InputTitle>비밀번호</InputTitle>
            <Input type="password" />
            <ErrorMessage></ErrorMessage>
          </Group>
          <Submit>회원가입</Submit>
        </InContent>
      </Content>
    </Body>
  );
}

export default Login;

const Body = styled.div`
  height: 847px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 492px;
  height: 542px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 20px;
  border: 1px solid #addfe0;
`;

const InContent = styled.div`
  height: 310px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TitleGroup = styled.div`
  text-align: center;

  height: 65px;
`;

const Title = styled.p`
  margin: 0 0 5px 0;

  font-size: 31px;
  font-weight: bold;
`;

const Group = styled.div`
  /* margin: 15px 0 25px 0; */
  width: 390px;
  height: 95px;
`;

const InputTitle = styled.div`
  margin: 0 0 5px 0;

  font-weight: bold;
`;

const Input = styled.input`
  width: 381px;
  height: 46px;
  border: 1.5px solid #d9d9d9;
  border-radius: 5px;

  & ::placeholder {
    color: #d9d9d9;
    opacity: 0.9;
  }
  &::-moz-placeholder {
    opacity: 0.1; //투명도 조절 왜 안되지....
  }
`;

const ErrorMessage = styled.div`
  color: #ff0000;

  font-size: small;
  font-weight: bold;
`;

const Submit = styled.button`
  width: 385px;
  height: 46px;

  margin: 10px 0 0 0;

  border-radius: 8px;
  border: none;

  background-color: #57cadd;
  color: white;
`;
