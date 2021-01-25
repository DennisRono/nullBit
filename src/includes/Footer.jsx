import React from 'react'
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
    const fStyles = {
        footer: {
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            height: 'auto',
            color: '#fff',
        },
        flexContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '10%',
            marginRight: '10%'
        },
        copyright: {
            textAlign: 'center',
            color: 'rgb(102, 102, 102)',
            padding: '20px'
        },
        fDivs: {
            color: '#fff',
            width: '20%',
            marginTop: '20px',
        },
        fLinks: {
            color: 'rgb(128, 128, 128)',
            fontSize: '13px',
            fontFamily: 'sans-serif'
        },
        fHeaders: {
            marginBottom: '20px',
            fontSize: '17px',
            fontFamily: 'sans-serif'
        },
        socials: {
            textAlign: 'center',
            borderBottom: '1px solid rgb(128, 128, 128)',
            marginLeft: '10%',
            marginRight: '10%',
            color: 'rgb(128, 128, 128)'
        },
        icons: {
            padding: '20px',

        },
        brands: {
            display: 'flex',
            justifyContent: 'space-evenly',
            marginLeft: '15%',
            marginRight: '15%',
            marginTop: '30px',
            marginBottom: '15px'
        },
        brand: {
            color: 'rgb(128, 128, 128)',
            fontSize: '12px',
            fontStyle: 'sans-serif'
        }
    };
    return (
        <div style={fStyles.footer}>
            <div style={fStyles.flexContainer}>
            <div style={fStyles.fDivs}>
                <h3 style={fStyles.fHeaders}>Let Us Help You</h3>
                <ul>
                    <li><Link style={fStyles.fLinks}>Help Center</Link></li>
                    <li><Link style={fStyles.fLinks}>Contact Us</Link></li>
                    <li><Link style={fStyles.fLinks}>FAQ</Link></li>
                    <li><Link style={fStyles.fLinks}>Return Policy</Link></li>
                    
                </ul>
            </div>
            <div style={fStyles.fDivs}>
                <h3 style={fStyles.fHeaders}>Services</h3>
                <ul>
                    <li><Link style={fStyles.fLinks}>Sell with Us</Link></li>
                    <li><Link style={fStyles.fLinks}>Product info</Link></li>                    
                </ul>
            </div>
            <div style={fStyles.fDivs}>
                <h3 style={fStyles.fHeaders}>About nullBit</h3>
                <ul>
                    <li><Link style={fStyles.fLinks}>About Us</Link></li>
                    <li><Link style={fStyles.fLinks}>Terms & conditions</Link></li>
                    <li><Link style={fStyles.fLinks}>Privacy Policy</Link></li>
                    
                </ul>
            </div>
            </div>
            <div style={fStyles.brands}>
                <ul>
                    <li style={fStyles.brand}>Adidas</li>
                    <li style={fStyles.brand}>Hp</li>
                </ul>
                <ul>
                    <li style={fStyles.brand}>Dell</li>
                    <li style={fStyles.brand}>Nvidia</li>
                </ul>
                <ul>
                    <li style={fStyles.brand}>Intel</li>
                    <li style={fStyles.brand}>Microsoft</li>
                </ul>
                <ul>
                    <li style={fStyles.brand}>Gameloft</li>
                    <li style={fStyles.brand}>AMD</li>
                </ul>
                <ul>
                    <li style={fStyles.brand}>Panasonic</li>
                    <li style={fStyles.brand}>Nivea</li>
                </ul>
            </div>
            <div style={fStyles.socials}>
                <WhatsAppIcon style={fStyles.icons}/>
                <TwitterIcon style={fStyles.icons}/>
                <FacebookIcon style={fStyles.icons}/>
                <InstagramIcon style={fStyles.icons}/>
                <EmailIcon style={fStyles.icons}/>
            </div>
            <p style={fStyles.copyright}>Copyright &copy; 20201 || Dennis Rono</p>
        </div>
    )
}

export default Footer
