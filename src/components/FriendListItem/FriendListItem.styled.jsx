import styled from '@emotion/styled';

export const FriendStatus = styled.span`
  margin-right: 15px;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ isOnline }) => isOnline ? 'green' : 'red'
  };
`;

export const FriendAvatar = styled.img`
  width: 48px;
  margin-right: 15px;
  };
`;

export const Friendname = styled.p`
  font-weight: 700;
  };
`;


