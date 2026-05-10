const sections = [
    {
        title: "the quick fox jumps over",
        items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
        ],
    },
    {
        title: "the quick fox jumps over",
        items: [
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
            "the quick fox jumps over the lazy dog",
        ],
    },
];

const mainDesc = {
    p: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    h3: "the quick fox jumps over the lazy dog"
}

function DescriptionTab() {

    return (
        <div className="grid grid-cols-12 grid-rows-1">
            <div className="col-span-12 md:col-span-4 m-auto p-4 lg:p-0 row-span-1 md:row-span-1" >
                <img src="/ProductImgs/001.jpg" alt="" />
            </div>
            <div className="col-span-12 md:col-span-4 p-6 lg:p-0 lg:px-6 row-span-2 md:row-span-1" >
                <h3 className="text-2xl text-secondary" > {mainDesc.h3} </h3>
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