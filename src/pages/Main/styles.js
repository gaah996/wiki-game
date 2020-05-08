import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
    161deg,
    rgba(31, 29, 64, 1) 0%,
    rgba(21, 42, 46, 1) 100%
  );
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputBox = styled.div`
  margin: 20px 0;
  background: white;
  box-shadow: 0 2px 4px rgba(50, 50, 50, 0.5);
  border-radius: 4px;
  padding: 10px 20px;
  position: relative;
  min-width: 500px;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  font-size: 16px;
  font-weight: 300;
  width: calc(100% - 70px);
`;

export const SearchButton = styled.button`
  background: #1b2239;
  border: none;
  border-radius: 4px;
  margin: 0;
  padding: 7px 15px;
  color: white;
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 16px;
  font-weight: 300;
`;

export const ListContainer = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(50, 50, 50, 0.5);
  padding: 20px;
  min-width: 500px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 400;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 28px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ItemLabel = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 300;
  font-size: 16px;
  & > strong {
    font-weight: 400;
  }
`;

export const Link = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
`;

export const ListEmpty = styled.h2`
  font-weight: 300;
  font-size: 22px;
  text-align: center;
  padding: 0;
  margin: 0;
  color: rgba(0, 0, 0, 0.2);
`;
