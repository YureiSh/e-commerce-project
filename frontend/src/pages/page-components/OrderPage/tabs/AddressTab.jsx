import { useEffect, useState } from "react";
import AddressCard from "../../../../components/Card-components/AddressCard";
import { useForm } from "react-hook-form";
import { MOCK_ADDRESSES } from "../constants/orderConstants";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresses, newAddress, updateAddress } from "../../../../store/actions/shoppingCartActions";

export default function AddressTab() {
  const FORM_CSS = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-secondary";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [])

  const { address } = useSelector((store) => store.shoppingCart);
  const [selectedId, setSelectedId] = useState(1);
  const [modal, setModal] = useState(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    if (modal && modal !== "new") {
      reset({ ...modal.address });
    } else {
      reset({
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "",
        district: "",
        neighborhood: "",
      });
    }
  }, [modal, reset]);

  function openNew() {
    setModal("new");
  }

  function openEdit(addr) {
    setModal({ address: addr });
  }

  function closeModal() {
    setModal(null);
  }

  function onSubmit(data) {
    if (modal === "new") {
      dispatch(newAddress(data));
    } else {
      dispatch(updateAddress(data));
    }
    closeModal();
  }

  return (
    <div className="w-full font-sans">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-gray-800">
          Teslimat Adresi
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={openNew}
          className="flex flex-col items-center justify-center gap-2 min-h-27.5 border-2 border-dashed border-secondary rounded-xl bg-white hover:bg-primary/5 transition-colors cursor-pointer"
        >
          <span className="text-3xl text-secondary leading-none">+</span>
          <span className="text-sm text-gray-500">Yeni Adres Ekle</span>
        </button>

        {address.map((address) => (
          <AddressCard key={address.id} item={address} openEdit={openEdit} selectedId={selectedId} setSelectedId={setSelectedId} />
        ))}
      </div>

      {/* Modal */}
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
              {modal === "new" ? "Yeni Adres Ekle" : "Adresi Düzenle"}
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} noValidate >

              <div className="grid grid-cols-3 gap-3 mb-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Ad
                  </label>
                  <input className={FORM_CSS}
                    {...register("name", { required: "Ad zorunludur!", minLength: { value: 2, message: "Ad en az 2 karakter olmalı" } })} type="text" placeholder="Ad" />
                  {errors.name && <div className="text-red-500">{errors.name.message}</div>}
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Soyad
                  </label>
                  <input className={FORM_CSS}
                    {...register("surname", { required: "Soyad zorunludur!", minLength: { value: 2, message: "Soyad en az 2 karakter olmalı" } })} type="text" placeholder="Soyad" />
                  {errors.surname && <div className="text-red-500">{errors.surname.message}</div>}
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Telefon
                  </label>
                  <input className={FORM_CSS}
                    {...register("phone", { required: "Telefon zorunludur!", pattern: { value: /^\+90[0-9]{10}$/, message: "Geçerli bir telefon giriniz (+90XXXXXXXXXX)" } })} type="text" placeholder="+90" />
                  {errors?.phone && <div className="text-red-500">{errors.phone.message}</div>}
                </div>
              </div>

              <div className="mb-3">
                <label className="block text-xs text-gray-500 mb-1">
                  Adres Başlığı
                </label>
                <input className={FORM_CSS}
                  {...register("title", { required: "Address title is required!", minLength: { value: 3, message: "Title must be at least 3 characters" } })} type="text" placeholder="Ev, İş, Diğer..." />
                {errors?.title && <div className="text-red-500" >{errors.title.message}</div>}
              </div>

              <div className="mb-3">
                <label className="block text-xs text-gray-500 mb-1">Şehir</label>
                <input
                  className={FORM_CSS}
                  {...register("city", {
                    required: "Şehir bilgisi zorunludur.",
                    minLength: { value: 2, message: "En az 2 karakter olmalıdır." },
                  })}
                  type="text"
                  placeholder="İstanbul"
                />
                {errors?.city && <div className="text-red-500 text-xs mt-1">{errors.city.message}</div>}
              </div>

              <div className="mb-3">
                <label className="block text-xs text-gray-500 mb-1">İlçe</label>
                <input
                  className={FORM_CSS}
                  {...register("district", {
                    required: "İlçe bilgisi zorunludur.",
                    minLength: { value: 2, message: "En az 2 karakter olmalıdır." },
                  })}
                  type="text"
                  placeholder="Kadıköy"
                />
                {errors?.district && <div className="text-red-500 text-xs mt-1">{errors.district.message}</div>}
              </div>

              <div className="mb-3">
                <label className="block text-xs text-gray-500 mb-1">Mahalle</label>
                <input
                  className={FORM_CSS}
                  {...register("neighborhood", {
                    required: "Mahalle bilgisi zorunludur.",
                    minLength: { value: 2, message: "En az 2 karakter olmalıdır." },
                  })}
                  type="text"
                  placeholder="Moda Mahallesi"
                />
                {errors?.neighborhood && <div className="text-red-500 text-xs mt-1">{errors.neighborhood.message}</div>}
              </div>

              <div className="flex gap-2 justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-sm text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  İptal
                </button>
                <button

                  className="px-5 py-2 text-sm text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors font-medium"
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
