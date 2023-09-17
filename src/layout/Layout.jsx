import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import IsLoadingHOC from "../utils/IsLoadingHOC";

function Layout(props) {

    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default IsLoadingHOC(Layout)
