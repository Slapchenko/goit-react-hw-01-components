import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListCard, FriendListItemCard } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListCard>
      {friends.map(friend => (
        <FriendListItemCard key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </FriendListItemCard>
      ))}
    </FriendListCard>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
