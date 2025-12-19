import DashboardHeader from "../components/local/DashboardHeader/dashboardHeader"

const DashboardLayouts = ({children}) => {
  return (
    <>
        <DashboardHeader/>
        <div className="grid grid-cols-12 w-full">
            <div className="col-span-2">
                <div className="sidebar">
                    <p>I am sidebar</p>
                </div>
            </div>
              <div className="col-span-10">
                  <div className="content">
                    {children}
                  </div>
              </div>
        </div>
    </>
  )
}

export default DashboardLayouts