// import CardList from "../../components/CardList/CardList";
import "./LoginPage.scss";
import UserForm from "../../components/UserForm/UserForm";
import { login, loginTestUser } from "../../utils/auth";
import Banner from "../../components/Banner/Banner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from "../../components/Button/Button";
import HomeSection from "../../components/HomeSection/HomeSection";
import whatUrl from "../../assets/images/home_what.png"
import howUrl from "../../assets/images/home_how.png"
import shareUrl from "../../assets/images/home_share.png"
import logoUrl from "../../assets/logo/nextwatch-white.svg"

type PropTypes = {
  isLoggedIn: boolean;
};

const LoginPage = ({ isLoggedIn }: PropTypes) => {
  const navigate = useNavigate();
  const introductions=[
    {
      text:"What to do with NextWatch?",
      title:"browse and watch trailers",
      imgUrl:whatUrl
    },
    {
      text:"How to use it?",
      title:"create nextwatch list",
      imgUrl:howUrl,
      reverse:true
    },
    {
      text:"Why nextwatch?",
      title:"Share",
      imgUrl: shareUrl
    }
  ]



  useEffect(() => {
    if (isLoggedIn) {
      navigate("/watches");
    }
  });
  return (
     <div className="login-page">
      <nav style={{display:"flex", justifyContent:"space-between"}}>

        <a href="#">
          <img className="login-page__logo" style={{width:"2.5rem"}} src={logoUrl} alt="logo"  />
        </a>
        <div style={{display:"flex"}}>
          <a href="#login">Login</a>
          <a href="#signup">SignUp</a>
        </div>
      </nav>
      {introductions.map(({title, imgUrl, text, reverse})=>(
        <HomeSection reverse={reverse || false} sectionTitle={title} imgUrl={imgUrl} text={text}/>
      ))
      }
      <div className="login-page__top">
        <div  className="login-page__box">
          <h1>Login</h1>
          {/* <UserForm type="login" handleSubmit={login(navigate)} /> */}
          <UserForm type="login" handleSubmit={login()} />
          <div className="login-page__banner login-page__banner--first">
            <Banner />
          </div>
        </div>
         <p className="login-page__text">OR</p>
        <div className="login-page__box login-page__box--right">
          <div className="login-page__cta">
            <Button className="login-page__button" text="try with test acct" handleClick={loginTestUser()}/>
          </div>
        </div>
      </div>
      <div className="login-page__banner login-page__banner--second">
        <Banner />
      </div>
    </div>
  

  );
};

export default LoginPage;
