import styled from "styled-components";


const InvoiceListContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const InvoiceItem = styled.div`
  background-color: #f9f9f9;
  padding: 15px 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e9e9e9;
  }

  h3 {
    margin: 0 0 10px 0;
    color: #333;
  }

  p {
    margin: 0;
    color: #666;
  }
`;

const CreateButton = styled.button`
  background-color: #4CAF50; /* Green */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export {
    InvoiceListContainer,
    InvoiceItem,
    CreateButton,
    Header
}