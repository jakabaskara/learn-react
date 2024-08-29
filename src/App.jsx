 
import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';
import Button from './assets/Component/Button';

export default function App() {
    return (
        <div className="bg-slate-900 grid place-content-center min-h-screen">
            <div className="flex gap-x-3">
                <Button type='submit' text='Register' onClick={() => console.log('register')}>
                    <IconBrandFacebook />
                    Register
                </Button>
                <Button className='text-2xl bg-red-500'>
                    <IconBrandTwitter/>
                        Login
                </Button>
            </div>
        </div>
    );
}
