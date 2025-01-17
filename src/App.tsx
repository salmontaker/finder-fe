import { FluentProvider } from "@fluentui/react-components";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import useStyles from "@/App.css";
import Header from "@/components/Header";
import ProtectedRoute from "@/components/ProtectedRoute";
import Sidebar from "@/components/Sidebar";
import SidebarMobile from "@/components/SidebarMobile";
import WriteButton from "@/components/WriteButton";
import ChatPage from "@/pages/chat";
import DetailPage from "@/pages/detail";
import LoginPage from "@/pages/login";
import MainPage from "@/pages/main";
import ProfilePage from "@/pages/profile";
import SearchPage from "@/pages/search";
import WritePage from "@/pages/write";
import useOptionStore from "@/stores/option";
import { darkTheme, lightTheme } from "@/themes";

function App() {
  const styles = useStyles();
  const { isDarkTheme } = useOptionStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <FluentProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        <div className={styles.root}>
          <Sidebar />
          <SidebarMobile isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <WriteButton />
          <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
              <Routes>
                <Route element={<MainPage />} path="/" />
                <Route element={<SearchPage />} path="/search" />
                <Route element={<DetailPage />} path="/detail/:id" />
                <Route element={<LoginPage />} path="/login" />
                <Route element={<ProtectedRoute element={<WritePage />} />} path="/write" />
                <Route element={<ProtectedRoute element={<ChatPage />} />} path="/chat" />
                <Route element={<ProtectedRoute element={<ProfilePage />} />} path="/profile" />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </FluentProvider>
  );
}

export default App;
