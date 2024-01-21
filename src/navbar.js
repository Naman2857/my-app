import React from "react";
//since thiss class does not have a state we can change it to a function
// class Navbar extends React.Component{
    // render () {
const Navbar = (props) => {
        return(
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="cart-icon"/>
                    <span style={styles.cartCount}>{props.count}</span>
                    </div>
                </div>                
        );
    }


// const styles = {
//     image: {
//         height: 110,
//         width: 110,
//         borderRadius: 4,
//         background: '#ccc'
//     }
// }
// const styles = {
//     image: {
//         height: 110,
//         width: 110,
//         borderRadius: 4,
//         background: '#ccc'
//     }
// }
const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };


export default Navbar; 