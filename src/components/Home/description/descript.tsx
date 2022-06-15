import styled from 'styled-components'
import skyview from '../../../assets/images/skyview.jpg'

const Describe = styled.div`

    .know__us {
        padding: 40px 0;
        width: 100%;
        display: flex;
    }

    .know__us {
        background-color: #d5af6d;
    }

    .know__us .content {
        width: 65%;
        margin: 0 auto;
    }

    .know__us .content .text h2 {
        margin-bottom: 10px;
        
    }

    .know__us .content .text h2,
    .know__us .content .text p {
        color: #fff;
    }
    
    // CSS FOR THE SMALL DESCRIPTION

    .small_descipt {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        text-align: center;
        padding: 70px 0;
        background-position:center;
        background-size:cover;
        background-repeat:no-repeat;
        background-attachment:fixed;
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
