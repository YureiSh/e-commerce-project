import { useLocation, Link } from "react-router-dom";
import PageContent from "../../../layout/PageContent";

function OrderFinished() {
    const location = useLocation();
    const order = location.state?.order;

    return (
        <PageContent>
            <div className="min-h-[70vh] flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
                    {/* Onay ikonu */}
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <svg
                            className="h-8 w-8 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h1 className="text-xl font-semibold text-gray-800 mb-2">
                        Siparişiniz Alındı!
                    </h1>
                    <p className="text-sm text-gray-500 mb-6">
                        Teşekkürler, siparişiniz başarıyla oluşturuldu.
                    </p>

                    {order && (
                        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 mb-6 text-left">
                            <div className="flex justify-between py-1.5 text-sm">
                                <span className="text-gray-500">Sipariş No</span>
                                <span className="font-medium text-gray-800">#{order.id}</span>
                            </div>
                            <div className="flex justify-between py-1.5 text-sm border-t border-gray-100">
                                <span className="text-gray-500">Tutar</span>
                                <span className="font-semibold text-secondary">{order.price} $</span>
                            </div>
                        </div>
                    )}

                    <Link
                        to="/"
                        className="inline-block w-full px-5 py-2.5 text-sm font-medium text-white bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                        Alışverişe Devam Et
                    </Link>
                </div>
            </div>
        </PageContent>
    );
}

export default OrderFinished;