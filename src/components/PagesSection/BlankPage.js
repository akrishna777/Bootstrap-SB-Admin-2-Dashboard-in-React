import React, { useState } from 'react'
import Footer from '../Footer'
import LogoutModal from '../LogoutModal'
import Navbar from '../Navbar'
import ScrollToTop from '../ScrollToTop'
import SidebarBlank from '../Sidebars/SidebarBlank'

const BlankPage = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true)
  const handleSidebar = () => {
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle)
  }
  return (
    <>
      <div id="wrapper">
        <SidebarBlank
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
          handleSidebar={handleSidebar}
        />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <Navbar
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
              handleSidebar={handleSidebar}
            />
            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}
          {/* <!-- Footer --> */}
          <Footer />
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper --> */}

      <ScrollToTop />
      <LogoutModal />
    </>
  )
}

export default BlankPage
