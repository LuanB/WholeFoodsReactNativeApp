import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Card, CardItem, Right } from 'native-base'
import StartRating from 'react-native-star-rating'

class RecommendedCardItem extends Component {
	render() {
		return ( <CardItem>
			<View>
				<Image style={{
						height: 90,
						width: 60
					}} source={this.props.imageUri}></Image>
			</View>
			<Right style={{
					flex: 1,
					alignItems: 'flex-start',
					height: 90,
					paddingHorizontal: 20
				}}>
				<Text>{this.props.itemName}</Text>
				<Text style={{
						color: 'grey',
						fontSize: 11
					}}>{this.props.itemCreator}</Text>
				<Text style="style">{this.props.itemPrice}</Text>
				<Text>
					<Text style={{
							color: 'grey',
							fontWeight: '300',
							fontSize: 11
						}}>
						You Save: {}</Text>
						$ {
							this.props.savings
						}
					</Text>
					<StartRating disabled={true} maxStars={5} rating={this.props.rating} starSize={12} fullStarColor='orange' emptyStarColor='orange'></StartRating>

				</Right>
			</CardItem> );
	}
}

export default RecommendedCardItem;

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
} );
