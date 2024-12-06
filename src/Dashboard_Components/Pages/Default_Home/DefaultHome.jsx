import BarChartComponent from "./Charts/BarChartComponent";
import LineChartComponent from "./Charts/LineChartComponent";

export default function DefaultHome() {
  return (
    <>
      <div className="container-fluid">
        <div className="row gy-3">
          <div className="col-sm-12 col-md-8 d-flex">
            <BarChartComponent className="flex-fill" />
          </div>
          <div className="col-12 col-md-4">
            <LineChartComponent />
          </div>
          <div className="col-12 col-md-4">
            <BarChartComponent />
          </div>
          <div className="col-12 col-md-8">
            <BarChartComponent />
          </div>
        </div>
      </div>
    </>
  );
}
