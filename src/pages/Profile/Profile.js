import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Topo, Photo, Container, Title, Add, ButtonsCard, ButtonsText, ButtonView, Scroll, ButtonImg } from './style';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import UserPets from '../../components/Pets/UserPets'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import Feed from '../Feed/Feed';
import Login from '../Login/Login'




export default function Profile() {
    return (
        <View backgroundColor={'#9ca9e2'} style={{ flex: 1 }}>
            <ScrollView vertical={true} showsVerticalScrollIndicator={false} >
                <Topo >
                    <Photo source={require("../../assets/vibe.jpg")}></Photo>
                </Topo>

                <Container >
                    <Title >Meus pets</Title>

                    <Scroll horizontal={true} showsHorizontalScrollIndicator={false} style={{}}>
                        <UserPets cover={require('../../assets/pet.png')} onPress={() => { }}></UserPets>
                        <UserPets cover={require('../../assets/pet.png')} onPress={() => { }}></UserPets>
                        <UserPets cover={require('../../assets/pet.png')} onPress={() => { }}></UserPets>
                        <UserPets cover={require('../../assets/pet.png')} onPress={() => { }}></UserPets>
                    </Scroll>

                </Container>
                <ButtonView >
                    <ButtonsCard >
                        <ButtonImg source={require('../../assets/adoc.jpg')}></ButtonImg>
                        <ButtonsText>Adoção</ButtonsText>
                    </ButtonsCard>
                    <ButtonsCard>
                        <ButtonImg source={require('../../assets/add.jpg')}></ButtonImg>
                        <ButtonsText>Adicionar Pet</ButtonsText>
                    </ButtonsCard>
                </ButtonView>

                <ButtonView>
                    <ButtonsCard>
                        <ButtonImg source={require('../../assets/vet.jpg')}></ButtonImg>
                        <ButtonsText>Veterinários</ButtonsText>
                    </ButtonsCard>
                    <ButtonsCard>
                        <ButtonImg source={require('../../assets/abandono.jpg')}></ButtonImg>
                        <ButtonsText>Reportar Abandono</ButtonsText>
                    </ButtonsCard>
                </ButtonView>
            </ScrollView>
        </View>


    );
}

