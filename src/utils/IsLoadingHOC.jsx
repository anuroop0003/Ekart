import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageLoader from "../components/PageLoader/PageLoader";
import { hideHOCLoader } from "./stateManagement/RootSlicer";

export default function IsLoadingHOC(WrappedComponent) {
    function HOC(props) {
        const dispatch = useDispatch();
        const loader = useSelector((state) => state.loader);

        useEffect(() => {
            const timer = setTimeout(() => {
                dispatch(hideHOCLoader());
            }, 2000);
            return (() => clearTimeout(timer));
        }, []);

        return (
            loader ? <PageLoader /> : <WrappedComponent {...props} />)

    }
    return HOC;
}