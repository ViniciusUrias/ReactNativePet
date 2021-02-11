import styled from 'styled-components/native';


export const Topo = styled.View`
    background-color: #9891ee;
    height: 15%;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    
`;



export const Photo = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 20px;
    top: 60%;
    
`;

export const Container = styled.View`
    align-items: flex-start;
    padding: 2px;
    flex: 1;
   

`;

export const Scroll = styled.ScrollView`
    padding: 2px;
    
   
    
 
    
`;

export const Title = styled.Text`
    color: #FFF;
    margin-top: 60px;
    font-family: 'Montserrat_700Bold';
    margin-left: 20px;
    font-size: 14px;


`;

export const Add = styled.TouchableOpacity`
    color: black;
    align-self: center;
    justify-content: flex-start;    
`;

export const ButtonView = styled.View`
    flex-direction: row;
    width: 100%;
    height: 150px;
    justify-content: center;
    align-items: center;
    
        

`;

export const ButtonsCard = styled.TouchableOpacity`
    width: 33%;
    height: 100px;
    background-color:  #9891ee ;
    margin: 30px;
    border-radius: 20px;
    justify-content: flex-end;
    align-items: center;
    elevation: 7;
    

`;

export const ButtonsText = styled.Text`
    width: 100%;
    text-align: center;
    font-family: 'Montserrat_400Regular';
    font-size: 10px;

    
`;

export const ButtonImg = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`;

