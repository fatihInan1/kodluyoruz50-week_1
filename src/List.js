import React from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'

import ListItem from './components/ListItem'

const mockData = [
    { id: 5123, todo: "Ev temizlenecek", isDone: true },
    { id: 3261, todo: "Çöpler atılacak", isDone: false },
    { id: 1232, todo: "Alışveriş yapılacak", isDone: true },
]

const List = props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={mockData}
                    renderItem={({ item }) => <ListItem myData={item} />}
                />

            </View>
        </SafeAreaView>
    )
}

export default List
