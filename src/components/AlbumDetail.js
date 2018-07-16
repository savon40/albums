import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {

	//get attibutes from album object
	const { title, artist, thumbnail_image, image} = album;
	const { 
		thumbnailContainerStyle, 
		thumbnailStyle, 
		headerContentStyle, 
		headerTextStyle,
		imageStyle
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style = {thumbnailContainerStyle}>
					<Image 
						style = {thumbnailStyle} 
						source={{uri: thumbnail_image}}
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image 
					style = {imageStyle} 
					source={{uri: image}}
				/>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
}

export default AlbumDetail;