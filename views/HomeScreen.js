import React, { useState, useEffect } from "react";
import {
	Text,
	View,
	FlatList,
	StyleSheet,
	TouchableOpacity
} from "react-native";
import ImageItem from "../components/ImageItem";
import { connect } from "react-redux";
import { 
	setImageList, 
	setCurrentImage,
	getImageList
} from "../redux/actions"; 
 
const HomeScreen = ({ navigation, ...props }) => {
	const [error, setError] = useState([]);

	useEffect(( ) => {
		props.getImageList()
	}, []);

	function navigateImage(image) {
		props.setCurrentImage(image);

		navigation.navigate("ImageScreen", {
			pageTitle: image.username,
		})
	}

	return (
		<View>

			{error.length ? (
				<Text>Что то пошло не так: {error}</Text>
			) : null}

			<FlatList 
				data={props.imageList}
				renderItem={({ item }) => (
					<ImageItem
						style={styles.imageItem}
						image={item.preview}
						username={item.username}
						onPress={() => navigateImage(item)}
					/>
				)}
				keyExtractor={item => item.id}
			/>

		</View>
	)
}

const styles = StyleSheet.create({
	imageItem: {
		marginBottom: 20,
	},

	testItem: {
		height: 100,
		zIndex: 1,
	}
});

const mapStateToProps = state => {
	return {
		imageList: state.image.imageList,
	}
}

export default connect(
	mapStateToProps, 
	{ 
		getImageList, 
		setImageList, 
		setCurrentImage,
	}
)(HomeScreen);
