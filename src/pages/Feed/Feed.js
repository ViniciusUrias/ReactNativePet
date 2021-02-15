import React, { useEffect } from 'react';
import { KeyboardAvoidingView, Button } from 'react-native';
import { FlatList, } from 'react-native-gesture-handler';
import FeedPosts from '../../components/FeedPosts/Posts'
import { Header } from '../../pages/Feed/style'
import FeedModal from '../../components/FeedModal/FeedModal'
import api from '../../services/api';
import { useState } from 'react';

export default function FeedTest() {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        const userPosts =
            api.get('/posts')
                .then(response => setPosts(response.data))
                .then(JSON.stringify(posts))

        return () => handlePosts(userPosts);

    }, []);

    function handlePosts({ posts }) {
        const { title, description, photo } = posts;

        setPosts({ title, description, photo });
    }
    return (
        <KeyboardAvoidingView >
            <Header>
                <FeedModal></FeedModal>
            </Header>
            <FlatList
                keyExtractor={props => props.id}
                data={posts}
                renderItem={({ item }) => <FeedPosts title={`${item.title}`} photoDesc={`${item.description}`} postImg={`${item.photo}`} ></FeedPosts>}
            >
            </FlatList>
        </KeyboardAvoidingView>
    );
}


