import React, { useState } from "react";
import { 
	View,
	Image,
	Text,
	StyleSheet
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";

const ImageScreen = (props) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	return (
		<View>
			{loading ? (
				<View style={styles.loading}>
					<Text style={styles.loadingText}>Загрузка, подождите...</Text>
				</View>
			) : error.length ? (
				<Text>Произошла ошибка! {error}</Text>
			) : null}

			<Image
				onError={error => setError(error)}

				onLoadStart={() => setLoading(true)}
				onLoadEnd={() => setLoading(false)}

				style={loading ? null : styles.image}
				resizeMode="contain"
				source={{
					uri: props.image.fullView
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		height: "100%"
	},

	loading: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},

	loadingText: {
		fontSize: 24,
		fontStyle: "italic"
	}
})

const mapStateToProps = state => {
	return {
		image: state.image.currentImage
	}
}

export default connect(mapStateToProps, {})(ImageScreen);