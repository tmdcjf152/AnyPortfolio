import styled from 'styled-components';
import Header from '../components/Header';
import { useRecoilState} from "recoil";
import {menuState} from '../atoms'


const MainPage = () => {
	const [menuBtn, setMenuBtn] = useRecoilState(menuState)

	return (
		<>
			<MainPageBlock>
			<Header />
				<div className={menuBtn === true ? 'content-inner-box':'content-inner-box-off'}>
					<h1>메인페이지입니다.</h1>
				</div>
			</MainPageBlock>
		</>
	);
};

	const MainPageBlock = styled.main`
		.content-inner-box{
			height: 100vh;
			background-color: #d9d9d9;
			padding: 30px 30px 30px 330px;
			transition: all 0.5s;
		}
		.content-inner-box-off{
			height: 100vh;
			background-color: #d9d9d9;
	padding: 30px 60px 30px 60px;
			transition: all 0.5s;

		}
	`;
export default MainPage;
