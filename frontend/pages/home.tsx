import React, { useState } from 'react'; // Import useState for managing modal state
import {
	MouseParallaxContainer,
	MouseParallaxChild,
} from 'react-parallax-mouse';
import Image from 'next/image';

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
	const [selectedImage, setSelectedImage] = useState(''); // State to manage selected image

	const openModal = (imageSrc: string) => {
		setSelectedImage(imageSrc); // Set the selected image
		setIsModalOpen(true); // Open the modal
	};

	const closeModal = () => {
		setIsModalOpen(false); // Close the modal
	};

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
			{/* Modal Component */}
			{isModalOpen && (
				<div className=" modal fixed inset-0 flex justify-center items-center z-50">
					{/* Backdrop */}
					<div
						className="absolute inset-0 bg-black opacity-50"
						onClick={closeModal}
					></div>

					{/* Modal Content */}
					<div className="relative rounded-md p-6 max-w-lg w-full bg-white p-5 mx-2 text-white">
						<Image
							src={selectedImage}
							alt="Selected Cat"
							width={100}
							height={100}
						/>
					</div>
				</div>
			)}

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
						className="absolute left-20 top-10 hidden w-50 sm:block cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
						style={{ zIndex: 2 }}
						onClick={() => openModal('/250shadow.png')} // Open modal on click
					>
						<MouseParallaxChild factorX={0.3} factorY={0.5}>
							<Image
								src="/250shadow.png"
								alt="cat 1"
								priority={true}
								width={350}
								height={350}
							/>
						</MouseParallaxChild>
					</div>
					<div
						className="absolute -left-20 top-10 hidden w-60 sm:block cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
						onClick={() => openModal('/1841972shadow.png')}
					>
						<MouseParallaxChild factorX={0.15} factorY={0.35}>
							<Image
								src="/1841972shadow.png"
								alt="cat 2"
								priority={true}
								width={300}
								height={300}
							/>
						</MouseParallaxChild>
					</div>
					<div
						className="absolute right-10 top-20 hidden w-40 sm:block cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
						onClick={() => openModal('/100shadow.png')}
					>
						<MouseParallaxChild factorX={0.15} factorY={0.35}>
							<Image
								src="/100shadow.png"
								alt="cat 3"
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
