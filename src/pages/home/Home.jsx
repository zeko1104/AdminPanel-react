import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    // home
    <div className="flex-[4]">
      <FeaturedInfo />
      <Chart data={userData} title='User Analytics' grid dataKey='Active User'/>
      {/* homeWidgets */}
      <div className="flex m-5">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
