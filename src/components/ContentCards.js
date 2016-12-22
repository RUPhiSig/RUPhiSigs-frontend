import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const ContentCard = (props) => {
  const { title, children } = props;
  const style = {
    textAlign: 'center',
  };

  return (
    <Card>
      <CardTitle title={title} style={style} />
      <CardText>
        {children}
      </CardText>
    </Card>
  );
};

ContentCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export const HomeContent = () => (
  <ContentCard title="Home">
    This is the home page.
  </ContentCard>
);

export const MembersContent = () => (
  <ContentCard title="Members">
    This is the members page.
  </ContentCard>
);

export const AboutUsContent = () => (
  <ContentCard title="About Us">
    This is the about us page.
  </ContentCard>
);

export const ContactUsContent = () => (
  <ContentCard title="Contact Us">
    This is the contact us page.
  </ContentCard>
);

export default HomeContent;
