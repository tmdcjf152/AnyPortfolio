import styled from 'styled-components';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { color1, color2, color3, color4, color5 } from '../styles/theme';
import { useState } from 'react';
import { useRecoilState, useResetRecoilState } from "recoil";
import {menuState} from '../atoms'

const Header = () => {
	const [menuBtn, setMenuBtn] = useRecoilState(menuState)
	

	return (
		<HeaderBlock>
			<div className={menuBtn === true ? 'header-inner-box' : 'header-inner-box-off'}>
				<span
					className='menu-btn'
					onClick={() => {
						setMenuBtn(!menuBtn);
					}}>
					{menuBtn === true ? <AiOutlineDoubleLeft />:<AiOutlineDoubleRight />}
				</span>
			</div>
		</HeaderBlock>
	);
};

const HeaderBlock = styled.nav`
	position: fixed;
	left: 0;
	top: 0;
	width: 300px;
	height: 100vh;
	.header-inner-box {
		width: 100%;
		height: 100%;
		background: ${color1};
		transition: all 0.5s;
		.menu-btn {
			position: absolute;
			top: 20px;
			left: 250px;
			font-size: 30px;
			color: #ffffffa5;
			transition: all 0.5s;
		}
	}
	.header-inner-box-off {
		width: 0%;
		height: 100%;
		background: ${color1};
		transition: all 0.5s;
		.menu-btn {
			position: absolute;
			top: 20px;
			left: 20px;
			font-size: 30px;
			color: ${color1};
			transition: all 0.5s;
		}
	}
`;
export default Header;
