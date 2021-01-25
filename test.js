import React from "react"
import { Link } from "gatsby"

class foo 

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/` + 5
  const kisRootPath = location.pathname === rootPath
  let header
  const foo = "test"

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
