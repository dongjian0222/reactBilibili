import React from 'react';
import {
	StyleSheet,
	View,
	Button,
	Text,
	ScrollView,
	Image,
	Dimensions
} from 'react-native';
import {createDrawerNavigator, createAppContainer, SafeAreaView, createStackNavigator} from "react-navigation";
import Home from "./src/views/Home/Home";
import Channel from "./src/views/Channel/Channel";
import Dynamic from "./src/views/Dynamic/Dynamic";
import ShopVip from "./src/views/ShopVip/ShopVip";
import App from "../../../App";

const screen = Dimensions.get('window');

// const HomeStack = createStackNavigator({
// 	Home: Home,
// }, {
// 	defaultNavigationOptions: {
// 		header: null,
// 	},
// });
//
// const ChannelStack = createStackNavigator({
// 	Channel: Channel,
// },{
// 	defaultNavigationOptions: {
// 		header: null,
// 	},
// });
//
// const DynamicStack = createStackNavigator({
// 	Dynamic: Dynamic,
// }, {
// 	defaultNavigationOptions: {
// 		header: null,
// 	},
// });
//
// const ShopVipStack = createStackNavigator({
// 	ShopVip: ShopVip,
// }, {
// 	defaultNavigationOptions: {
// 		header: null,
// 	},
// });

const CustomDrawerContentComponent = (props) => (
	<ScrollView>
		<SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
			<View style={{width:200,height:100,backgroundColor:'red'}}></View>
		</SafeAreaView>
	</ScrollView>
);


//this.props.navigation.openDrawer();//打开抽屉
//this.props.navigation.closeDrawer();//关闭抽屉
export default createAppContainer(createDrawerNavigator({
	HeaderHome: {
		screen: App,
	},

}, {
	// order: ['AppInfo', 'Set', 'Main'],//routeNames数组，用于定义抽屉项目的顺序。
	//initialRouteName: 'HeaderHome',//初始路由的routeName。
	drawerLockMode: 'unlocked',//设置是否响应手势
	//'unlocked'   可以通过手势和代码 打开关闭抽屉
	//'locked-closed' 抽屉关闭状态  不能通过手势打开  只能通过代码实现
	//'locked-open'  抽屉打开状态  不能通过手势关闭  只能通过代码实现


	drawerWidth: screen * 0.8, //抽屉的宽度或返回的功能。
	drawerPosition: 'left', //选项是left或right。默认是left位置。
	//useNativeAnimations: false, //启用原生动画。默认是true。
	//drawerBackgroundColor: 'pink', //使用抽屉背景获取某种颜色。默认是white。

	//用于呈现抽屉内容的组件，例如导航项。收到navigation抽屉的道具。默认为DrawerItems
	//用于自定义
	//contentComponent: '',


	//配置抽屉内容  items相关
	contentOptions: {
		// items: [OtherScreen],//可以修改或覆盖路由数组  不知道干嘛用的
		// activeItemKey: 'AppInfo', //识别活动路线的关键  也不知道干嘛用的

		// activeTintColor: 'white', //活动标签的标签和图标颜色
		// activeBackgroundColor: 'blue', //活动标签的背景颜色
		// inactiveTintColor: 'black', //非活动标签的标签和图标颜色
		// inactiveBackgroundColor: 'red', //非活动标签的背景颜色

		// //按下项目时要调用的函数 不知道是否使用错误 一直没反应
		//github上面有答案 在自定义视图的时候 会有用
		// onItemPress(route) {
		//     console.log('onItemPress'+route);
		// },


		// itemsContainerStyle: '', //内容部分的样式对象
		// itemStyle: '', //单个项目的样式对象，可以包含图标和 / 或标签
		// labelStyle: '', //Text当标签是字符串时，样式对象在内容部分内覆盖样式
		// activeLabelStyle: '', //Text当标签是字符串（与之合并labelStyle）时，样式对象覆盖活动标签的样式
		// inactiveLabelStyle: '', //Text当标签是字符串（与之合并labelStyle）时，样式对象覆盖非活动标签的样式
		// iconContainerStyle: '', //样式对象以覆盖View图标容器样式。

		//用于呈现抽屉内容的组件，例如导航项。收到navigation抽屉的道具。默认为DrawerItems
		//用于自定义
		contentComponent: CustomDrawerContentComponent,

	}

}))

// export default createAppContainer(BottomTab);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'red',
		backgroundColor: 'pink',
		fontSize: 15,
	},
	btn: {
		backgroundColor: 'red',
		color: 'blue',
		width: 60,
		height: 44,
		marginTop: 115,
		marginLeft: 100
	},
	icon: {
		width: 22,
		height: 22
	}
})
