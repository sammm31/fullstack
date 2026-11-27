
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/registerschema";
function Register() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(registerschema)
    });

    function onSubmit1(data) {
       console.log(data);
       alert("Register sucessful");
       navigate("/",{state:data});
    }

    return (
         <div className="min-h-screen flex justify-center items-center bg-gray-100">

        
        <form onSubmit={handleSubmit(onSubmit1)} 
          className= " bg-yellow-100 w-96 p-8 rounded-xl shadow-lg space-y-2" 
        >
        <h1 className="text-2xl font-bold text-center text-blue-600">
                REGISTER FORM</h1>
        

            <input
                type="text"
                placeholder="Enter your name"
                {...register("name")}
                className="w-full border border-black-300 p-3 rounded-lg "
                
            />
            <p>{errors.name?.message}</p>

            <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="w-full border border-black-300 p-3 rounded-lg "
            />
            <p>{errors.email?.message}</p>

            <input
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="w-full border border-black-300 p-3 rounded-lg "
            />
            <p>{errors.password?.message}</p>

            <input
                type="number"
                placeholder="Enter your age"
                {...register("age")}
                className="w-full border border-black-300 p-3 rounded-lg "
            />
            <p>{errors.age?.message}</p>

            <button type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold">SUBMIT
            
            </button>

        </form>
        </div>
    );
}

export default Register;
