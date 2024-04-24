import styles from './FriendList.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';
function FriendList({friends}) {
 
   return (

    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
                    <span className = {clsx(
    styles.status, 
    friend.isOnline ? styles.online : styles.offline
  )}></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}{' '}
    </ul>
  );
 
}
FriendList.propTypes = {
    friends:PropTypes.arrayOf(PropTypes.object)
    };
export default FriendList;
