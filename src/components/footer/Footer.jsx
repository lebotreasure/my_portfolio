import * as Scroll from 'react-scroll';
import React from 'react';
import './footer.scss';
import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
let scroll    = Scroll.animateScroll;

export default function Footer() {
  const onScrollToTop = () => {
    scroll.scrollToTop(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  return (
    <div className="footer">
        <div className="link-list">
        <Card>
            <CardContent>
                <Typography >LOOK AT MY CODE, MY CODE IS AMAZING</Typography>
                <Typography className="footer-text">This Website is made with React and Material UI. Check out the code on Github.</Typography>
              
              <Typography className="footer-text"><a href="https://github.com/lebotreasure/my_portfolio">
                VIEW ON GITHUB
              </a>
              </Typography>

              </CardContent>
          </Card>

           
          
        </div>
        <Button onClick={onScrollToTop}>Back to top</Button>
      </div>
  );
}
