import ShopProduct from '../../components/ShopProduct';
import products from "../../api/project";
import SectionTitle from "../SectionTitle";

const ProjectSection = () => {
    return (
        <section className="wpo-projects section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <SectionTitle MainTitle={'Our Products'} />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="projects-grids gallery-container clearfix">
                            <ShopProduct
                                products={products}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;
