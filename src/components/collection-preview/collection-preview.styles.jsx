import styled from 'styled-components';

export const CollectionPreviewComponent = styled.div`
display: flex;
flex-direction: column;

@media screen and (max-width: 800px){
  align-items: center;
}
`;

export const Preview = styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width: 800px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px

}
`;


export const Title = styled.span`
font-size: flex;
justify-content: space-between;
display: inline-block;

@media screen and (max-width: 800px){
  font-size: flex;
}
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
  @media screen and (max-width: 800px){
    margin-top: 30px;
    margin-left: 60px;
  }
`;