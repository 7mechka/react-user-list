import { Route, Routes } from "react-router-dom"
import App from "./App"
import { UserInfo } from "./UserInfo"
import PostCard from "./PostCard"
import { NotFound } from "./NotFound"

function PageRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App/>}/> {/* 👈 Renders at /app/ */}
        <Route path="/user/:id" element={<UserInfo/>}/>
        <Route path="/user/:id/posts" element={<PostCard/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}
export {PageRouter}