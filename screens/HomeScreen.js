import React, {
	Component
} from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Platform,
	StatusBar,
	Image,
	rating
} from 'react-native'
import {
	Container,
	Content,
	Header,
	Left,
	Right,
	Icon,
	Item,
	Input,
	Card,
	CardItem,
	Button
} from 'native-base'

import FAIcon from 'react-native-vector-icons/FontAwesome'

import Swiper from 'react-native-swiper'
import RecommendedCardItem from '../components/RecommendedCardItem'

class HomeScreen extends Component {
	render() {
		return ( <Container>
			<Header style={[
					{
						backgroundColor: '#3a455c',
						height: 90,
						borderBottomColor: '#757575'
					},
					styles.androidHeader
				]}>
				<Left style={{
						flexDirection: 'row'
					}}>
					<Icon onPress={() => this.props.navigation.navigate( 'DrawerOpen' )} name='md-menu' style={{
							color: 'white',
							marginRight: 15
						}}></Icon>

					<FAIcon name='pagelines' style={{
							fontSize: 32,
							color: 'white'
						}}></FAIcon>

				</Left>
				<Right>
					<Icon name='md-cart' style={{
							color: 'white'
						}}></Icon>
				</Right>

			</Header>

			<View style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: 90,
					height: 70,
					backgroundColor: '#3a455c',
					flexDirection: 'row',
					alignItems: 'center',
					paddingHorizontal: 5
				}}>
				<TouchableOpacity>
					<View style={{

							width: 100,
							backgroundColor: '#e7e7eb',
							height: 50,
							borderRadius: 4,
							padding: 10
						}}>
						<Text style={{
								fontSize: 12
							}}>Shop by</Text>
						<Text style={{
								fontWeight: 'bold'
							}}>Category</Text>

					</View>
				</TouchableOpacity>
				<View style={{
						flex: 1,
						height: '100%',
						marginLeft: 5,
						justifyContent: 'center'
					}}>
					<Item style={{
							backgroundColor: 'white',
							paddingHorizontal: 10,
							borderRadius: 4
						}}>
						<Icon name='search' style={{
								fontSize: 20,
								paddingTop: 5
							}}>
							<Input placeholder="Search"></Input>
						</Icon>
					</Item>
				</View>

			</View>

			<Content style={{
					backgroundColor: '#d5d5d6',
					marginTop: 70
				}}>
				<View style={{
						height: 50,
						backgroundColor: 'white',
						flexDirection: 'row',
						paddingHorizontal: 5,
						alignItems: 'center',
						justifyContent: 'space-between'
					}}>
					<Text>Hello, Varun Nath</Text>
					<View style={{
							flexDirection: 'row'
						}}>
						<Text style={{
								paddingRight: 10
							}}>Your Account</Text>
						<Icon name="arrow-forward" style={{
								fontSize: 18

							}}></Icon>
					</View>
				</View>
				<Swiper autoplay={true} style={{
						height: 100,
						backgroundColor: '#87af87',
						opacity: 90
					}}>
					<View style={{
							flex: 1
					
						}}>
						<Image style={{
								flex: 1,
								height: null,
								width: null,
								resizeMode: 'contain'
							}} source={require( '../assets/sw1.jpeg' )}></Image>
					</View>
					<View style={{
							flex: 1
						}}>
						<Image style={{
								flex: 1,
								height: null,
								width: null,
								resizeMode: 'contain'
							}} source={require( '../assets/sw2.jpeg' )}></Image>
					</View>
					<View style={{
							flex: 1
						}}>
						<Image style={{
								flex: 1,
								height: null,
								width: null,
								resizeMode: 'contain'
							}} source={require( '../assets/sw3.jpeg' )}></Image>
					</View>

				</Swiper>
				<Card>
					<CardItem header="header">
						<Text>Your Recommendations</Text>

					</CardItem>

					<RecommendedCardItem itemName="Pocket City Farms" itemCreator="Fresh Organic Carrots" itemPrice="$10/kg" savings="1.5" imageUri={require( "../assets/carrots.jpg" )} rating={5}></RecommendedCardItem>

					<RecommendedCardItem itemName="Mrs Lee Ready Meals" itemCreator="Lean grilled Chicken with pomegranate " itemPrice="$6.95" savings="2.5" imageUri={require( "../assets/MrsLeeReadyLeanMeals.jpg" )} rating={3}></RecommendedCardItem>
					<RecommendedCardItem itemName="Elizabeth Farm" itemCreator="Groundnuts" itemPrice="$19.95/kg" savings="2.5" imageUri={require( "../assets/peanuts.jpg" )} rating={4}></RecommendedCardItem>

				</Card>
			</Content>
		</Container> );
	}
}

export default HomeScreen;

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	androidHeader: {
		...Platform.select( {
			android: {
				paddingTop: StatusBar.currentHeight
			}
		} )
	}
} );
