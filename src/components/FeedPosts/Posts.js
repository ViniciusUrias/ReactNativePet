import React from 'react';
import { Container, Header, Body, User, Icon, Description, Bottom, Comment, Buttons, Content, PetPhoto, ContentDesc, PhotoDesc, Time } from '../../pages/Feed/style'

export default function FeedPosts(props) {
    return (
        <Container>

            <Body>
                <Time>{props.created_at}</Time>
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