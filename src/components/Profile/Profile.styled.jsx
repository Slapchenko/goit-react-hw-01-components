import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 300px;
  margin-bottom: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  background-color: white;
  color: black;
`;

export const ProfileAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ProfileName = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const ProfileTag = styled.p`
  margin-bottom: 5px;
`;

export const ProfileLocation = styled.p``;

export const ProfileStats = styled.p`
  display: flex;
`;

export const ProfileStatsList = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  flex-direction: column;
  background-color: grey;
  border: 1px solid white;
`;

export const ProfileStatsLabel = styled.span`
  margin-bottom: 5px;
`;

export const ProfileStatsQuantity = styled.span`
  font-weight: 700;
`;
