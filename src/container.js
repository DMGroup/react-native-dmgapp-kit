'use strict';import React, { Component } from 'react';import { Router, Scene, Actions, Modal, ActionConst } from 'react-native-router-flux';import { connect } from 'react-redux';// other imports...import { TabIcon1, TabIcon2, } from './components/common/TabIcon';// custom viewimport Guide from './components/common/DMGGuide';import Splash from './components/common/DMGSplash';import TabView1 from './components/view/TabView1';import TabView2 from './components/view/TabView2';const Routers = connect()( Router );export default class Container extends Component {  render() {    return (      <Routers getSceneStyle={ getSceneStyle }>        <Scene key="root">          <Scene key="main"                 tabs={true}                 tabBarStyle={{ borderTopColor: '#dedede', borderTopWidth: 1, backgroundColor: '#eee' }}                 tabBarSelectedItemStyle={{ backgroundColor: '#eee' }}          >            <scene key="guide" component={ Guide } hideNavBar hideTabBar initial/>            <Scene key="splash" component={ Splash } hideNavBar hideTabBar/>            <Scene key="tabView1" component={ TabView1 } title="tabView1" icon={ TabIcon1 }/>            <Scene key="tabView2" component={ TabView2 } title="tabView2" icon={ TabIcon2 }/>          </Scene>        </Scene>      </Routers>    );  }}const getSceneStyle = function ( props, computedProps ) {  const style = {    flex: 1,    backgroundColor: '#fff',    shadowColor: null,    shadowOffset: null,    shadowOpacity: null,    shadowRadius: null  };  if ( computedProps.isActive ) {    style.marginTop = computedProps.hideNavBar ? 0 : 64;    style.marginBottom = computedProps.hideTabBar ? 0 : 50;  }  return style;};