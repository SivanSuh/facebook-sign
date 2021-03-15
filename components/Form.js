import React from "react";
import "./form.css"
import { Link } from "react-router-dom";

function Form(){
    return(
        <div>
            <form className="form">
                    <input placeholder="E-posta ve ya telefon numarası" />
                    <input placeholder="Sifre"/>
                    <button className="btn" type="submit" >Giriş Yap</button>
                    <Link to="/">  
                        <p className="sifre">Şifreni mi unuttun ?</p> 
                    </Link>
                    <div style={{width:"90%", height:"1px" ,backgroundColor:"#DADDE1"}}></div>
                    <button className="button">Yeni Hesap Oluştur</button>
                    <hr/>
            </form>
            <p style={{marginLeft:"50px"}}>Ünlü biri, müzik grubu veya şirket için <strong><Link className="page" to="/">Sayfa Oluştur</Link></strong></p>
        </div>
    )
}

export default Form;