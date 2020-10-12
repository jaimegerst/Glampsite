import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
       return (
            <ScrollView>
                 <Card 
                title= {'24/7 Hotline'}>
                <Text wrapperStyle= {{margin: 20}}>
                    Emergencies: 911
                </Text>
                <Text style= {{marginBottom: 10}}> 
                    Other Inquiries: 927-555-2287
                </Text>
                </Card>
                <Card
                    title= {'Contact Information'}>
                    <Text 
                    wrapperStyle= {{margin: 20}}>
                        6907 Modern Way
                    </Text>
                    <Text> 
                        Charlotte, NC 28217
                    </Text>
                    <Text style= {{marginBottom: 10}}>
                        U.S.A.
                    </Text>
                    <Text> 
                        Phone: 1-412-526-9465
                    </Text>
                    <Text> 
                        Email: glampsite@gmail.com
                    </Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;