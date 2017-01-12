import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  
  Article: {
    "marginRight": 400,
    "textAlign": "justify",
    fontSize: 22,
    width: 800,
  }
};

const ContentCard = (props) => {
  const { title, children } = props;

  return (
    <Card>
      <CardTitle title={title} style={{textAlign: 'left', fontSize: 40, fontWeight: "bold", textDecoration: "underline"}} />
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
  <ContentCard title="HOME">
    <div style= {style.Article}>
      <article>
        Phi Sigma Kappa was founded on March 15th, 1873 on the campus known today as UMass. The Rutgers Chapter of Phi Sigma Kappa was established in 1959 and is still in good standing with the community. We have run many fundraisers to help our national philanthropy, Special Olympics, as well as participate in many mixers, intramural events, football games, and trips to local chapters. Beyond our social and athletic passions, brothers at Phi Sigma Kappa study hard and earn high marks.
      </article>
    </div>
  </ContentCard>
);

export const MembersContent = () => (
  <ContentCard title="MEMBERS">
    <div style= {style.Article}>
      <article>
        <ul>
          <h3 style={{fontWeight: "normal"}}>Current active members:</h3>
          <li>Kiran Kurian</li>
          <li>Jacob Goldfarb</li>
          <li>Neil Malu</li>
          <li>Trevor Frederick</li>
          <li>Max Ohring</li>
          <li>Alec Rohrbach</li>
          <li>Michael Potros</li>
          <li>Joeseph Markman</li>
          <li>Dakota Johnson</li>
          <li>Thomas Bonilla</li>
          <li>John Considine</li>
          <li>Kerem Sahiner</li>
          <li>Michael Mullin</li>
          <li>Tomer Levy</li>
          <li>Nathan Yezril</li>
          <li>Jake Novak</li>
          <li>Robert Goodson</li>
          <li>Dhruv Bhardwaj</li>
          <li>Omar Hassan</li>
          <li>Shawn Ermel</li>
          <li>Kyle Kopcho</li>
          <li>George Prior</li>
          <li>Jack Kirkland</li>
          <li>Joseph Coleman</li>
          <li>Andrew Whitehouse</li>
          <li>Harsha Gopalakrishnan</li>
        </ul>
      </article>
    </div>
  </ContentCard>
);

export const RushContent = () => (
  <ContentCard title="JOIN US">
    <div style= {style.Article}>
      <h3 style={{color: "#F44336", fontWeight: "normal"}}>What is Rush?</h3>
      <article>
        For those new to Greek life, rush is the fraternity recruitment period. It spans over a week and it is a series of events put on by the fraternity. Phi Sigma Kappa hosts both a fall and winter rush week. These events are intended for potential new member participation to showcase what the fraternity is all about. The goal for fraternity prospects should be to get to know as many of the active brothers as possible and to enjoy the events. At the end of rush, potential new members will be contacted and offered bids if the active brothers wish for them to become associated with Phi Sigma Kappa. Upon being offered a bid potential new members have 24 hours to accept and begin their associate member process.
      </article>
      <h3 style={{color: "#F44336", fontWeight: "normal"}}>What it means to be an Associate Member?</h3>
      <article>
        Our pledging period is about 10 weeks, but is much more unique than other fraternities. Right from the moment you decide to associate member, you are treated with the same respect as any other brother. We do not haze and guarantee that you will never be forced into an uncomfortable situation. Our associate member process is designed to get you closer with your associate member class and the Fraternity as a whole and provide you with an oppurtunity for personal development. We also educate you on all national fraternity history as well as local chapter history. We adhere to a strict <strong>NO ALCOHOL</strong> and <strong>NO HAZING</strong> policy.
      </article>
      <h3 style={{color: "#F44336", fontWeight: "normal"}}>Requirements and Expectations</h3>
      <article>
        <ul>
          <li>Must be a registered as a full time student (taking 12 credits).</li>
          <li>Must not be a member of of any other national collegiate social fraternity.</li>
          <li>Must have a minimum GPA of 2.50.</li>
          <li>Must attend atleast 2 rush events and an information session to be eligible for a bid.</li>
          <li>New member dues are $400. New members are responsible to meet their financial obligations to the chapter.</li>
          <li>New members are expected to be involved in community service and strive for academic excellence.</li>
        </ul>
      </article>
    </div>
  </ContentCard>
);

export const AboutUsContent = () => (
  <ContentCard title="ABOUT US">
    <div style= {style.Article}>
      <h3>MISSION STATEMENT</h3>
      <article>
        Phi Sigma Kappa is a lifelong brotherhood dedicated to the betterment of the individual, the university community, and our world, by giving its members opportunities to develop leadership skills, participate in service to others, achieve academic excellence, experience cultural diversity and practice personal integrity.
      </article>
      <br />
      <h3>CORE VALUES</h3>
      <article style={{marginBottom:40}}>
        <ul>
          <li>DEMAND EXCELLENCE</li>
          <li>COMMIT TO LIFELONG LEARNING</li>
          <li>MEET CHALLENGES WITH INNOVATION</li>
          <li>VALUE BROTHERHOOD ABOVE SELF</li>
        </ul>
      </article>
      <h3>CARDINAL PRINCIPLES</h3>
      <h4 style={{color: "#F44336", fontWeight: "normal"}}>TO PROMOTE BROTHERHOOD</h4>
        <article style={{marginBottom:20}}>
          Justice, harmony, and brotherly love are essential to the spirit of fraternity. We promise to set an example of true brotherhood not only in our relations with each other, but in our association with people everywhere.
        </article>
      <h4 style={{color: "#F44336", fontWeight: "normal"}}>TO STIMULATE SCHOLARSHIP</h4>
        <article style={{marginBottom:20}}>
          Wisdom comes with learning. Complementing the mission of higher education, we seek to help our members to combine formal and informal learning experience; to more fully appreciate the importance of both theoretical and practical knowledge; and, by broadening their understanding of human relationships, to produce men of wisdom who will be better prepared to make positive contributions to society and all mankind.
        </article>
      <h4 style={{color: "#F44336", fontWeight: "normal"}}>TO DEVELOP CHARACTER</h4>
        <article style={{marginBottom:20}}>
          Honor is the basis of fraternal relationships. We resolve to instill in each member a devotion to those values which will guide him to ends that are noble and right, so that in all that he represents and in all that he does, he shall be known as a man of honor who inspires others by his example and thus wins admiration and respect for himself and for Phi Sigma Kappa.
        </article>
        <br />
      <h3>CREED</h3>
        <article>
          <p>In the firm conviction that my Fraternity demands of me a life of Faith and Purpose.</p>
          <p>I hereby solemnly declare My Faith in the wisdom and love of God; in the dignity and worth of my fellowmen; in the strength and beauty of true Fraternity; in the history and future of my Country; and in the traditions and program of my Alma Mater. </p>
          <p>Henceforward, therefore, it shall be My Purpose to remain forever true to this, my fraternity's faith in me and in turn to preserve and promote courageously and unselfishly the chosen ideals of our mutual affection and common endeavor.</p> 
          <p>To this end I dedicate My Life to the maintenance of this Faith and the pursuit of this Purpose so that the ideals of Phi Sigma Kappa, being embodied in me, may be fulfilled in my Character and Conduct, and be known and honored by all men. </p>
          By these things I stand.
        </article>
    </div>
  </ContentCard>
);

export const ContactUsContent = () => (
  <ContentCard title="CONTACT US">
    <div style= {style.Article}>
      <h3 style={{color: "#F44336", fontWeight: "normal"}}>PRESIDENT</h3>
      <article>
        <u>Kiran Kurian</u><br />
        Phone: (973) 476 0072<br />
        Email: kjk161@scarletmail.rutgers.edu
      </article>
      <br />
      <h3 style={{color: "#F44336", fontWeight: "normal"}}>INDUCTOR</h3>
      <article>
        <u>Alec Rohrbach</u><br />
        Phone: (908) 566 7154<br />
        Email: ajr221@rutgers.edu
      </article>
      <br />
      <h3 style={{color: "#F44336", fontWeight: "normal"}}>ADDRESS</h3>
      <article>
        126 College Ave,<br />
        New Brunswick, NJ 08901
      </article>
    </div>
  </ContentCard>
);

export default HomeContent;
