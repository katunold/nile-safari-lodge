import styled from 'styled-components'
import skyview from '../../../assets/images/skyview.jpg'

const Describe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .join__us,
    .know__us {
        padding: 40px 0;
        width: 100%;
        display: flex;
    }

    .know__us {
        background-color: #d5af6d;
    }

    .join__us .content,
    .know__us .content {
        width: 65%;
        margin: 0 auto;
    }

    .join__us .content {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }

    .join__us .content .text h2,
    .know__us .content .text h2 {
        margin-bottom: 10px;
        
    }

    .join__us .content .text h2 {
        color: #d5af6d;
    }

    .know__us .content .text h2,
    .know__us .content .text p {
        color: #fff;
    }

    .join__us .content .btn {
        background-color: #d5af6d;
        font-family: Caviar Dreams Bold;
        font-size: 18px;
        text-transform: uppercase;
        border: 1px solid #d5af6d;
        height: 55px;
        width: 175px;
        transition: all 0.3s ease 0s;
        color: #fff;
        border-radius: 7px;
        outline: none;
    }
      
    .join__us .content .btn:hover {
        background: transparent;
        color: #d5af6d;
        border: 1px solid #d5af6d;
    }
    
    // CSS FOR THE SMALL DESCRIPTION

    .small_descipt {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        text-align: center;
        padding: 70px 0;
        
        background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${skyview})
    }

    .small_descipt p {
        width: 48.5%;
        margin-bottom: 35px;
    }

    .logo {
        width: 170px;
        margin: 0;
        padding: 0;
    }

    @media (min-width: 320px) and (max-width: 767px) {
        .join__us .content {
            width: 75%;
            text-align: center;
            flex-direction: column;
        }

        .join__us .content .text h2 {
            margin-bottom: 25px;
        }

        .join__us .content .btn {
            margin-top: 35px;
        }

        .small_descipt p {
            width: 85%;
            font-size: 15px;
            margin-bottom: 35px;
        }

        .logo {
            width: 150px;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        .small_descipt p {
            width: 85%;
        }

        .logo {
            width: 150px;
        }
    }
`

export default Describe;
