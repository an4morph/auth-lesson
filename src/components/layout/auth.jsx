import { useRef } from "react"
import { Outlet } from "react-router-dom"
import { useSizes } from "../../hooks/useSizes"
import { Footer } from "../footer"
import { Content } from "./styled"

export const AuthLayout = () => {
  const footerRef = useRef()

  const sizes = useSizes({
    footerH: footerRef,
  })

  return (
    <div>      
      <Content $footerH={sizes.footerH}>
        <Outlet />
      </Content>
      
      <Footer ref={footerRef} />
    </div>
  )
}