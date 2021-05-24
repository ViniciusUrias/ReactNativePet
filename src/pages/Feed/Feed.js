import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, RefreshControl, ScrollView, } from 'react-native';

import { FlatList, } from 'react-native-gesture-handler';
import FeedPosts from '../../components/FeedPosts/Posts'
import { Header } from '../../pages/Feed/style'
import FeedModal from '../../components/FeedModal/FeedModal'
import api from '../../services/api';



export default function FeedTest() {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        updatePosts();




    }, []);

    const [posts, setPosts] = useState({});

    const updatePosts = () => {
        setRefreshing(true);
        api.get('/posts')
            .then(setRefreshing(true))
            .then(response => setPosts(response.data))
            .then(JSON.stringify(posts))
            .finally(() => setRefreshing(false));
        return () => console.log(posts);
    }

    useEffect(() => {
        updatePosts();


    }, []);


    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <KeyboardAvoidingView >
                <Header>
                    <FeedModal></FeedModal>
                </Header>

                <FlatList
                    keyExtractor={props => props.id}
                    data={posts}
                    renderItem={({ item }) => <FeedPosts postTime={`${item.created_at}`} title={`${item.title}`} photoDesc={`${item.description}`} postImg={`${item.photo}`} ></FeedPosts>}
                >
                </FlatList>



            </KeyboardAvoidingView>
        </ScrollView>
    );
}


