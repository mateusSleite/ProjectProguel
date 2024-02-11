import styled from 'styled-components';

export const StyledModalContent = styled.div`
    background-color: #000000;
    border: 1px solid #f0444a;
    width: 1000px;
    height: 900px; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1400px) {
        width: 100%;
        height: 800px;
    }
    
    @media (max-width: 992px) {
        width: 100%;
        height: 600px;
    }

    @media (max-width: 768px) {
        width: 95%;
        height: 400px;
    }
`;
