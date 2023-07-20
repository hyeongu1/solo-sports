import styled from "styled-components";

const HeaderContainer = styled.header`
  width:100%;
  height:5rem;
  background-color: green;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>장애인 체육시설 현황</Title>
    </HeaderContainer>
  );
}
