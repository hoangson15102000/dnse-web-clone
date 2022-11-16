import React from 'react';
import './Login.css';
import { AiOutlineDown } from 'react-icons/ai';
import { useEffect, useState } from 'react';



const Login = () => {
    const [user1, setUser1] = useState(true);
    const [user2, setUser2] = useState(false);
    var showDate = new Date();
    var displayToCurrentTime = showDate.getDate() + '/' + showDate.getMonth() + '/' + showDate.getFullYear();
    var displayTime = showDate.getHours() + ':' + showDate.getMinutes() + ':' + showDate.getSeconds();


    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const randomNumber = Math.floor(Math.random() * 10);
    useEffect(() => {
        const arrayContent = [
            {
                content:
                    "It's not whether you're right or wrong that's important, but how much money you make when you're right and how much you lose when you're wrong.",
                author: "Bill Gates",
            },
            {
                content:
                    "The secret to investing is to figure out the value of something – and then pay a lot less.",
                author: "Joel Greenblatt",
            },
            {
                content: "Biết những gì bạn sở hữu và biết tại sao bạn sở hữu nó.",
                author: "Peter Lynch",
            },
            {
                content:
                    "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
                author: "Paul Samuelson",
            },
            {
                content:
                    "Luôn luôn chọn nhà đầu tư dựa vào việc bạn muốn làm việc với ai, kết bạn với ai, và nhận được lời khuyên từ ai. Đừng bao giờ chọn nhà đầu tư dựa vào sự định giá.",

                author: "Jason Goldberg",
            },
        ];
        const randomContent =
            arrayContent[Math.floor(Math.random() * arrayContent.length)];

        setAuthor(randomContent.author);

        setContent(randomContent.content);
    }, [randomNumber]);
    useEffect(() => {
        const userType1 = document.querySelector('.item1');
        const userType2 = document.querySelector('.item2');
        if (user1) {
            userType2.classList.remove('active');
            userType1.classList.add('active');
        }
        if (user2) {
            setUser1(false)

            userType2.classList.add('active')
            userType1.classList.remove('active')
        }



    })

    return (
        <>
            <main className='main_login'>
                <header className='heading'>
                    <nav className='nav_login'>
                        <img className='nav_logo_dnse' src={require('./logo_transparent.png')} alt="/" />
                        <div>
                            <p className='nav_name'>Entrade X</p>
                            <p className='nav_sub_name'>by DNSE</p>
                        </div>
                        <ul className='nav_list'>
                            <li><a href='/' >Bảng giá</a></li>
                            <li><a href='/'>Phân tích <  AiOutlineDown className='icon-down-ai' /></a></li>
                            <li><a href='/'>Tiện ích <  AiOutlineDown className='icon-down-ai' /></a></li>
                        </ul>
                        <div className='nav_time'>
                            <p >{displayTime} <span>{displayToCurrentTime}</span></p>
                            <div className='time_icon'>
                                <img src={require('./Vector.png')} alt='/' />
                            </div>
                        </div></nav>
                </header>

                <div className='main_content'>
                    <img src={require('./pastel-pink-3d-background-abstract-with-balls-3d-rendering-design 2 2.jpg')} alt='/' />
                    <div className='sub_main_content'>
                        <div className='table-1'>
                            <div className='left_table_login'>
                                <div className='left_table_sub'>
                                    <img src="https://entradex.dnse.com.vn/assets/quote-string.5dde6fee.svg"
                                        alt="/" />

                                    <p className='sub_content' >
                                        {content}
                                    </p>
                                    <div className='border-1' ></div>
                                    <p className='sub_author'>{author}</p>
                                </div>
                            </div>
                            <div className='right_table_login'>
                                <div className='right_sub_login'>
                                    <form className='form_login'>
                                        <h1 className='login_h1'>ĐĂNG NHẬP</h1>
                                        <p className='login_p'>Trải nghiệm khi chưa có tài khoản <span><a href='/'>Đăng ký ngay</a></span></p>
                                        <div className='type_user'>

                                            <div onClick={() => setUser1(true)} className='user_item item1 '>Cá nhân</div>
                                            <div onClick={() => setUser2(true)} className='user_item item2'>Môi giới</div>

                                        </div>
                                        <div className='user_email_password'>
                                            <label >Tài khoản/ Email / Số điện thoại</label>
                                            <input placeholder='064C' />
                                        </div>
                                        <div className='login_password'>
                                            <div className='space_div'></div>
                                            <input placeholder='Nhập mật khẩu' />
                                        </div>
                                        <div className='btn_login'>
                                            <button>Đăng nhập</button>
                                        </div>
                                        <p className='forget_password'><a className='forget_password' href='/' >Quên mật khẩu</a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Login
