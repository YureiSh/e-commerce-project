import { useState } from "react";
import DescriptionTab from "./tabs/DescriptionTab";
import ReviewsTab from "./tabs/ReviewsTab";
import AdditionalTab from "./tabs/AdditionalTab";


function ProductMain() {
    const reviewCount = 0;

    const tabs = [
        { id: "description", label: "Description", component: <DescriptionTab /> },
        { id: "additional", label: "Additional Information", component: <AdditionalTab /> },
        { id: "reviews", label: `Reviews (${reviewCount})`, component: <ReviewsTab /> },
    ];

    
    const [activeTab, setActiveTab] = useState("description");
    const activeComponent = tabs.find(t => t.id === activeTab).component;

    return (
        <section className="max-w-300 m-auto pt-6 pb-12" >
            <div className="flex justify-center gap-8 border-b border-gray-200 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-3 text-sm font-medium cursor-pointer transition-colors duration-200 ${activeTab === tab.id
                                ? "border-b  text-secondary"
                                : "text-gray-400 hover:text-secondary"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {activeComponent}
        </section>
    );
}
export default ProductMain;