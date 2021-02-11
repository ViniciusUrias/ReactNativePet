import styled from 'styled-components';

export const Container = styled.ScrollView`
    background-color: #FFF;
    margin-bottom: 40px;
`;

export const Header = styled.View`
    height: 50px;
    background-color: #9ca9e2;
    flex-direction: row;
    padding: 7px;
    display: flex;
    

`;

export const Body = styled.View`
    height: 620px;
    background-color: #f2f2f2;
    margin: 20px;
    elevation: 10;
    border-radius: 20px;
`;

export const User = styled.View`
    height: 15%;
    flex-direction:row;
    align-items: center;
`;

export const Time = styled.Text`
    font-size: 15px;
    color: #d2d2d2;
    padding-top: 10px;
    margin-left: 10px;
`;

export const Icon = styled.Image`
    height: 70%;
    width: 70px;
    border-radius: 80px;
    margin-left: 2%;

`;

export const Description = styled.Text`
    color: #000;
    flex: 1;
    margin-left: 10px;
    font-family: 'Montserrat_400Regular'
`;

export const Content = styled.View`
    height: 270px;
    margin: 10px;
    
`;

export const ContentDesc = styled.ScrollView`
    top: 0%;
    height: 25%;
    margin: 10px;
    background-color: white
`;

export const PhotoDesc = styled.Text`
    font-size: 12px;
    color: black;
    flex: 1;
    font-family: 'Montserrat_400Regular';
    padding: 5px;

`;

export const PetPhoto = styled.Image`
    height: 100%;
    width: 100%;
`;

export const Bottom = styled.View`
    height: 10%;
    top: 0%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
    
`;

export const Comment = styled.TextInput`
    background-color: #9ca9e2;
    opacity: 0.8;
     width: 100%;
    margin-bottom: 15px;
    color: #222;
    font-size: 14px;
     border-radius: 17px;
     padding: 10px;
     height: 100%;
     position: absolute;
    
`;

export const Buttons = styled.TouchableOpacity``;