import React from 'react'
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

const Newsitem = ({news}) =>{
    return (
        <>
            <List>
                    <ListItem thumbnail>
                    <Left>
                        <Thumbnail square source={{ uri: news.urlToImage }} />
                    </Left>
                    <Body>
                        <Text numberOfLines={1}>{news.title}</Text>
                        <Text note numberOfLines={2}>{news.description}</Text>
                    </Body>
                    <Right>
                        <Button transparent>
                        <Text>View</Text>
                        </Button>
                    </Right>
                    </ListItem>
                </List>
        </>
    )
}

export default Newsitem
