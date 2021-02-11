import React from 'react';
import { View, Text, VirtualizedList, SafeAreaView } from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import FeedPosts from '../../components/FeedPosts/Posts'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'

import { Container, Header, Body, User, Icon, Description, Bottom, Comment, Buttons, Content, PetPhoto, ContentDesc, PhotoDesc, Time } from '../../pages/Feed/style'




export default function Feed() {
    const Posts = [
        { id: '1', title: "Perdi minha cachorra", photoDesc: 'No bairro santa maria', postImg: (require('../../assets/abandono.jpg')) },
        { id: '2', title: "me", photoDesc: 'me' },
        { id: '3', title: "me", photoDesc: 'me' },
        { id: '4', title: "me", photoDesc: 'me' }


    ]
    console.log;


    return (
        <SafeAreaView >
            <Header>
                <TouchableOpacity>
                    <FontAwesome5 name='bell' size={40} style={{ marginLeft: 10 }}></FontAwesome5>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='add-circle' size={40} style={{ marginRight: 5 }}></Ionicons>
                </TouchableOpacity>
            </Header>
            <FlatList
                keyExtractor={props => props.id}
                data={Posts}
                renderItem={({ item }) => <FeedPosts title={`${item.title}`} photoDesc={`${item.photoDesc}`} postImg={`${item.postImg}`} ></FeedPosts>}
            >
            </FlatList>
        </SafeAreaView>
    );

}