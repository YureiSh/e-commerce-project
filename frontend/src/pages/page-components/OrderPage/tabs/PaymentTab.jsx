import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchPayments, newPayment, updatePayment } from "../../../../store/actions/shoppingCartActions";
import PaymentMethodCard from "../../../../components/Card-components/PaymentMethodCard";

function PaymentTab() {
    const FORM_CSS = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-secondary";
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPayments());
    }, [])

    const { payment } = useSelector((store) => store.shoppingCart);
    const [selectedId, setSelectedId] = useState(1);
    const [modal, setModal] = useState(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        if (modal && modal !== "new") {
            reset({ ...modal.payment });
        } else {
            reset({
                cardNo: "",
                expireMonth: null,
                expireYear: null,
                nameOnCard: "",
            });
        }
    }, [modal, reset]);

    function closeModal() {
        setModal(null);
    }

    function openNew() {
        setModal("new");
    }

    function openEdit(pymnt) {
        setModal({ payment: pymnt });
    }

    function onSubmit(data) {
        if (modal === "new") {
            dispatch(newPayment(data));
        } else {
            dispatch(updatePayment(data));
        }
        closeModal();
    }

    return (
        <div className="w-full font-sans">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-semibold text-gray-800">
                    Ödeme Yöntemi
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                    onClick={openNew}
                    className="flex flex-col items-center justify-center gap-2 min-h-27.5 border-2 border-dashed border-secondary rounded-xl bg-white hover:bg-primary/5 transition-colors cursor-pointer"
                >
                    <span className="text-3xl text-secondary leading-none">+</span>
                    <span className="text-sm text-gray-500">Yeni Kart Ekle</span>
                </button>
                {payment.map((card) => (
                    <PaymentMethodCard key={card.id} item={card} openEdit={openEdit} selectedId={selectedId} setSelectedId={setSelectedId} />
                ))}
            </div>
            {modal && (
                <div
                    onClick={closeModal}
                    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
                >
                    <div
                        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-base font-semibold text-gray-800 mb-4">
                            {modal === "new" ? "Kart Bilgileri" : "Kartı Düzenle"}
                        </h3>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate >
                            <div className="mb-3">
                                <label className="block text-xs text-gray-500 mb-1">
                                    Kart numarası
                                </label>
                                <input className={FORM_CSS} //Kart numarası
                                    {...register("cardNo", { required: "Card no is required!", minLength: { value: 12, message: "Name must be at least 16 characters" } })} type="text" placeholder="4321 XXXX XXXX XXXX" />
                                {errors.cardNo && <div className="text-red-500" >{errors.cardNo.message}</div>}
                            </div>

                            <div className="grid grid-cols-4 gap-3 mb-3">
                                <div>
                                    <label className="block text-xs text-gray-500 mb-1">
                                        Ay
                                    </label>
                                    <input className={FORM_CSS}
                                        {...register("expireMonth", { required: "expireMonth is required!", })} type="text" placeholder="MM" />
                                    {errors?.expireMonth && <div className="text-red-500" >{errors.expireMonth.message}</div>}
                                </div>
                                <div>
                                    <label className="block text-xs text-gray-500 mb-1">Yıl</label>
                                    <input //Year
                                        className={FORM_CSS}
                                        {...register("expireYear", { required: "expireYear is required.", })} type="text" placeholder="YYYY"
                                    />
                                    {errors?.expireYear && <div className="text-red-500 text-xs mt-1">{errors.expireYear.message}</div>}
                                </div>
                                <div /*Boş div */ ></div>
                                {/*
                                <div>
                                    <label className="block text-xs text-gray-500 mb-1">CVV</label>
                                    <input //CVV
                                        className={FORM_CSS + "bg-gray-400"}
                                        {...register("cvv", { required: "cvv is required.", })} type="text" placeholder="CVV" disabled
                                    />
                                    {errors?.cvv && <div className="text-red-500 text-xs mt-1">{errors.cvv.message}</div>}
                                </div>
                                */}
                            </div>


                            <div className="mb-3">
                                <label className="block text-xs text-gray-500 mb-1">
                                    Name on Card
                                </label>
                                <input className={FORM_CSS} //nameOnCard
                                    {...register("nameOnCard", { required: "nameOnCard is required!", minLength: { value: 3, message: "Name must be at least 3 characters" } })} type="text" placeholder="İsim" />
                                {errors?.nameOnCard && <div className="text-red-500" >{errors.nameOnCard.message}</div>}
                            </div>

                            <div className="flex gap-2 justify-end">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    İptal
                                </button>
                                <button

                                    className="px-5 py-2 text-sm text-white bg-primary rounded-lg hover:bg-primary/85 transition-colors font-medium"
                                >
                                    Kaydet
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </div>
    );
}
export default PaymentTab;