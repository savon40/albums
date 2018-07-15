import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// in this class we fetch data 
// from the API to display albums

class AlbumList extends Component {

	componentWillMount() {
		console.log('componentWillMount');	
	}

	// class needs this render thing
	render() {
		return (
			<View>
				<Text>Album List</Text>
			</View>
		);
	}
} //class doesnt need semi-colon

export default AlbumList;