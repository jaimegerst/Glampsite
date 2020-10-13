import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        packages: state.packages 
    };
};

function Mission() {
    return (
        <Card title="Our Mission">
            <Text>
                Glampsite is an industry-leading glamorous camping website. We strive to offer glampsites across the nation to our adventure-seeking family. Our staff prepares the sites for your visit and offers a 24/7 service line shall you need it. We promote safe and modern campsites to offer an alternative to your typical tent weekend. You can expect a comfortable bed, kitchenette, restroom, and a gorgeous view. Why camp when you can glamp?
            </Text>
        </Card>
    );
}

class About extends Component {

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const renderPackages = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        };

        if (this.props.packages.isLoading) {
            return (
                <ScrollView>
                    <Mission />
                    <Card
                        title='Packages'>
                        <Loading />
                    </Card>
                </ScrollView>
            );
        }
        if (this.props.packages.errMess) {
            return (
                <ScrollView>
                    <Mission />
                    <Card
                        title='Packages'>
                        <Text>{this.props.packages.errMess}</Text>
                    </Card>
                </ScrollView>
            );
        }
        return (
            <ScrollView>
                <Mission />
                <Card title="Packages">
                    <FlatList 
                        data={this.props.packages.packages}
                        renderItem={renderPackages}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(About);
