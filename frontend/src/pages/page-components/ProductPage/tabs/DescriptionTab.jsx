import { useSelector } from "react-redux";
import CustomProductLoading from "../../../../components/Spinner-components/CustomProductLoading";

const mainDesc = {
    h3: "Relaxed-fit striped short-sleeve shirt",
    p: "A modern take on a warm-weather staple. Cut from lightweight, breathable cotton with a subtle vertical stripe, this relaxed-fit shirt drapes cleanly without clinging. The camp collar and dropped shoulders give it an easy, oversized silhouette, while mother-of-pearl buttons and a clean chest embroidery keep the details refined. Wear it buttoned up for a put-together look, or open over a plain tee for something more casual — it works either way, from the office to the weekend.",
  };
  
  const sections = [
    {
      title: "Features",
      items: [
        "Relaxed, oversized fit",
        "Camp (open) collar",
        "Short sleeves with a clean finished hem",
        "Front chest embroidery",
      ],
    },
    {
      title: "Material & Care",
      items: [
        "100% breathable cotton",
        "Machine wash cold, gentle cycle",
        "Iron on low heat",
        "Do not tumble dry",
      ],
    },
  ];

function DescriptionTab() {
    const { product, loading } = useSelector((store) => store.product);
    if(loading) return <CustomProductLoading/>;


    return (
        <div className="grid grid-cols-12 grid-rows-1">
            <div className="col-span-12 md:col-span-4 m-auto p-4 lg:p-0 row-span-1 md:row-span-1" >
                <img src="/ProductImgs/001.jpg" alt="" />
            </div>
            <div className="col-span-12 md:col-span-4 p-6 lg:p-0 lg:px-6 row-span-2 md:row-span-1" >
                <h3 className="text-2xl text-secondary pb-4" > {product?.name} </h3>
                <p className="text-[#737373] " > {mainDesc.p} </p>
            </div>
            <div className="col-span-12 md:col-span-4 row-span-3 md:row-span-1 p-6 lg:p-0 " >
                {sections.map((section, i) => (
                    <div key={i}>
                        <h3 className="text-2xl font-bold text-secondary mb-4">{section.title}</h3>
                        <ul className="flex flex-col gap-2">
                            {section.items.map((item, j) => (
                                <li key={j} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default DescriptionTab;