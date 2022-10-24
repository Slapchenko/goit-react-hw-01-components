import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileStatsList,
  ProfileStatsLabel,
  ProfileStatsQuantity
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <ProfileAvatar src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <ProfileStats>
        <ProfileStatsList>
          <ProfileStatsLabel>Followers</ProfileStatsLabel>
          <ProfileStatsQuantity>
            {new Intl.NumberFormat('en-En').format(stats.followers)}
          </ProfileStatsQuantity>
        </ProfileStatsList>
        <ProfileStatsList>
          <ProfileStatsLabel>Views</ProfileStatsLabel>
          <ProfileStatsQuantity>
            {new Intl.NumberFormat('en-En').format(stats.views)}
          </ProfileStatsQuantity>
        </ProfileStatsList>
        <ProfileStatsList>
          <ProfileStatsLabel>Likes</ProfileStatsLabel>
          <ProfileStatsQuantity>
            {new Intl.NumberFormat('en-En').format(stats.likes)}
          </ProfileStatsQuantity>
        </ProfileStatsList>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
