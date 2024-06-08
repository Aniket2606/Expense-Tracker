import styled from "styled-components";


export const MainLayout = styled.div`
    height: 100%;
    display: flex;
    gap: .5rem;

    @media (max-width: 1100px) {
        display: block
        
    }
`;

export const InnerLayout = styled.div`
    padding: 1rem 1.5rem;
    width: 100%;  
`;

