import styled from 'styled-components';

export const CollectionPreviewComponent = styled.div`
display: flex;
flex-direction: column;
`;

export const Preview = styled.div`
display: flex;
justify-content: space-between;
`;


export const Title = styled.span`
font-size: flex;
justify-content: space-between;
display: inline-block;
`;

export const Expand = styled.span`
float: right;
cursor: pointer; 
margin-top: 50px;
font-size: 22px;

&:hover{
    color: rgb(83, 83, 83);
    opacity: 0.4;
  }
`;