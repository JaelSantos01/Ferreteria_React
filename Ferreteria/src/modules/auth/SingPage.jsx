import { useContext } from "react";
import {} from '../../assets/CSS/SingPage.css'
import logo from '../../assets/img/logo.jpg'
import logoSesion from '../../assets/img/logo_completo.jpg'
import prueba from '../../assets/img/logo-blackLike.png'
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
        <div className="justify-center w-screen h-screen overflow-hidden flex-col">
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
                    <button type="button" className="rounded-full bg-white p-1 w-[8rem] text-black hover:bg-black hover:text-white">
                        Iniciar Sesión
                    </button>
                </div>
            </nav>

        <div className="flex items-center justify-center h-screen">
            <div className="border border-slate-300 rounded-lg w-[60rem] flex justify-center items-center">
                <div className="bg-gray-300 h-[30rem] border border-slate-300 w-1/2 flex justify-center items-center">
                <img src={logoSesion} alt="" style={{ width: 420, height: 350 }} />
                </div>
                <div className="w-1/2 flex items-center justify-center flex-col p-2">
                    <p className="align-top font-medium text-2xl p-2">Iniciar Sesión</p>
                    <form className="p-9" noValidate>
                        <div className="mx-auto w-screen-sm">

                            <div className="grid justify-stretch space-x-4">
                                <span className="font-bold text-blue-800">Usuario:</span>
                                <FloatingLabel className="bg-gray-500 " variant="outlined" label="Usuario" type="text" name="username" id="username"/>
                            </div>

                            <div className="mt-2">
                                <span className="font-bold text-blue-800">Contraseña:</span>
                                <FloatingLabel variant="outlined" label="Contraseña" type="password" name="password"
                                id="password" placeholder="********" required className="bg-gray-500"/>
                            </div>
                        </div>

                        <Button type="submit" className="justify-center items-center border border-slate-300 w-full bg-blue-800 text-white hover:bg-black hover:text-white mb-3">
                            Iniciar Sesión
                        </Button>

                        <div className="items-center flex flex-col">
                            <p className="text-center text-red-700 font-bold">¿Aún no tienes cuenta?</p>
                            <p className="text-center text-red-700 p-2">Registrate gratis para conocer los lanzamientos y ofertas que tenemos para tí.</p>
                            <label className="underline text-center hover:text-gray-800 font-bold text-2xl">Registrarse</label>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        

        </div>
        </>
    )
};

export default SingPage;