import React from 'react';
import styled from "styled-components";

const Bar = styled.div``;
const Btn = styled.button`
  width: 43px;
  height: 43px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGg1MHY1MEgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTI3IDMyLjA3MUwxOS45MjkgMjUgMjcgMTcuOTI5Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  background-size: cover;
  background-position: center center;
  background-color: transparent;
  border: none;
`

function ProductBar(){  
  return ( 
    <Bar>
      <Btn></Btn>
    </Bar>
  ) 
}

export default ProductBar;