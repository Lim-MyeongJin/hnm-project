import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ authenticate, setAuthenticate }) => {

    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성']

    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login')
    }

    //상품검색을 위한 url변경하기
    const search = (event) => {
        if (event.key === 'Enter') {
            //입력한 검색어를 읽어온 후 url을 바꿔준다
            console.log('keyword:', event.target.value)

            let keyword = event.target.value
            navigate(`/?q=${keyword}`)
        }
    }

    return (
        <div>
            <div className="login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div onClick={() => setAuthenticate(false)}>{authenticate === true ? "로그아웃" : "로그인"}</div>
            </div>
            <div className="nav-section">
                <img
                    width={100}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3FWA4JLMR29V7d4qimNUDqFd_bV1DpQ_MDMfZVxKzQ9eEhColJj4kMwh9IfFvVG4yU8&usqp=CAU"
                    alt=""
                />
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>

                <div className='menu-search'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
