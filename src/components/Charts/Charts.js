import React, { useEffect, useState } from 'react'

import Footer from '../Footer'
import LogoutModal from '../LogoutModal'

import Navbar from '../Navbar'
import ScrollToTop from '../ScrollToTop'
import SidebarCharts from '../Sidebars/SidebarCharts'
import AreaChart from './AreaChart'
import BarChart from './BarChart'
import DonutChart from './DonutChart'

const Charts = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true)
  const handleSidebar = () => {
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle)
  }
  return (
    <>
      <div id="wrapper">
        <SidebarCharts
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
          handleSidebar={handleSidebar}
        />
        {/* Content Wrapper */}
        <div id="content-wrapper" class="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <Navbar
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
              handleSidebar={handleSidebar}
            />
            {/* Begin Page Content */}
            <div class="container-fluid">
              {/* <!-- Page Heading --> */}
              <h1 class="h3 mb-2 text-gray-800">Charts</h1>
              <p class="mb-4">
                Chart.js is a third party plugin that is used to generate the
                charts in this theme. The charts below have been customized -
                for further customization options, please visit the{' '}
                <a target="_blank" href="https://www.chartjs.org/docs/latest/">
                  official Chart.js documentation
                </a>
                .
              </p>

              {/* <!-- Content Row --> */}
              <div class="row">
                <div class="col-xl-8 col-lg-7">
                  {/* <!-- Area Chart --> */}
                  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">
                        Area Chart
                      </h6>
                    </div>
                    <div class="card-body">
                      <div class="chart-area">
                        <AreaChart />
                      </div>
                      <hr />
                      Styling for the area chart can be found in the
                      <code>/js/demo/chart-area-demo.js</code> file.
                    </div>
                  </div>

                  {/* <!-- Bar Chart --> */}
                  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">
                        Bar Chart
                      </h6>
                    </div>
                    <div class="card-body">
                      <div class="chart-bar">
                        <BarChart />
                      </div>
                      <hr />
                      Styling for the bar chart can be found in the
                      <code>/js/demo/chart-bar-demo.js</code> file.
                    </div>
                  </div>
                </div>

                {/* <!-- Donut Chart --> */}
                <div class="col-xl-4 col-lg-5">
                  <div class="card shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div class="card-header py-3">
                      <h6 class="m-0 font-weight-bold text-primary">
                        Donut Chart
                      </h6>
                    </div>
                    {/* <!-- Card Body --> */}
                    <div class="card-body">
                      <div class="chart-pie pt-4">
                        <DonutChart />
                      </div>
                      <hr />
                      Styling for the donut chart can be found in the
                      <code>/js/demo/chart-pie-demo.js</code> file.
                    </div>
                  </div>
                </div>
              </div>
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

export default Charts
