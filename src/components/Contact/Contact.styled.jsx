import styled from '@emotion/styled';

export const ContactCount = styled.span`
  font-size: 16px;
  line-height: 1.2;
`;

export const ContactName = styled.span`
  margin-left: 10px;
  min-width: 150px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
`;

export const ContactNumber = styled.a`
  font-size: 16px;
  line-height: 1.2;
  color: #2f1aaa;
  text-decoration: underline;
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 2px 10px;
  font-size: 12px;
  line-height: 1.2;
  background: #f5f4fa;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;
  :hover,
  :focus {
    background-color: #2196f3;
    color: white;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;