import React from "react";
import styled from "styled-components";

function Join() {
  return (
    <Body>
      <Content>
        <InContent>
          <Title>회원가입</Title>

          <Group>
            <InputTitle>아이디</InputTitle>
            <Input type="text" placeholder="   아이디 제한" />
            <ErrorMessage>이거 다른사람이 쓰고 있어</ErrorMessage>
          </Group>
          <BigGroup>
            <SmallGroup>
              <InputTitle>비밀번호</InputTitle>
              <Input type="password" placeholder="   영,숫자 8~16이내" />
              <ErrorMessage></ErrorMessage>
            </SmallGroup>
            <SmallGroup>
              <InputTitle>비밀번호 확인</InputTitle>
              <Input type="password" placeholder="   한번 더 입력해주세요" />
              <ErrorMessage></ErrorMessage>
            </SmallGroup>
          </BigGroup>
          <Group>
            <InputTitle>이메일</InputTitle>
            <Input type="text" placeholder="   asdf@naver.com" />
            <ErrorMessage>이메일이 이상해용</ErrorMessage>
          </Group>
          <Submit>회원가입</Submit>
        </InContent>
      </Content>
      <InContent2>
        <IdCheck>중복확인</IdCheck>
      </InContent2>
    </Body>
  );
}

export default Join;

const Body = styled.div`
  height: 847px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 400px;
  height: 580px;

  display: inline-block;
`;

const InContent = styled.div`
  width: 381px;

  height: 510px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InContent2 = styled.div`
  height: 435px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Group = styled.div`
  /* margin: 15px 0 25px 0; */
  width: 390px;
  height: 95px;
`;

const BigGroup = styled.div``;

const SmallGroup = styled.div`
  width: 390px;
  height: 100px;
`;

const Title = styled.p`
  margin: 0 0 5px 140px;

  font-size: 25px;
  font-weight: bold;
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

const IdCheck = styled.button`
  background-color: #57cadd;
  color: white;
  margin: 5px;
  padding: 10px 15px;

  border: none;
  border-radius: 9px;

  display: inline-block;
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
