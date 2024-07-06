import React from 'react';

function WalletButton() {
    const handleWithdrawTokens = () => {
        // Логика вывода токенов на основной кошелек
    };

    return (
        <button onClick={handleWithdrawTokens}>Вывести токены на кошелек Telegram</button>
    );
}

export default WalletButton;