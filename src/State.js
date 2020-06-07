import React from 'react'
import { SafeAreaView, View, Text, Button, TextInput, FlatList } from 'react-native'

import { MyInput, MyButton } from './components'

class State extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            entry: "",
            list: []
        }
    }

    changeText = (text) => {
        this.setState({ entry: text })
    }

    addToList = () => {
        let newList = [...this.state.list]
        newList.push({ myEntry: this.state.entry })
        this.setState({ list: newList })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>

                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.list}
                    renderItem={({ item }) => <Text>{item.myEntry}</Text>}
                />

                <View style={{ backgroundColor: '#eceff1', padding: 10, margin: 10 }}>
                    <TextInput
                        onChangeText={this.changeText}
                    />
                </View>

                <MyButton myTitle="Kaydet" myPress={this.addToList} />
            </SafeAreaView>
        )
    }

}

export { State }