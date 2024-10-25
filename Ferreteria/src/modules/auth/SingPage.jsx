import { useContext } from "react";
import {} from '../../assets/CSS/SingPage.css'
import logo from '../../assets/img/logo-blackLike.png'
import { Button, FloatingLabel } from 'flowbite-react';

const navigation = [
    {name: 'Mis apartados', href: '#', current: true},
    {name: 'Productos', href: '#', current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const SingPage = () =>{
    //const navigate = useNavigate();
    /*const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: yup.object().shape({
            username: yup.string().required('Campo obligatorio'),
            password: yup.string().required('Campo obligatorio'),

        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const response = await AxiosClientJSON({
                    url: '/api/auth/signin',
                    method: 'POST',
                    data: values
                });
                console.log(!response.error);
                if (!response.error) {
                    sessionStorage.setItem('token' , response.data?.token)
                    sessionStorage.setItem('email' ,  response.data?.email)
                    sessionStorage.setItem('id' ,  response.data?.id)

                    navigate('/Users', { replace: true });
                } else throw Error("Error");
            } catch (error) {
                console.log(error)
                customAlert(
                    'Iniciar Sesion',
                    'Usuario y/o contraseña incorrecta',
                    'info'
                );
            } finally {
                setSubmitting(false);
            }
        }
    });
    */
    return(
        <>
        <div className="justify-center w-screen">
            <nav className="relative parent bg-orange-500 w-full h-16 flex justify-center">
                <div className="flex flex-1 items-center sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <img src={logo} style={{width: 250, height: 40 }} className="h-8 w-auto"/>
                    </div>
                    <div className="flex sm:ml-6 sm:block">
                        <div className="flex space-x-2 justify-center">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'hover:text-white' : 'text-black-300 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium',
                                    )}
                                    >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="inset-y-0 right-0 flex items-center flex mr-4">
                    <button type="button" className="rounded-full bg-white p-2 text-black hover:bg-black hover:text-white">
                        Iniciar Sesión
                    </button>
                </div>
            </nav>

            <div className="border border-slate-300 rounded-md w-[50rem] justify-center items-center flex">
                <div className="bg-gray-300 justify-center py-2 items-center">
                    <img src={logo} alt="" style={{ width:300, height: 50 }}/>
                </div>
                <div className="justify-center bg-indigo-600">
                    <form className="space-y-4 md:space-y-6 p-9" noValidate>
                        <div className="mx-auto w-screen-sm">
                            <div className="grid grid-flow-col justify-stretch space-x-4">
                                <FloatingLabel variant="outlined" label="Usuario" type="text" name="username" className=""
                                id="username"/>
                            </div>

                            <div className="mt-2">
                                <FloatingLabel variant="outlined" label="Contraseña" type="password" name="password"
                                id="password" placeholder="********" required/>
                            </div>
                        </div>

                        <Button type="submit" color="bg-blue-800" style={{ backgroundColor: "var(--red-3)"}}
                        className="w-full">
                            Iniciar Sesión
                        </Button>
                    </form>
                </div>
            </div>
            
        </div>
        </>
    )
};

export default SingPage;