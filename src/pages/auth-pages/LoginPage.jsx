import PageContent from "../../layout/PageContent";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { logUser } from "../../store/actions/clientActions";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
    const [rememberMe, setRememberMe] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const { register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            email: "test@example.com",
            rememberMe: false
        }
    });

    const onSubmit = (data) => { //onSubmit will be used for thunk set action.
        dispatch(logUser(data));
        
        setTimeout(() => history.goBack(), 1500); //prev page
    }

    return (
        <PageContent>
            <section className="flex min-h-[calc(100vh-14rem)] items-center justify-center px-4 py-16">
                <div className="rounded-2xl shadow-2xl shadow-[#737373] p-12 border border-[#E8E8E8] bg-white/95" >
                    <h1 className="mb-3 text-3xl font-semibold text-secondary">Welcome back</h1>
                    <p className="mb-8 text-sm text-[#7A7A7A]">Sign in to your account to continue shopping.</p>
                    <form className="flex flex-col justify-center gap-2" onSubmit={handleSubmit(onSubmit)} >
                        <h3 className="font-semibold" >Email</h3>
                        <input className="formInput mb-3"
                            {...register("email", { required: "Email is required!", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })} type="text" placeholder="email" />
                        {errors.email && <div className="text-red-500" >{errors.email.message}</div>}

                        <h3 className="font-semibold" >Password</h3>
                        <input className="formInput mb-3"
                            {...register("password", { required: "Password is required!" })} type="password" placeholder="password" />
                        {errors.password && <div className="text-red-500" >{errors.password.message}</div>}

                        <div>
                            <label htmlFor="">
                                Remember me?
                                <input {...register("rememberMe")} type="checkbox" />
                            </label>
                        </div>

                        {isSubmitting ? <div className="w-6 h-6 border-4 border-gray-300 border-t-secondary rounded-full animate-spin"></div>
                            : <button className="max-w-36 m-auto cursor-pointer rounded-3xl bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1c2334]"
                                type="submit"> Login </button>}

                        {errors.root && <div className=" text-red-500" >{errors.root.message}</div>}
                    </form>
                </div>
            </section>
        </PageContent>
    );
}

export default LoginPage;


