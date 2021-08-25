/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-08-24 23:49:18
 * @LastEditors: monster
 * @LastEditTime: 2021-08-26 00:40:21
 */
import React, { memo } from 'react'
import propTypes from "prop-types";

import { ThemeHeaderRcmWrapper } from "./style"

 const MKThemeHeaderRcm = memo(function(props) {
  const { title,keywords } = props;
  return (
    <ThemeHeaderRcmWrapper className="icon sprite_02">
      <div className="left">
        <h3>
          <a href="todo" className="title">{title}</a>
        </h3>
        <div className="keyword">
          {
            keywords.map((item,index)=>(
              <div className="item" key={item}>
                <a href="todo">{item}</a>
                {
                  (index+1)!==keywords.length&&<span className="divider">|</span>
                }
              </div>
            ))
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
      
    </ThemeHeaderRcmWrapper>
  )
})

MKThemeHeaderRcm.propTypes = {
  title: propTypes.string.isRequired,
  keywords: propTypes.array
}

MKThemeHeaderRcm.defaultProps = {
  keywords: []
}

export default MKThemeHeaderRcm
