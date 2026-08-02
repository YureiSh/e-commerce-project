import { Delete, DeleteIcon, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteAddress, setOrderAddress } from "../../store/actions/shoppingCartActions";

function AddressCard({ item, selectedId, setSelectedId, openEdit }) {
    const dispatch = useDispatch();
    const isSelected = selectedId === item.id;

    function onClick(addrId){
        setSelectedId(addrId);
        dispatch(setOrderAddress({
            name: item.name,
            surname: item.surname,
            phone: item.phone,
            city: item.city,
            district: item.district,
            neighborhood: item.neighborhood,
        }));
    }

    return (
        <div onClick={()=> onClick(item.id)}
            className={`relative rounded-xl border-2 p-4 cursor-pointer transition-all ${isSelected
                ? "border-secondary bg-primary/5"
                : "border-gray-200 bg-white hover:border-gray-300"
                }`}
        >
            {/* Radio + Label Row */}
            <div className="flex items-center gap-2 mb-2">
                <input
                    type="radio"
                    name="selectedAddress"
                    checked={isSelected}
                    onChange={()=> onClick(item.id)}
                    className="accent-primary w-4 h-4 shrink-0"
                    onClick={(e) => e.stopPropagation()}
                />
                <span className="text-sm font-semibold text-gray-800 flex-1">
                    {item.title}
                </span>
                {item.isCorporate && (
                    <span className="text-[10px] bg-gray-100 text-gray-500 rounded px-2 py-0.5 font-medium">
                        Kurumsal
                    </span>
                )}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        openEdit(item);
                    }}
                    className="text-xs text-gray-400 underline hover:text-gray-700 ml-1"
                >
                    Düzenle
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        dispatch(deleteAddress(item.id));
                    }}
                    className="text-xs text-gray-400 underline hover:text-red-700 ml-1"
                >
                    <Trash2 size={16} />
                </button>
            </div>

            {/* Name + Phone */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <svg
                    className="w-3.5 h-3.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                </svg>
                <span>{item.name}</span>
                <svg
                    className="w-3.5 h-3.5 shrink-0 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                </svg>
                <span>{item.phone}</span>
            </div>

            <div className={`text-xs leading-relaxed ${isSelected ? "bg-secondary text-white/75" : "bg-gray-100 text-gray-500"} rounded-lg px-3 py-2 mt-1`}>
                <p>{item.neighborhood}, {item.district}, {item.city}</p>
                <p>{item.address}</p>
            </div>
        </div>
    );
}
export default AddressCard;