import AnalysisContainer from "@containers/analysis/AnalysisContainer";
import SettingsContainer from "@containers/settings/SettingsContainer";
import AssetManagement from "@pages/AssetManagement";
import Home from "@pages/Home";
import { Swiper, SwiperSlide } from "swiper/react";

function Main() {
    return(
        <Swiper className="mySwiper">
            <SwiperSlide style={{ minHeight: `calc(100vh - 70px)` }}><Home /></SwiperSlide>
            <SwiperSlide style={{ minHeight: `calc(100vh - 70px)` }}><AnalysisContainer /></SwiperSlide>
            <SwiperSlide style={{ minHeight: `calc(100vh - 70px)` }}><AssetManagement /></SwiperSlide>
            <SwiperSlide style={{ minHeight: `calc(100vh - 70px)` }}><SettingsContainer /></SwiperSlide>
        </Swiper>
    );
}

export default Main;
