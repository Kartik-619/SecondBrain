export default function Login(){
    const{register, handleSubmit}=useForm<FormValues>({
        defaultValues:{
            email:'',
            password:''
        }
    })
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                placeholder="Email"
                {...register("email",{required:true})}
                />
                <input
                placeholder="password"
                {...register("password",
                    {minLength:8,message:'Min 8 characters are required'})}
                />

                <button type="submit"> Login</button>
            </form>
        </div>
    )
}