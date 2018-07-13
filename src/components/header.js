import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// make a component - return JSX component
const Header = () => {
	const {textStyle, viewStyle} = styles;
	return (
		<View style = {viewStyle}>
	        <Text style = {textStyle}>
	          Albums!
	        </Text>
	    </View>
    );
};

const styles = {
	textStyle: {
		fontSize: 20
	},
	viewStyle: {
		backgroundColor: '#F8F8F8'
	}
}

export default Header;