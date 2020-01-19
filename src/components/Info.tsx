import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Links, Link } from '../api/links';

const makeLink = (link: Link): JSX.Element => {
  return (
    <li key={link._id}>
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {link.title}
      </a>
    </li>
  );
};

class Info extends React.Component<{
  links: Link[];
}> {
  render() {
    const links = this.props.links.map(link => makeLink(link));

    return (
      <div>
        <h2>Learn Meteor!</h2>
        <ul>{links}</ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    links: Links.find().fetch(),
  };
})(Info);
