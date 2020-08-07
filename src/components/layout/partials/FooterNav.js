import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
        <li>
          <Link to="/meeting/">Schedule a Meeting</Link>
        </li>
        <li>
          <Link to="/updates/">Get Updates</Link>
        </li>
        {/*<li>
          <a target="_blank" href="http://help.blossom.cloud/">Help Center</a>
        </li>*/}
        <li>
          <Link to="/tos/">Terms of Service</Link>
        </li>
        <li>
          <Link to="/privacy/">Privacy Policy</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;