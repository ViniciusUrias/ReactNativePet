import React from 'react';
import { View } from 'react-native';
import { Main, Card, PetImg, Container, Input, BtnLogin, LoginText, BtnRegister, RegisterText, Logo } from './Style'

export default function Login({ navigation }) {
    return (
        <Main>
            <View>
                <Logo source={require('../../assets/int.jpg')}></Logo>
            </View>

            <Container>
                <Input placeholder="Email" autoCorrect={false}>
                </Input>
                <Input placeholder="Senha" autoCorrect={false}></Input>
                <BtnLogin onPress={() => navigation.navigate('Home')}>
                    <LoginText>Entrar</LoginText>
                </BtnLogin>
                <BtnRegister>
                    <RegisterText>Criar conta gratuita</RegisterText>
                </BtnRegister>
            </Container>

        </Main>


    );
};


