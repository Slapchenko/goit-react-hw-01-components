import styled from '@emotion/styled';

export const Table = styled.table`
  background: #f5ffff;
  border-collapse: collapse;
  text-align: left;
`;

export const THead = styled.thead``;
export const TBody = styled.tbody``;

export const TH = styled.th`
  border-top: 1px solid #777777;
  border-bottom: 1px solid #777777;
  box-shadow: inset 0 1px 0 #999999, inset 0 -1px 0 #999999;
  background: linear-gradient(#9595b6, #5a567f);
  color: white;
  padding: 10px 15px;
  position: relative;

  :after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 25%;
    height: 25%;
    width: 100%;
    background: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.08)
    );
  }

  :first-of-type {
    border-left: 1px solid #777777;
    border-bottom: 1px solid #777777;
    box-shadow: inset 1px 1px 0 #999999, inset 0 -1px 0 #999999;
  }

  :last-child {
    border-right: 1px solid #777777;
    border-bottom: 1px solid #777777;
    box-shadow: inset -1px 1px 0 #999999, inset 0 -1px 0 #999999;
  }
`;

export const TR = styled.tr`
  :nth-of-type(odd) {
    background: #ebf3f9;
  }
`;

export const TD = styled.td`
  border: 1px solid #e3eef7;
  padding: 10px 15px;
  position: relative;
  color: black;
`;
