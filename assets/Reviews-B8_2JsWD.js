import{u as o,r,j as s}from"./index-CUSoZrQO.js";import{a as n}from"./axios-B4uVmeYG.js";const c="584470dd898841524f519ab5622a6d35";function u(){const{movieId:t}=o(),[a,i]=r.useState([]);return r.useEffect(()=>{n.get(`https://api.themoviedb.org/3/movie/${t}/reviews?api_key=${c}`).then(e=>i(e.data.results)).catch(e=>console.error(e))},[t]),s.jsxs("div",{children:[s.jsx("h2",{children:"Reviews"}),s.jsx("ul",{children:a.map(e=>s.jsx("li",{children:s.jsxs("p",{children:[e.author,": ",e.content]})},e.id))})]})}export{u as default};
