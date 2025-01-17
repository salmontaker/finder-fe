import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { getLoginURI, postLogin } from "@/apis/user";
import useStyles from "@/pages/login/index.css";
import useAuthStore from "@/stores/auth";

function LoginPage() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { setUserId } = useAuthStore();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const scope = searchParams.get("scope");

  const kakaoLogin = () => {
    getLoginURI()
      .then((res) => {
        const uri = res + (scope ? `&scope=${scope}` : "&prompt=login");
        window.open(uri, "_self");
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (code) {
      postLogin(code)
        .then((res) => {
          setUserId(res.userId);
          navigate("/");
        })
        .catch((err) => {
          alert(err);
          navigate("/login");
        });
    }
    if (scope) {
      kakaoLogin();
    }
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img className={styles.fullImage} src="/loginStyleImg.png" />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.logo}> Finder </div>
          <div className={styles.loginText}> Login </div>
          <div className={styles.detailText}>아이디와 비밀번호 없이 로그인해보세요.</div>

          <img
            className={styles.image}
            src="/kakaoLogin.png"
            onClick={() => {
              kakaoLogin();
            }}
          />

          <div className={styles.detailTextStylePlus}>
            채팅, 마이페이지 기능을 이용하기 위해서는 로그인이 필요합니다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
