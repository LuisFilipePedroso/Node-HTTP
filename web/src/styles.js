import styled from 'styled-components';

export const Container = styled.div`
  width: 988px;
  height: 100%;
  margin: 10px auto;

  > p {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  button {
    width: 300px;
    height: 30px;
    border-radius: 4px;
    background-color: #44c344;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin-top: 15px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
    
  > div {
    display: flex;
    flex-direction: column;  
    width: 45%;
  }

  label {
    color: #f3f3f3;
    font-size: 16px;
    font-weight: 600;
  }

  input {
    width: 100%;
    height: 30px;
    border-radius: 4px;
    border: 1px solid #eee;
    margin: 10px 0;
    font-size: 16px;
    padding: 0 16px;
    font-weight: 600;
    color: #747474;
  }
`

export const UserList = styled.ul`
  li {
    margin-top: 50px;
    background: #fff;
    border-radius: 4px;
    padding: 15px;  

    > p {
      font-size: 16px;
      font-weight: 600;
      color: #747474;
      line-height: 2;  
    }
  }
`