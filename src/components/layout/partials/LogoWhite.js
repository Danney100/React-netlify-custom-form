import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <table style={tableStyle}>
        <tbody>
          <tr style={tableStyle}>
            <td style={tableStyle}>
              <Link to="/">
                <Image
                  src={require('./../../../assets/images/logo-white.svg')}
                  alt="Blossom"
                  width={32}
                  height={32} />
              </Link>
            </td>
            <td style={tableStyle}>
              <Link style={textLinkStyle} to="/"><h4 className="m-0">Blossom</h4></Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const tableStyle = {
  border: '0px solid black',
  paddingRight: '0px',
  margin: '0px'
}

const textLinkStyle = {
  textDecoration: 'none',
}

export default Logo;