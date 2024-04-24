import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FriendList from './FriendList/FriendList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
import user from '../Data/user.json';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';
export const App = () => {
  const title = 'Upload stats';

  return (
    <div className="styles.container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {title ? (
        <Statistics title={title} stats={data} />
      ) : (
        <Statistics stats={data} />
      )}
      ;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
