import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm('', '', form.current, '')
      .then((result) => {
          alert('문의 내용이 발송되었습니다.');
          window.location.reload(true);
              //result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <React.Fragment>
    <section class="section-form">
    <div class="row">
                    <h2>문의하기</h2>
                </div>
    <div class="form-box">  
                <div class="row">
                 
    <form id = "contact-form"  ref={form} onSubmit={sendEmail}>
        <div className= "row">
        <div className= "col span-1-of-3">
            <label htmlFor="title">제목</label>
            </div>  
            <div className= "col span-2-of-3">
            <input type="text" className="form-control" placeholder="문의 내용 제목" name="name" />
       </div>
        </div>
        <div class="row">
                            <div class="col span-1-of-3">
            <label htmlFor="emailInput">이메일 주소</label>
            
            </div>
            <div class="col span-2-of-3">
            <input type="email" className="form-control" placeholder="이메일 주소" name="email"></input>
        
        </div>
        </div>
        <div class="row">
                            <div class="col span-1-of-3">
           <label htmlFor="message">문의 내용</label>
           </div>
                            <div class="col span-2-of-3">
            <textarea className="form-control" rows="5" placeholder="문의내용은 veggielistcontact@gmail.com로 발송됩니다." name="message"></textarea>
        </div>
        </div>
        <div class="row">
                            <div class="col span-3-of-3 btn-box">
                                <label>&nbsp;</label>
                            </div>
                            <div class="col span-3-of-3 btn-box">
                                <input type="submit" value="문의하기"/>
                            </div>
                        </div>
                        
                        </form>
    </div>
    </div>
    </section>
    </React.Fragment>

  //  <form ref={form} onSubmit={sendEmail}>
  //    <label>Name</label>
  //    <input type="text" name="name" />
  //    <label>Email</label>
  //    <input type="email" name="email" />
 //     <label>Message</label>
  //    <textarea name="message" />
  //    <input type="submit" value="Send" />
 //   </form>
  );
};

export default ContactForm;

/*import React, {useState} from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


function onTitleChange(e)  {
        setTitle( e.target.value)
    }
function onEmailChange(e) {
        setEmail(e.target.value)
    }
function onMessageChange(e) {
        setMessage(e.target.value)
    }

function resetInput (e) {
    setTitle( '');
    setEmail('');
    setMessage('');

}
const handleSubmit = async event => {
    event.preventDefault();
    console.log(message, email, title);

    await fetch('http://localhost:4000/send', {
        method: "POST",
        body: JSON.stringify(
            {'title':title,
            'email': email,
            'message':message}

            ),
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
    }).then (
        (response) => (response.json())
       
).then((response) => {
        resetInput();
        if (response.status === 'success') {
            alert("메세지가 전송되었습니다.");
            

        }
        else if (response.status === 'fail') {
            alert("메세지 전송이 되지 않았습니다. 다시 시도해주세요.")
        }
    })
}
    



    

return (
    <React.Fragment>
<section class="section-form">
<div class="row">
                <h2>문의하기</h2>
            </div>
<div class="form-box">  
            <div class="row">
             
<form id = "contact-form"  method="POST" onSubmit={handleSubmit}>
    <div className= "row">
    <div className= "col span-1-of-3">
        <label htmlFor="title">제목</label>
        </div>  
        <div className= "col span-2-of-3">
        <input type="text" className="form-control" placeholder="문의 내용 제목" value={title} onChange={onTitleChange} />
   </div>
    </div>
    <div class="row">
                        <div class="col span-1-of-3">
        <label htmlFor="emailInput">이메일 주소</label>
        
        </div>
        <div class="col span-2-of-3">
        <input type="email" className="form-control" placeholder="이메일 주소" value={email} onChange={onEmailChange}></input>
    
    </div>
    </div>
    <div class="row">
                        <div class="col span-1-of-3">
       <label htmlFor="message">문의 내용</label>
       </div>
                        <div class="col span-2-of-3">
        <textarea className="form-control" rows="5" placeholder="문의내용은 veggielistcontact@gmail.com로 발송됩니다." value={message} onChange={onMessageChange}></textarea>
    </div>
    </div>
    <div class="row">
                        <div class="col span-3-of-3 btn-box">
                            <label>&nbsp;</label>
                        </div>
                        <div class="col span-3-of-3 btn-box">
                            <input type="submit" value="문의하기"/>
                        </div>
                    </div>
                    
                    </form>
</div>
</div>
</section>
</React.Fragment>
);

}

export default ContactForm;

*/