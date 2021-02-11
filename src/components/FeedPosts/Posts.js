import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'

import { Container, Header, Body, User, Icon, Description, Bottom, Comment, Buttons, Content, PetPhoto, ContentDesc, PhotoDesc, Time } from '../../pages/Feed/style'

export default function FeedPosts(props) {
    return (
        <Container>

            <Body>
                <Time>15/12/2021 as 17:42pm</Time>
                <User>
                    <Icon source={require('../../assets/vibe.jpg')}></Icon>
                    <Description>{props.title}</Description>
                </User>

                <Content>
                    <PetPhoto source={props.postImg}></PetPhoto>
                </Content>

                <ContentDesc >
                    <PhotoDesc> {props.photoDesc}</PhotoDesc>
                </ContentDesc>

                <Bottom>
                    <Comment title="Comment" placeholder="Escrever Comentário"></Comment>
                </Bottom>
                <Buttons></Buttons>
            </Body>
        </Container>
    );
}