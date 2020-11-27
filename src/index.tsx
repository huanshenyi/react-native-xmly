import React from 'react';
import { View, Text } from 'react-native';
import {test} from '@/utils/index';


class App extends React.Component {
    constructor(props:any){
        super(props);
        test();
    }
    render() {
        return (
            <View>
                <Text>app</Text>
            </View>
        );
    }
}

export default App;