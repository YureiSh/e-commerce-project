
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { deleteAddress, deletePayment, setOrderPayment } from "../../store/actions/shoppingCartActions";

function PaymentMethodCard({ item, selectedId, setSelectedId, openEdit }) {
    const dispatch = useDispatch();
    const isSelected = selectedId === item.id;

    const handleSelect = () => {
        setSelectedId(item.id);
        dispatch(setOrderPayment({
            card_no: item.card_no,
            card_name: item.name_on_card,
            card_expire_month: item.expire_month,
            card_expire_year: item.expire_year
        }));
    };

    return (
        <div onClick={handleSelect}
            className={`relative rounded-xl border-2 p-4 cursor-pointer transition-all ${isSelected
                ? "border-secondary bg-primary/5"
                : "border-gray-200 bg-white hover:border-gray-300"
                }`}
        >
            {/* Radio + Label Row */}
            <div className="flex items-center gap-2 mb-2">
                <input
                    type="radio"
                    name="selectedPayment"
                    checked={isSelected}
                    onChange={handleSelect}
                    className="accent-primary w-4 h-4 shrink-0"
                    onClick={(e) => e.stopPropagation()}
                />
                <span className="text-sm font-semibold text-gray-800 flex-1">
                    {item.name_on_card}
                </span>

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
                        dispatch(deletePayment(item.id));
                    }}
                    className="text-xs text-gray-400 underline hover:text-red-700 ml-1"
                >
                    <Trash2 size={16} />
                </button>
            </div>

            {/* Card Details */}
            <div className={`text-xs leading-relaxed ${isSelected ? "bg-secondary text-white/75" : "bg-gray-100 text-gray-500"} rounded-lg px-3 py-2 mt-1`}>
                <p className="font-semibold mb-2">•••• {item.card_no.slice(-4)}</p>
                <div className="flex justify-between items-center">
                    <span>{item.name_on_card}</span>
                    <span>{String(item.expire_month).padStart(2, '0')}/{item.expire_year}</span>
                </div>
            </div>
        </div>
    );
}
export default PaymentMethodCard;