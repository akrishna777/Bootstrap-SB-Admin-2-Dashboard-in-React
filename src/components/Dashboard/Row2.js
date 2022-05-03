import React from 'react'
import AreaChart from '../Charts/AreaChart'
import DonutChart from '../Charts/DonutChart'

const Row2 = () => {
  return (
    <div className="row">
      {/* <!-- Area Chart --> */}
      <div className="col-xl-8 col-lg-7">
        <div className="card shadow mb-4">
          {/* <!-- Card Header - Dropdown --> */}
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Earnings Overview
            </h6>
            <div className="dropdown no-arrow">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink"
              >
                <div className="dropdown-header">Dropdown Header:</div>
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Card Body --> */}
          <div className="card-body">
            <div className="chart-area">
              <AreaChart />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Pie Chart --> */}
      <div className="col-xl-4 col-lg-5">
        <div className="card shadow mb-4">
          {/* <!-- Card Header - Dropdown --> */}
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Revenue Sources
            </h6>
            <div className="dropdown no-arrow">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink"
              >
                <div className="dropdown-header">Dropdown Header:</div>
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Card Body --> */}
          <div className="card-body">
            <div className="chart-pie pt-4 pb-2">
              <DonutChart />
            </div>
            <div className="mt-4 text-center small">
              <span className="mr-2">
                <i className="fas fa-circle text-primary mx-1"></i>
                Direct
              </span>
              <span className="mr-2">
                <i className="fas fa-circle text-success mx-1"></i>
                Social
              </span>
              <span className="mr-2">
                <i className="fas fa-circle text-info mx-1"></i>
                Referral
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Row2