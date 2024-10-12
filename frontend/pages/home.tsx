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

	const formatTimeAgo = (timestamp: number) => {
		const now = Date.now();
		const secondsAgo = Math.floor((now - timestamp) / 1000);
		const minutesAgo = Math.floor(secondsAgo / 60);
		const hoursAgo = Math.floor(minutesAgo / 60);
		const daysAgo = Math.floor(hoursAgo / 24);
		const monthsAgo = Math.floor(daysAgo / 30);

		if (monthsAgo > 0) return `${monthsAgo}mo`;
		if (daysAgo > 0) return `${daysAgo}d`;
		if (hoursAgo > 0) return `${hoursAgo}h`;
		if (minutesAgo > 0) return `${minutesAgo}m`;
		return 'just now';
	};

	const dummyData = [
		{
			time: new Date('2024-10-01T10:00:00Z').getTime(),
			user: 'User1',
			key: 'Key1',
			price: '10',
			status: 'bought',
		},
		{
			time: new Date('2024-10-01T10:30:00Z').getTime(),
			user: 'User2',
			key: 'Key2',
			price: '5',
			status: 'sold',
		},
		{
			time: new Date('2024-10-01T11:00:00Z').getTime(),
			user: 'User3',
			key: 'Key3',
			price: '10',
			status: 'bought',
		},
		{
			time: new Date('2024-10-01T12:00:00Z').getTime(),
			user: 'User4',
			key: 'Key4',
			price: '5',
			status: 'sold',
		},
		{
			time: new Date('2024-10-01T12:30:00Z').getTime(),
			user: 'User5',
			key: 'Key5',
			price: '10',
			status: 'bought',
		},
		{
			time: new Date('2024-10-01T13:00:00Z').getTime(),
			user: 'User6',
			key: 'Key6',
			price: '15',
			status: 'bought',
		},
		{
			time: new Date('2024-10-01T13:30:00Z').getTime(),
			user: 'User7',
			key: 'Key7',
			price: '20',
			status: 'bought',
		},
		{
			time: new Date('2024-10-01T14:00:00Z').getTime(),
			user: 'User8',
			key: 'Key8',
			price: '15',
			status: 'sold',
		},
		{
			time: new Date('2024-10-01T14:30:00Z').getTime(),
			user: 'User9',
			key: 'Key9',
			price: '20',
			status: 'bought',
		},
		{
			time: new Date('2024-10-01T15:00:00Z').getTime(),
			user: 'User10',
			key: 'Key10',
			price: '15',
			status: 'sold',
		},
	];

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
					<div className="relative rounded-md p-6 max-w-lg w-full bg-white p-5 mx-2 flex gap-x-2">
						<div className="flex flex-col gap-y-2">
							<div className="flex flex-col items-center">
								<Image
									src={selectedImage}
									alt="Selected Cat"
									width={200}
									height={200}
								/>
								<span className="text-black text-2xl">
									Lambokitty
								</span>
								<span className="text-black text-lg">
									Key price: 500 flow
								</span>
							</div>
							<div className="gap-x-2 flex items-center">
								<button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">
									Buy a key
								</button>
								{/* needs to be conditional whether you can sell a key, also need to check rarity which key is being sold*/}
								<button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-red-500">
									Sell a key
								</button>
							</div>
						</div>
						<div>
							<div className="w-full">
								<table>
									<thead>
										<tr className="border-b">
											<th className="p-2">Time</th>
											<th className="p-2">User</th>
											<th className="p-2">Key</th>
											<th className="p-2">Price</th>
										</tr>
									</thead>
									<tbody>
										{dummyData.map((item, index) => (
											<tr key={index}>
												<td className="p-2">
													<span
														className={
															item.status ===
															'sold'
																? 'text-red-500'
																: 'text-green-500'
														}
													>
														{formatTimeAgo(
															item.time
														)}
													</span>
												</td>
												<td className="p-2">
													{item.user}
												</td>
												<td className="p-2">
													{item.key}
												</td>
												<td className="p-2">
													<span
														className={
															item.status ===
															'sold'
																? 'text-red-500'
																: 'text-green-500'
														}
													>
														{item.price} flow
													</span>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			)}

			<MouseParallaxContainer
				globalFactorX={0.05}
				globalFactorY={0.05}
				className="h-screen w-screen  flex items-center justify-center"
			>
				<div className="relative m-auto mt-44">
					<div className="animate-float h-auto w-full text-[180px] font-oswald font-bold text-[rgb(239,82,209)] -mt-10 select-none">
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
