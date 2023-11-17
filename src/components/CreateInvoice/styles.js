import styled from "styled-components";

const colors = {
    primary: '#4a4e69',
    secondary: '#9a8c98',
    background: '#f2e9e4',
    light: '#c9ada7',
    dark: '#22223b',
};

const InvoiceContainer = styled.div`
  background: ${colors.background};
  color: ${colors.dark};
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${colors.primary};
`;

const FieldSet = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: ${colors.primary};
  font-weight: 600;
`;

const Input = styled.input`
  width: 98%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${colors.light};
  border-radius: 4px;
  font-size: 0.9rem;
`;

const TextArea = styled.textarea`
  width: 98%;
  padding: 10px;
  border: 1px solid ${colors.light};
  border-radius: 4px;
  resize: vertical;
  font-size: 0.9rem;
  height: 80px;
`;

const LineItemsContainer = styled.div`
  margin-top: 20px;
`;

const LineItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const LineInput = styled(Input)`
  flex: 1;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    background-color: ${colors.dark};
  }
`;

const Total = styled.div`
  font-size: 1.2rem;
  color: ${colors.dark};
  font-weight: 600;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export {
    InvoiceContainer,
    Header,
    Title,
    FieldSet,
    Label,
    Input,
    TextArea,
    LineItemsContainer,
    LineItem,
    LineInput,
    Button,
    Total,
    ErrorMessage,
    Footer
}