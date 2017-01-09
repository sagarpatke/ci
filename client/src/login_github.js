import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {IndexIndexLink, IndexLink} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Footer from './Footer';
import logo from '../images/logo.jpg'
import cardImg from '../images/keepCalm.png'
import backgroundImg from '../images/backgroundImg.jpg'
import gitLogo from '../images/gitLogo.png'
import './App.css'
import { Grid,Col,Row } from 'react-flexbox-grid/lib/index'
import ActionBugReport from 'material-ui/svg-icons/action/bug-report'

import request from 'superagent';





class login extends React.Component {

constructor(props) {
   super(props);
   this.something=this.something.bind(this);
   this.postsomething=this.postsomething.bind(this);
   this.state={name:''};
 }

 something() {
   request
   .get('http://localhost:9080/user')
   .end((err, res) => {
     console.log(res.body.name);
    this.setState(
     { name: res.body.name }
     );
 });
 }
 postsomething(){
  console.log("hi");
  request
  .post('http://localhost:9080/user')
  .send({username:'ydsh',name:'hdsj',sex:'Female'})
  .end(function(err, res){
     if (err || !res.ok) {
       alert('Oh no! error');
     } else {
       alert('yay got ' + JSON.stringify(res.body));
     }
   });
 }

   render() {
      {this.postsomething()}
        
      return (
      	<div>
        	<div>
            <AppBar
    
              title={this.state.name}
              iconElementLeft={<IconButton><ActionBugReport /></IconButton>}
              iconElementRight=
                    {<IconMenu
                    iconButtonElement={
                    <IconButton touch={true}>
                    <NavigationExpandMoreIcon />
                    </IconButton>
                    }
                    >
                    <MenuItem primaryText="Features" />
                    <MenuItem primaryText="Blogs" />
                    <MenuItem primaryText="Contact Us" />
                    </IconMenu>}
            />
      		</div>

          
          <div style={{backgroundImage: 'url(' +backgroundImg+ ')'}}>
          <Grid>
          <Row center="xs">
                  <Card>
                
                <CardText> 
                  A CI platform you have been dreaming for !!
                </CardText>
                                
                <CardMedia
                >
                  <img src={cardImg} />
                </CardMedia>
                
                <CardActions >

                  <IndexLink to="/App" activeClassName="active" >
                    <FlatButton secondary={true} hoverColor='#D1C4E9' label="Login With Github" />
                  </IndexLink>

                </CardActions>
              
              </Card>
          </Row>

          </Grid>
          
          <Footer />
        	</div>
        </div>
      );
   }
}


export default login;