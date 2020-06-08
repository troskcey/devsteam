import React, { useState } from "react";
import {
	View,
	Image,
	Text,
	StyleSheet,
	TouchableOpacity
} from "react-native";

const ImageItem = (props) => {
	return (
		<View style={styles.container}>

			<TouchableOpacity onPress={props.onPress}>
				<Image
					style={styles.image}
					source={{
			        	uri: props.image
			        }}
				/>
			</TouchableOpacity>

			<Text style={styles.author}>
				user:{" "}
				<Text style={styles.username}>{props.username}</Text>
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		display: "flex",
	},

	image: {
		width: "100%",
		height: 200,
		backgroundColor: "dimgray",
	},

	author: {
		fontSize: 24,
		padding: 15,
	},

	username: {
		fontWeight: "700",
	}
})

export default ImageItem;