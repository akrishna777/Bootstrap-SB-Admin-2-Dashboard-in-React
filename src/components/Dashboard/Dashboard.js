import React, { useState } from 'react'
import Navbar from '../Navbar'
import ScrollToTop from '../ScrollToTop'
import Sidebar from '../Sidebars/Sidebar'
import Footer from '../Footer'
import Heading from './Heading'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import LogoutModal from '../LogoutModal'

const Dashboard = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true)
  const handleSidebar = () => {
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle)
  }
  return (
    <div>
      <div id="wrapper">
        <Sidebar
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
              handleSidebar={handleSidebar}
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
            />
            {/* Begin Page Content */}
            <div className="container-fluid">
              <Heading />
              <Row1 />
              <Row2 />
              <Row3 />
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
    </div>
  )
}

export default Dashboard
