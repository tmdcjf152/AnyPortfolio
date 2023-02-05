import styled from 'styled-components';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { color1, color2, color3, color4, color5 } from '../styles/theme';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { menuState, profileData } from '../atoms';

const Header = () => {
	const [menuBtn, setMenuBtn] = useRecoilState(menuState);
	const [profile, setProfile] = useRecoilState(profileData);

	useEffect(() => {
		fetch('/data/profiledata.json')
			.then((res) => res.json())
			.then((res) => setProfile(res));
	}, []);

	console.log(profile);

	return (
		<HeaderBlock>
			<div className={menuBtn === true ? 'header-inner-box' : 'header-inner-box-off'}>
				<span
					className='menu-btn'
					onClick={() => {
						setMenuBtn(!menuBtn);
					}}>
					{menuBtn === true ? <AiOutlineDoubleLeft /> : <AiOutlineDoubleRight />}
				</span>
				<div className='img-inner-box'>
					<div className='profileimg-box flex-center'>
						<img src='https://phinf.pstatic.net/contact/20210717_259/1626486302685CyYjP_JPEG/%C7%C1%B7%CE%C7%CA%BB%E7%C1%F8.jpg?type=s160' alt='프로필사진' />
						{/* <img src={profile[0].src} alt="프로필사진" /> */}
					</div>
				</div>
				<div className='menu-inner-box'>
					<ul>
						<li>HOME</li>
						<li>PROFILE</li>
						<li>PROJECT</li>
						<li>PORTFOLIO</li>
						<li>ABOUT</li>
					</ul>
				</div>
				<footer className='footer-inner-box flex-center'>Copyright 2023~. SeungchulChoi All Rights Reserved.</footer>
			</div>
		</HeaderBlock>
	);
};

const HeaderBlock = styled.nav`
	position: fixed;
	left: 0;
	top: 0;
	width: 300px;
	height: 100%;
	.header-inner-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding-top: 70px;
		background: ${color2};
		transition: all 0.5s;
		.menu-btn {
			position: absolute;
			top: 20px;
			left: 250px;
			font-size: 30px;
			color: #ffffffa5;
			transition: all 0.5s;
			cursor: pointer;
		}
		.img-inner-box {
			width: 100%;
			padding: 20px 0px;
			.profileimg-box {
				width: 100%;
				height: 100%;
				opacity: 1;
				img {
					border: 5px solid #fff;
					border-radius: 50%;
					box-shadow: 0px 0px 20px 1px rgba(255, 255, 255, 0.75);
					-webkit-box-shadow: 0px 0px 20px 1px rgba(255, 255, 255, 0.75);
					-moz-box-shadow: 0px 0px 20px 1px rgba(255, 255, 255, 0.75);
				}
			}
		}
		.menu-inner-box {
			position: relative;
			left: 0;
			width: 100%;
			height: 100%;
			transition: all 0.5s;
			ul {
				padding: 50px 60px;
				li {
					position: relative;
					padding: 20px 0px;
					font: 25px/1 'apple';
					color: ${color2};
					text-shadow: -1px 0 ${color5}, 0 1px ${color5}, 1px 0 ${color5}, 0 -1px ${color5};
					transition: all 0.5s;
					cursor: pointer;
					&::before {
						position: absolute;
						top: 16px;
						left: -15px;
						display: block;
						content: '';
						width: 5px;
						height: 30px;
						border: 1px solid ${color5};
						transform: translateX(0px);
						transition: all 0.5s;
					}
					&:hover {
						color: ${color5};
						text-shadow: -1px 0 ${color1}, 0 1px ${color1}, 1px 0 ${color1}, 0 -1px ${color1};
						&::before {
							background: ${color5};
							transform: translateX(150px);
						}
					}
				}
			}
		}
		.footer-inner-box {
			width: 100%;
			padding-bottom: 100px;
			font-size: 13px;
			color: ${color5};
		}
	}
	.header-inner-box-off {
		width: 0%;
		height: 100%;
		padding-top: 70px;
		background: ${color2};
		transition: all 0.5s;
		.menu-btn {
			position: absolute;
			top: 20px;
			left: 20px;
			font-size: 30px;
			color: ${color1};
			transition: all 0.5s;
			z-index: 2;
			cursor: pointer;
		}
		.img-inner-box {
			width: 100%;
			padding: 20px 0px;
			.profileimg-box {
				width: 0%;
				height: 100%;
				opacity: 0;
				transition: all 0.2s;
				img {
					border: 5px solid #fff;
					border-radius: 50%;
					box-shadow: 0px 0px 20px 1px rgba(255, 255, 255, 0.75);
					-webkit-box-shadow: 0px 0px 20px 1px rgba(255, 255, 255, 0.75);
					-moz-box-shadow: 0px 0px 20px 1px rgba(255, 255, 255, 0.75);
				}
			}
		}
		.menu-inner-box {
			position: relative;
			left: -150px;
			width: 0%;
			height: 100%;
			transition: all 0.5s;
			ul {
				flex-direction: column;
				padding: 50px 0px;
				li {
					padding: 20px 0px;
					font: 25px/1 'apple';
					color: ${color5};
					transition: all 0.5s;
					cursor: pointer;
					&:hover {
						transform: scale(1.2);
					}
				}
			}
		}
		.footer-inner-box {
			display: none;
			width: 0%;
			padding-bottom: 100px;
			font-size: 13px;
			color: ${color5};
		}
	}
`;
export default Header;
