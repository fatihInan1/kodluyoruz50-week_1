import React from 'react'
import { SafeAreaView, View, Text, Button, TextInput, FlatList } from 'react-native'

import { MyInput, MyButton } from './components'

class State_Class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            entry: "",
            list: [],
            user: {
                name: "John",
                surname: "Doe",
                age: 30
            }
        }
    }

    // SINGLE STATE
    changeText = (text) => {
        this.setState({ entry: text })
    }

    // ARRAY STATE
    addToList = () => {
        let newList = [...this.state.list]
        newList.push({ myEntry: this.state.entry })
        this.setState({ list: newList })
    }

    // OBJECT STATE
    updateObject = () => {
        let newUser = { ...this.state.user }
        newUser.age = 35
        this.setState({ user: newUser })
    }

    // HOOKS: useEffect(() => { ... }, [])
    componentDidMount() {
        console.log("MOUNT");
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>

                <Text style={{fontSize: 40}}>CLASS</Text>
                
                <View style={{ flex: 1, padding: 10 }}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.list}
                        renderItem={({ item }) => <Text>{item.myEntry}</Text>}
                    />

                    <MyInput textChange={this.changeText} />

                    <MyButton myTitle="Listeyi Güncelle" myPress={this.addToList} />

                </View>
                <View style={{ flex: 1, padding: 10 }}>
                    <Text>İsim: {this.state.user.name}</Text>
                    <Text>Soyisim: {this.state.user.surname}</Text>
                    <Text>Yaş: {this.state.user.age}</Text>

                    <MyButton myTitle="Kişiyi Güncelle" myPress={this.updateObject} />
                </View>
            </SafeAreaView>
        )
    }

}

export { State_Class }