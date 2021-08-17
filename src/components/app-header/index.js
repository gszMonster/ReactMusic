import React, { memo } from "react";
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

import { headerLinks } from "@/common/local-data";

import { NavLink } from "react-router-dom";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function MKAppHeader() {

  const showSelectItem = function(item, index){
    if(index < 3){
      return (
        <NavLink to={item.link}>
          { item.title }
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    }else {
      return (
        <a href={ item.link }>{ item.title }</a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <h1 className="logo sprite_01">
            <a href="/#">网易云音乐</a>
          </h1>
          <div className="select-list">
            {
              headerLinks.map((item, index)=>{
                return (
                  <div className="select-item" key={item.title}>{ showSelectItem(item, index) }</div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={ <SearchOutlined /> }
          />
          <button className="center">创作者中心</button>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
