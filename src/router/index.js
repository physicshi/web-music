import React from "react";

import GYdiscover from "@/pages/discover";
import GYRecommend from "../pages/discover/c-pages/recommend";
import GYRanking from "../pages/discover/c-pages/ranking";
import GYSongs from "../pages/discover/c-pages/songs";
import GYDjradio from "../pages/discover/c-pages/djradio";
import GYArtist from "../pages/discover/c-pages/artist";
import GYAlbum from "../pages/discover/c-pages/album";

import GYfriend from "@/pages/friend";
import GYmine from "@/pages/mine";
import { Redirect } from "react-router-dom";

const routes=[
    {
        path: "/",
        exact: true,
        render:()=>(
            <Redirect to="/discover"/>
        )
    },
    {
        path:"/discover",
        component:GYdiscover,
        routes:[
            {
                path: "/discover",
                exact: true,
                render: () => (
                  <Redirect to="/discover/recommend"/>
                )
              },
              {
                path: "/discover/recommend",
                component: GYRecommend
              },
              {
                path: "/discover/ranking",
                component: GYRanking
              },
              {
                path: "/discover/songs",
                component: GYSongs
              },
              {
                path: "/discover/djradio",
                exact: true,
                component: GYDjradio
              },
              {
                path: "/discover/artist",
                component: GYArtist
              },
              {
                path: "/discover/album",
                component: GYAlbum
              }
        ]
    },
    {
        path:"/mine",
        component: GYmine
    },
    {
        path: "/friend",
        component:GYfriend
    }
];

export default routes;
