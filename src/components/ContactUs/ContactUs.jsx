import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef()
    const [errMessage, setErrMessage] = useState('');

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_r9jxj53', 'template_j5urgdw', form.current, '-0fDHBBsgHTbyaTMT')
      .then((result) => {
        setErrMessage("Message sent successfully!");
        setTimeout(() => {
            setErrMessage("");
        }, 5000);
        console.log(result.text);
    }, (error) => {
            setErrMessage('Failed to send message.');
        });

      e.target.reset();
    };

    return (
      <div className='sm:pt-36 pt-16 rounded'>
        <div class="space-y-12">
            <div className='bg-oxford text-white flex justify-center lg:px-18 sm:px-12 px-6 py-24 pb-20 sm:text-left'>
                <div className='lg:w-[84rem] pb-20'>
                  <h1 className='text-white text-center sm:text-7xl font-mont font-bold text-4xl px-12'>Contact Us</h1>
                  <h3 className='text-center sm:text-2xl font-league sm:pb-36 text-xl pt-12 pb-16 px-8 sm:px-16'>Below, you will find a form to contact us with any inquiries or feedback you may have. If your message requires a response, you can expect to receive an email from our team at the address you have provided.<br/><br/>We value your interest and assure you that your information will be handled with confidentiality.</h3>
                  <div className='flex justify-center'>
                    <form ref={form} onSubmit={sendEmail} className="bg-plat p-8 rounded-lg shadow-lg w-full scale-75 md:scale-100 lg:w-[65rem] font-medium">
                        <div className="mb-4">
                            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                                <input className="rounded appearance-none border w-full py-2 px-3 text-oxford leading-tight focus:outline-none focus:shadow-outline"
                                    type="text" 
                                    placeholder="First Name" 
                                    name='first-name'
                                    aria-label="First Name"
                                    required />
                                <input className="rounded appearance-none border w-full py-2 px-3 text-oxford leading-tight focus:outline-none focus:shadow-outline"
                                    type="text" 
                                    placeholder="Last Name" 
                                    name='last-name'
                                    aria-label="Last Name"
                                    required />
                            </div>
                        </div>
                        <div className="mb-4">
                            <input className=" rounded appearance-none border w-full py-2 px-3 text-oxford leading-tight focus:outline-none focus:shadow-outline"
                                type="email" 
                                placeholder="Email" 
                                name='email'
                                aria-label="Email"
                                required />
                        </div>
                        <div className="mb-6">
                            <textarea className="rounded appearance-none border w-full py-2 px-3 text-oxford leading-tight focus:outline-none focus:shadow-outline"
                                name='message'
                                placeholder="Your message..." 
                                aria-label="Message" 
                                rows="10"
                                required></textarea>
                        </div>
                        <div className="pb-6 pl-2 text-oxford font-league text-md">
                            <h3>
                                {errMessage}
                            </h3>
                        </div>
                        <div>
                            <button className="rounded px-4 py-2 bg-oxford text-silver hover:bg-yinmin font-mont font-semibold text-xl" type="submit">Submit</button>
                        </div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  
      
      
}

export default ContactUs;
