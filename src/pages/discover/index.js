import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

import { discoverMenu } from '@/common/local-data';

import {
  DiscoverWrapper
} from "./style"


export default memo(function MKDiscover(props) {
  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className="top">
        <div className="nav wrap-v1">
          {
            discoverMenu.map((item,index) => (
              <NavLink to={ item.link } key={ index }>
                <em>{ item.title }</em>
              </NavLink>
            ))
          }
        </div>
      </div>
      { renderRoutes(route.routes) }
    </DiscoverWrapper>
  )
})
