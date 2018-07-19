import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// in this class we fetch data 
// from the API to display albums

//in here we will track the state of album[] 
	// if the state is empty, we do nothing
	// state will change when request is complete

class AlbumList extends Component {

	//empty state
	state = { albums: [] };

	componentWillMount() {
		//this action kicks off right when this component loads
		//we will use it to fetch data from API

		//returns a promise (not asynchronous) - 
		//promise returns an event that tells us it is complete
		axios.get('https:////rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({albums: response.data}));
	}

	renderAlbums() {
		// can call map on array
		// pass album to AlbumDetail as prop
		return this.state.albums.map(
			album => <AlbumDetail key={album.title} album={album}/>
		);
	}

	// class needs this render thing
	render() {
		console.log(this.state);
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
} //class doesnt need semi-colon

export default AlbumList;