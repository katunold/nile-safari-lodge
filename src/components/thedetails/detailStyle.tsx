import styled from 'styled-components';


const Details = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  .contain {
    display: flex;
    width: 70%;
    justify-content: space-between;
    padding: 80px 0;
  }

  .contain .overview {
    border-left: 1px solid #D5AF6D;
    width: 45%;
    padding: 45px;
    margin-top: 70px;
  }

  .contain .overview div {
    display: flex;
    flex-direction: column;
  }

  .description {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .description div span, h4 {
    display: block;
    padding: 25px 0;
    font-family: Caviar Dreams Bold;
  }

  .description div span {
    color: #D5AF6D;
  }

  hr {
    border: 1px solid #d5af6d;
    margin: 30px 0;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    
    .contain {
      width: 85%;
      flex-direction: column;
    }
  
    .contain .overview {
      border-left: 0;
      width: 100%;
      padding: 45px 20px;
    }
  
    .contain .overview div {
      display: flex;
      flex-direction: column;
    }
  
    .description {
      width: 100%;
    }
  }
`

export default Details;