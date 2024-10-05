import React from 'react';

export default function Home() {
	const handleConnectWallet = () => {
		// Logic to connect wallet goes here
		console.log('Connect Wallet button clicked');
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<button
				onClick={handleConnectWallet}
				style={{ padding: '10px 20px', fontSize: '16px' }}
			>
				Connect Wallet
			</button>
		</div>
	);
}
