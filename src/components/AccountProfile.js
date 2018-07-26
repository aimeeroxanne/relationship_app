import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSync from '@fortawesome/fontawesome-free-solid/faSync'
// font awesome license - https://fontawesome.com/license
import user from '../user.svg'

import React from 'react';
import { Link, Switch } from "react-router-dom";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import MoveInbox from 'material-ui/svg-icons/content/move-to-inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import PlusOne from 'material-ui/svg-icons/social/plus-one';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import BrokenImage from 'material-ui/svg-icons/image/broken-image';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import TrendingDown from 'material-ui/svg-icons/action/trending-down';

class AccountProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Profile"
          subtitle="Subtitle"
          avatar= {user}
        />

        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardText >
          <List>
            <ListItem primaryText="My Loved" leftIcon={<FavoriteBorder />} />
            <ListItem primaryText="My Unloved" leftIcon={<TrendingDown />} />
            <ListItem primaryText="Partner Loved" leftIcon={<Favorite />} />
            <ListItem primaryText="Partner Unloved" leftIcon={<BrokenImage />} />
            <ListItem primaryText="Add Partner" leftIcon={<PlusOne />} />
            <ListItem primaryText="Delete Account" leftIcon={<DeleteForever />} />
          </List>
        </CardText>
      </Card>
    );
  }
}

export default AccountProfile
