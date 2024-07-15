import { React, useState } from 'react'
import { Link } from 'react-router-dom';


const SubscriptionForm = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const handleChange = event => {
        setEmail(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();

        setError(null);

        if (isValidEmail(email)) {
            alert('The email is valid');
        } else {
            setError('Please enter a valid email');
        }
    };
    return (
        <section className='my-8 bg-primary-mainbody-bluecolor text-white text-center font-opensans max-w-[700px] m-auto  p-8 relative -mb-[2px]'>
            <h2 className='text-2xl mb-4 font-semibold'> Get in Touch today</h2>

            <p className='my-8 leading-6 text-white/60'>
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                questions, our support team would be happy to help you.

            </p>
            {/* <form onSubmit={handleSubmit} className=' grid grid-cols-1 sm:grid-cols-[500px_auto] gap-4 '> */}

            {/* <input type="text" value={email} onChange={handleChange} placeholder="email@example.com" className='w-full  p-4 rounded-full text-black appearance-none mb-4 sm:mb-0' /> */}

<Link to={'/contact'} > <button type="submit"  className=" w-1/4 px-5 py-4 rounded-full text-white font-[700] hover:bg-secondary-cyangradient bg-secondary-bluegradient ">
               Enquire Now
            </button></Link>
           
            {/* </form> */}
            {error && <h2 style={{ color: '#D63301', textAlign: 'left' }}>{error}</h2>}
        </section>
    )
}

export default SubscriptionForm