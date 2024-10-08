import React from 'react';
import {
	MouseParallaxContainer,
	MouseParallaxChild,
} from 'react-parallax-mouse';
import Image from 'next/image';

export default function Home() {
	// const handleConnectWallet = () => {
	// 	// Logic to connect wallet goes here
	// 	console.log('Connect Wallet button clicked');
	// };

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
			className="w-full"
		>
			<MouseParallaxContainer
				globalFactorX={0.05}
				globalFactorY={0.05}
				className="h-screen w-screen  flex items-center justify-center"
			>
				<div className="relative m-auto mt-44">
					<div className="animate-float h-auto w-full text-[180px] font-oswald font-bold text-[rgb(239,82,209)] -mt-10">
						CAT ERA
					</div>
					<div
						className="absolute left-20 top-10 hidden w-50 sm:block"
						style={{ zIndex: 2 }}
					>
						<MouseParallaxChild factorX={0.3} factorY={0.5}>
							<Image
								src="/250shadow.png"
								alt="Botond Fekete"
								priority={true}
								width={350}
								height={350}
							/>
						</MouseParallaxChild>
					</div>
					<div className="absolute -left-20 top-10 hidden w-60 sm:block">
						<MouseParallaxChild factorX={0.15} factorY={0.35}>
							<Image
								src="/1841972shadow.png"
								alt="Botond Fekete"
								priority={true}
								width={300}
								height={300}
							/>
						</MouseParallaxChild>
					</div>
					<div className="absolute right-10 top-20 hidden w-40 sm:block">
						<MouseParallaxChild factorX={0.15} factorY={0.35}>
							<Image
								src="/100shadow.png"
								alt="Botond Fekete"
								priority={true}
								width={300}
								height={300}
							/>
						</MouseParallaxChild>
					</div>
				</div>
			</MouseParallaxContainer>
			{/* <button
				onClick={handleConnectWallet}
				style={{ padding: '10px 20px', fontSize: '16px' }}
			>
				Connect Wallet
			</button> */}
		</div>
	);
}
