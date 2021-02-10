import styled from 'styled-components/native';
import { React } from 'react';

export const Main = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #9ca9e2;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 300px;
    height: 300px;
    top: 50px;
    border-radius: 20px;
`;

export const Container = styled.View`
    flex: 1;
    width: 90%;
    align-items: center;
    justify-content: center;
`;


export const Input = styled.TextInput`
     background-color: #fFF;
     width: 90%;
    margin-bottom: 15px;
    color: #222;
    font-size: 14px;
     border-radius: 17px;
     padding: 10px;
`;

export const BtnLogin = styled.TouchableOpacity`
    width: 90%;
    background-color: white;
    align-items: center;
    height: 45px;
    justify-content: center;
    border-radius: 17px;
`;

export const BtnRegister = styled.TouchableOpacity`
    width: 90%;
    align-items: center;
    font-weight: bold;
    height: 45px;
    justify-content: center;
    margin-top: 10px;
`;

export const LoginText = styled.Text`
    color: black;
    align-items: center;
    font-size: 20px;
`;

export const RegisterText = styled.Text`
    color: black;
    align-items: center;
    font-size: 15px;
`;