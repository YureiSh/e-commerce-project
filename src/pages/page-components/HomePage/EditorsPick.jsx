import EditorsPickLayout from "../../../components/EditorsPickLayout";
import { editorsPick } from "../../../constants/constants";

function EditorsPick() {

    return (
        <>
            <section className="bg-[#FAFAFA] pt-12 pb-12">
                <div id="editorsContainer" className="max-w-360 m-auto">
                    <div className="text-center mt-12">
                        <h3 className="font-bold text-2xl text-secondary">EDITOR’S PICK</h3>
                        <p className="font-semibold text-md text-[#737373]">Problems trying to resolve the conflict between </p>
                    </div>
                    <div className="grid mt-10 gap-6">
                        <EditorsPickLayout images={editorsPick} />
                    </div>
                </div>
            </section>
        </>
    );
}
export default EditorsPick;