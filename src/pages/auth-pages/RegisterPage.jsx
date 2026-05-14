import PageContent from "../../layout/PageContent";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory  } from "react-router-dom";

function RegisterPage() {
    const history = useHistory();
    const [roles, setRoles] = useState([]);

    const { register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            email: "test@example.com",
            role_id: 3,
        }
    });
    const selectedRole = watch("role_id");
    const password = watch("password");

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                await new Promise((resolve, reject) => setTimeout(resolve, 1000));
                const res = await axios.get(
                    "https://workintech-fe-ecommerce.onrender.com/roles"
                );
                setRoles(res.data);
            } catch (err) {
                console.error("Roles fetch error:", err);
            }
        };

        fetchRoles();
    }, []);


    const onSubmit = async (data) => {
        try {
            const { confirmPassword, ...rest } = data;

            const result = await axios.post(
                "https://workintech-fe-ecommerce.onrender.com/signup",
                rest
            );

            toast.success(result.data.message);
            setTimeout(() => history.goBack(), 1500); //prev page
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong");
            setError("root", { message: "Something went wrong" });
        }
    };

    return(
        <PageContent>
            <section className="flex min-h-[calc(100vh-14rem)] items-center justify-center px-8 py-16">
                <div className="rounded-2xl shadow-2xl shadow-[#737373] p-12 border border-[#E8E8E8] bg-white/95 ">
                    <form className="flex flex-col justify-center gap-2" onSubmit={handleSubmit(onSubmit)} >

                        <h3 className="font-semibold" >Name</h3>
                        <input className="formInput mb-3"
                            {...register("name", { required: "Name is required!", minLength: { value: 3, message: "Name must be at least 3 characters" } })} type="text" placeholder="name" />
                        {errors.name && <div className="text-red-500" >{errors.name.message}</div>}

                        <h3 className="font-semibold" >Email</h3>
                        <input className="formInput mb-3"
                            {...register("email", { required: "Email is required!", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })} type="text" placeholder="email" />
                        {errors.email && <div className="text-red-500" >{errors.email.message}</div>}

                        <h3 className="font-semibold" >Password</h3>
                        <input className="formInput mb-3"
                            {...register("password", { required: "Password is required!", minLength: { value: 6, message: "Password must be at least 6 characters" } })} type="password" placeholder="password" />
                        {errors.password && <div className="text-red-500" >{errors.password.message}</div>}

                        <h3 className="font-semibold">Confirm Password</h3>
                        <input className="formInput mb-3"
                            {...register("confirmPassword", { required: "Please confirm your password!", validate: (value) => value === password || "Passwords do not match" })} type="password"
                            placeholder="re-type password"
                        />
                        {errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword.message}</div>}

                        <h3 className="font-semibold" >Role</h3>
                        {roles.length > 0 ?
                            <select className="mb-4" {...register("role_id", { valueAsNumber: true })}>
                                {roles.map((role) => (
                                    <option key={role?.id} value={role?.id} >
                                        {role?.name} </option>
                                ))}
                            </select> : <div className="m-auto w-6 h-6 border-4 border-gray-300 border-t-secondary rounded-full animate-spin" />}

                        {selectedRole == 2 ?
                            <div className="flex flex-col justify-center gap-2 mb-5">
                                <h3 className="font-semibold" >Store Name</h3>
                                <input className="formInput mb-3"
                                    {...register("store.name", { required: "Store Name is required!", minLength: { value: 3, message: "Name must be at least 3 characters" } })} type="text" placeholder="Store name" />
                                {errors.store?.name && <div className="text-red-500" >{errors.store.name.message}</div>}

                                <h3 className="font-semibold" >Store Phone</h3>
                                <input className="formInput mb-3"
                                    {...register("store.phone", { required: "Store Name is required!", pattern: { value: /^\+90[0-9]{10}$/, message: "Please enter a valid Turkish phone number (+90XXXXXXXXXX)" } })} type="text" placeholder="+90" />
                                {errors.store?.phone && <div className="text-red-500" >{errors.store.phone.message}</div>}

                                <h3 className="font-semibold" >Store TAX Id</h3>
                                <input className="formInput mb-3"
                                    {...register("store.tax_no", { required: "Store Name is required!", pattern: { value: /^T[0-9]{4}V[0-9]{6}$/, message: "Please enter a valid ID number (TXXXXVXXXXXX)" } })} type="text" placeholder="TAX NO" />
                                {errors.store?.tax_no && <div className="text-red-500" >{errors.store.tax_no.message}</div>}

                                <h3 className="font-semibold" >IBAN</h3>
                                <input className="formInput mb-3"
                                    {...register("store.bank_account", { required: "Store Name is required!", minLength: { value: 11, message: "Please enter a valid IBAN number (TRXXXXXXXXXX)" } })} type="text" placeholder="IBAN" />
                                {errors.store?.bank_account && <div className="text-red-500" >{errors.store.bank_account.message}</div>}

                            </div>
                            : null}

                        {isSubmitting ? <div className="w-6 h-6 border-4 border-gray-300 border-t-secondary rounded-full animate-spin"></div>
                            : <button className="max-w-36 m-auto cursor-pointer rounded-3xl bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1c2334]"
                                type="submit"> Register </button>}

                        {errors.root && <div className=" text-red-500" >{errors.root.message}</div>}
                    </form>
                </div>
            </section>
        </PageContent>
    );
}
export default RegisterPage;

