import { useRef } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../header"
import { Footer } from "../footer"
import { useSizes } from '../../hooks/useSizes'
import { Content } from "./styled"

export const MainLayout = () => {
  const headerRef = useRef()
  const footerRef = useRef()

  const sizes = useSizes({
    headerH: headerRef,
    footerH: footerRef,
  })

  return (
    <div>
      <Header ref={headerRef}/>
      
      <Content 
        $footerH={sizes.footerH}
        $headerH={sizes.headerH}
      >
        <Outlet />
      </Content>
      
      <Footer ref={footerRef}/>
    </div>
  )
}