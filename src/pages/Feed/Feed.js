import React from 'react';
import { View, Text, VirtualizedList, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import FeedPosts from '../../components/FeedPosts/Posts'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'

import { Header } from '../../pages/Feed/style'
import FeedModal from '../../components/FeedModal/FeedModal'






export default function Feed() {
    const Posts = [
        { id: '1', title: "Perdi minha cachorra", photoDesc: 'No bairro santa maria', postImg: (require('../../assets/abandono.jpg')) },
        { id: '2', title: "me", photoDesc: 'me' },
    ]

    return (
        <KeyboardAvoidingView >

            <Header>
                <FeedModal></FeedModal>
            </Header>
            <FlatList
                keyExtractor={props => props.id}
                data={Posts}
                renderItem={({ item }) => <FeedPosts title={`${item.title}`} photoDesc={`${item.photoDesc}`} postImg={`${item.postImg}`} ></FeedPosts>}
            >
            </FlatList>
        </KeyboardAvoidingView>
    );

}