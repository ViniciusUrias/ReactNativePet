import React from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Body, User, Icon, Description, Bottom, Comment, Buttons, Content, PetPhoto, ContentDesc, PhotoDesc, Time } from './style'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'



export default function Feed() {
    return (
        <Container>
            <Header>
                <TouchableOpacity>
                    <FontAwesome5 name='bell' size={40} style={{ marginLeft: 10 }}></FontAwesome5>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='add-circle' size={40} style={{ marginRight: 5 }}></Ionicons>
                </TouchableOpacity>
            </Header>
            <Body>

                <Time>15/12/2021 as 17:42pm</Time>
                <User>
                    <Icon source={require('../../assets/vibe.jpg')}></Icon>
                    <Description>Procuro minha gata chamada mel ela desapareceu no cu de quem ta lendo</Description>
                </User>

                <Content>
                    <PetPhoto source={require('../../assets/pet.png')}></PetPhoto>
                </Content>

                <ContentDesc>
                    <PhotoDesc>Descrição</PhotoDesc>
                </ContentDesc>

                <Bottom>
                    <Comment title="Buscar" placeholder="Escrever Comentário"></Comment>
                </Bottom>
                <Buttons></Buttons>
            </Body>


        </Container>
    );
}