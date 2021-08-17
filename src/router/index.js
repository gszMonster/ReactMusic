// import React from "react";???为什么不用导入react

import MKDiscover from "@/pages/discover";
import MKMine from "@/pages/mine";
import MKFriend from "@/pages/friend";

import MKRecommend from "@/pages/discover/c-pages/recommend";
import MKRanking from "@/pages/discover/c-pages/ranking";
import MKSongs from "@/pages/discover/c-pages/songs";
import MKDjradio from "@/pages/discover/c-pages/djradio";
import MKArtist from "@/pages/discover/c-pages/artist";
import MKAlbum from "@/pages/discover/c-pages/album";

import { Redirect } from "react-router-dom";

const routers = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: MKDiscover,
    routes: [
      {
        path:"/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path:"/discover/recommend",
        component: MKRecommend
      },
      {
        path:"/discover/ranking",
        component: MKRanking
      },
      {
        path:"/discover/songs",
        component: MKSongs
      },
      {
        path:"/discover/djradio",
        component: MKDjradio
      },
      {
        path:"/discover/artist",
        component: MKArtist
      },
      {
        path:"/discover/album",
        component: MKAlbum
      }
    ]
  },
  {
    path: "/mine",
    component: MKMine
  },
  {
    path: "/friend",
    component: MKFriend
  }
];

export default routers